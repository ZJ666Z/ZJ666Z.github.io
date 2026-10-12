var e=`/* Async action controller, generalised from the studio's demo task. Pure and disposable:
   no DOM, an injectable scheduler, a revision guard against stale results, AbortSignal support.

   Timing (unchanged from the tested demo task):
   - \`waiting\` first; the loader appears only if the task is still pending after \`delay\` (160ms).
   - Once shown, the loader stays at least \`minVisible\` (320ms) so it never flashes.
   - A task of known duration therefore settles at settleDelay(duration).
   - Success holds for \`holdSuccess\` (1600ms) and returns to idle; errors stay until the next run. */

export type AsyncState = 'idle' | 'waiting' | 'loading' | 'success' | 'error' | 'cancelled';

export const loaderDelay = 160;
export const minimumLoaderTime = 320;
export const successHold = 1600;

/** When a task of known duration settles: instant tasks never show a loader, visible waits stay readable. */
export function settleDelay(duration: number) {
  if (!Number.isFinite(duration) || duration < 0) throw new RangeError('Duration must be a finite nonnegative number');
  return duration <= loaderDelay ? duration : Math.max(duration, loaderDelay + minimumLoaderTime);
}

export interface Scheduler {
  /** Run \`callback\` after \`delay\` ms; returns a cancel function. */
  set(callback: () => void, delay: number): () => void;
  now(): number;
}

export const realScheduler: Scheduler = {
  set(callback, delay) {
    const id = setTimeout(callback, delay);
    return () => clearTimeout(id);
  },
  now: () => (typeof performance !== 'undefined' ? performance.now() : Date.now()),
};

export interface AsyncActionOptions {
  delay?: number;
  minVisible?: number;
  /** ms to hold \`success\` before returning to idle; 0 keeps it. */
  holdSuccess?: number;
  /** ms to hold \`error\` before returning to idle; 0 (default) keeps it until the next run. */
  holdError?: number;
  /** Ignore \`run\` while a task is in flight (default true: one payment, one request). */
  exclusive?: boolean;
  scheduler?: Scheduler;
}

export type AsyncTask<T> = (context: { signal: AbortSignal }) => Promise<T>;

export interface AsyncActionSnapshot {
  state: AsyncState;
  error: unknown;
  revision: number;
}

export interface AsyncAction {
  getSnapshot(): AsyncActionSnapshot;
  subscribe(listener: (snapshot: AsyncActionSnapshot) => void): () => void;
  run<T>(task: AsyncTask<T>): Promise<T | undefined>;
  /** Abort a task in flight and report \`cancelled\`. No-op when idle. */
  cancel(): void;
  /** Abort anything in flight and return to idle. */
  reset(): void;
  /** Abort, clear timers and stop notifying. Further calls are ignored. */
  destroy(): void;
}

const busyStates: readonly AsyncState[] = ['waiting', 'loading'];
export const isBusy = (state: AsyncState) => busyStates.includes(state);

/** What a button should show: waiting looks idle (no flash), cancelled returns to idle. */
export function visibleState(state: AsyncState): 'idle' | 'loading' | 'success' | 'error' {
  return state === 'loading' || state === 'success' || state === 'error' ? state : 'idle';
}

export function createAsyncAction(options: AsyncActionOptions = {}): AsyncAction {
  const { delay = loaderDelay, minVisible = minimumLoaderTime, holdSuccess = successHold, holdError = 0, exclusive = true, scheduler = realScheduler } = options;
  let snapshot: AsyncActionSnapshot = { state: 'idle', error: undefined, revision: 0 };
  let controller: AbortController | null = null;
  let current: Promise<unknown> | null = null;
  let loadingAt = 0;
  let destroyed = false;
  const timers = new Set<() => void>();
  const listeners = new Set<(snapshot: AsyncActionSnapshot) => void>();

  const set = (state: AsyncState, error: unknown = undefined) => {
    if (destroyed || (snapshot.state === state && snapshot.error === error)) return;
    snapshot = { ...snapshot, state, error };
    for (const listener of [...listeners]) listener(snapshot);
  };
  const later = (callback: () => void, ms: number) => {
    const cancel = scheduler.set(() => { timers.delete(cancel); callback(); }, ms);
    timers.add(cancel);
  };
  const clearTimers = () => { for (const cancel of timers) cancel(); timers.clear(); };
  const abort = () => {
    controller?.abort();
    controller = null;
    current = null;
    clearTimers();
    snapshot = { ...snapshot, revision: snapshot.revision + 1 };
  };

  return {
    getSnapshot: () => snapshot,
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    run<T>(task: AsyncTask<T>): Promise<T | undefined> {
      if (destroyed) return Promise.resolve(undefined);
      if (exclusive && isBusy(snapshot.state) && current) return current as Promise<T | undefined>;
      abort();
      const revision = snapshot.revision;
      const own = new AbortController();
      controller = own;
      set('waiting');
      later(() => {
        if (snapshot.revision === revision && snapshot.state === 'waiting') {
          loadingAt = scheduler.now();
          set('loading');
        }
      }, delay);
      const settle = (apply: () => void) => {
        if (destroyed || snapshot.revision !== revision) return;
        const wait = snapshot.state === 'loading' ? Math.max(0, loadingAt + minVisible - scheduler.now()) : 0;
        clearTimers();
        if (wait > 0) later(() => { if (snapshot.revision === revision) apply(); }, wait);
        else apply();
      };
      let result: Promise<T>;
      try {
        result = Promise.resolve(task({ signal: own.signal }));
      } catch (error) {
        result = Promise.reject(error);
      }
      const done = result.then(value => {
        settle(() => {
          controller = null;
          current = null;
          set('success');
          if (holdSuccess > 0) later(() => set('idle'), holdSuccess);
        });
        return snapshot.revision === revision ? value : undefined;
      }, error => {
        if (own.signal.aborted) return undefined;
        settle(() => {
          controller = null;
          current = null;
          set('error', error);
          if (holdError > 0) later(() => set('idle'), holdError);
        });
        return undefined;
      });
      current = done;
      return done;
    },
    cancel() {
      if (destroyed || !isBusy(snapshot.state)) return;
      abort();
      set('cancelled');
    },
    reset() {
      if (destroyed) return;
      abort();
      set('idle');
    },
    destroy() {
      if (destroyed) return;
      abort();
      destroyed = true;
      listeners.clear();
    },
  };
}

/** A local stand-in for a request: settles after \`duration\` with \`outcome\`; honors abort. */
export function simulatedTask(duration: number, outcome: 'success' | 'error' = 'success', scheduler: Scheduler = realScheduler): AsyncTask<void> {
  return ({ signal }) => new Promise<void>((resolve, reject) => {
    const abortError = () => Object.assign(new Error('Aborted'), { name: 'AbortError' });
    if (signal.aborted) { reject(abortError()); return; }
    const cancel = scheduler.set(() => (outcome === 'success' ? resolve() : reject(new Error('Simulated failure'))), duration);
    signal.addEventListener('abort', () => { cancel(); reject(abortError()); }, { once: true });
  });
}
`;export{e as t};