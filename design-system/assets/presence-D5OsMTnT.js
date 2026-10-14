import{A as e,C as t,D as n,E as r,Ft as i,Mt as a,O as o,Rn as s,S as c,T as l,_n as u,an as d,b as f,gt as p,j as m,k as h,mn as g,mt as _,on as v,p as y,v as b,vt as x,w as S,x as C,y as w}from"./route-D8V-RcHq.js";import{t as T}from"./tokens--8wjVqaD.js";import{s as E}from"./docs-CCM0Joka.js";import{A as D,O,a as k,c as A,d as j,f as M,g as N,h as ee,i as te,k as P,l as ne,m as re,n as F,o as I,p as ie,r as ae,s as L,t as oe}from"./kit-CGiBTmcs.js";import{t as se}from"./presence-QELuGdlv.js";var R=s(),ce={variant:`halo`,mode:`auto`,state:`listening`,level:null},z=Object.freeze({idle:`Idle`,listening:`Listening`,thinking:`Thinking`,answering:`Answering`,handoff:`Handoff`,done:`Done`,error:`Error`}),B=Object.freeze({halo:`Halo orb`,ripple:`Ripple`,bloom:`Bloom`,bars:`Signal bars`,matrix:`Status matrix`,line:`Activity line`});function le(e,t,n){let r=t.trim().replace(/\s+/g,` `);if(!r)return n[e];let i=r.length>36?`${r.slice(0,35).trimEnd()}…`:r;return e===`thinking`?`Comparing offers for “${i}”…`:e===`answering`?`Answering with three picks for “${i}”.`:n[e]}var ue=`// Once, at the app root
import '@zijie/ui/styles.css';

// Where you need it
import { Presence, type PresenceHandle, type PresenceState } from '@zijie/ui';
`,V=e=>String(Math.round(Math.min(1,Math.max(0,e))*100)/100);function H({variant:e,level:t},n=[]){let r=[];return e!==`halo`&&r.push(`variant="${e}"`),r.push(...n),t!==null&&r.push(`level={${V(t)}}`),r}var U=[`      <input`,`        aria-label="Message your shopping agent"`,`        placeholder="Running shoes under $80"`];function de(e){if(e.mode===`auto`)return[`import { useRef, useState } from 'react';`,`import { Presence, type PresenceHandle } from '@zijie/ui';`,``,`/** Walks a request start to finish; typing takes over and it listens. */`,`export function ShoppingAgent() {`,`  const presence = useRef<PresenceHandle>(null);`,`  const [typing, setTyping] = useState(false);`,`  return (`,`    <>`,`      <Presence`,...[`ref={presence}`,...H(e,[`tour={!typing}`,`state="listening"`])].map(e=>`        ${e}`),`      />`,...U,`        onChange={() => {`,`          setTyping(true);`,`          presence.current?.impulse();`,`        }}`,`        onBlur={() => setTyping(false)}`,`      />`,`    </>`,`  );`,`}`,``].join(`
`);let t=[`ref={presence}`,...H(e,[`state={state}`])];return[`import { useRef, useState } from 'react';`,`import { Presence, type PresenceHandle, type PresenceState } from '@zijie/ui';`,``,`/** Your agent events set the state; every keystroke is an impulse it listens to. */`,`export function ShoppingAgent() {`,`  const presence = useRef<PresenceHandle>(null);`,`  const [state, setState] = useState<PresenceState>('${e.state}');`,`  return (`,`    <>`,`      <Presence`,...t.map(e=>`        ${e}`),`      />`,...U,`        onChange={() => {`,`          setState('listening');`,`          presence.current?.impulse();`,`        }}`,`      />`,`    </>`,`  );`,`}`,``].join(`
`)}function W({variant:e=`halo`,state:t=`idle`,level:n,size:r,label:i,announce:a,tour:o}={}){let s=[];return e!==`halo`&&s.push(`variant="${e}"`),o?s.push(`tour`):t!==`idle`&&s.push(`state="${t}"`),n!==void 0&&s.push(`level={${V(n)}}`),r!==void 0&&r!==160&&s.push(`size={${r}}`),i===`visible`&&s.push(`label="visible"`),a===!1&&s.push(`announce={false}`),s.length<=2?`<Presence${s.map(e=>` ${e}`).join(``)} />\n`:[`<Presence`,...s.map(e=>`  ${e}`),`/>`,``].join(`
`)}var fe=[{name:`Presence.tsx`,code:`import {
  useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState,
  type CSSProperties, type ReactNode, type Ref, type RefObject,
} from 'react';
import { canUseDOM, cx } from '../../motion/env';
import { useActivity } from '../../motion/useActivity';
import { useReducedMotion } from '../../motion/useReducedMotion';
import {
  ATOM_STRIDE, BAR_COUNT, BLOOM_PETALS, HALO_DOTS, LINE_SAMPLES, MATRIX_SIZE, PRESENCE_STATES, PRESENCE_TEMPO, RIPPLE_RINGS,
  atomCount, clamp01, createAtoms, createPresenceSim, poseFrame, presenceLabels, presenceTour, primeVariant, setSimState,
  simAtRest, simImpulse, simState, stepSim, stillFrame, stillSim,
  type PresenceLabels, type PresenceSim, type PresenceState, type PresenceVariant,
} from './presenceModel';
import { sleepPresence, wakePresence, type PresenceTick } from './presenceLoop';

export interface PresenceHandle {
  /** One keystroke. The input channel hears it for 60 ms while the state is listening. */
  impulse(strength?: number): void;
}

export interface PresenceProps {
  /** The form. Every form shows every state. */
  variant?: PresenceVariant;
  /** What the agent is doing. Any state, in any order: morphs retarget mid-flight. */
  state?: PresenceState;
  /** Walk a request start to finish on a loop, ignoring \`state\`. \`onStateChange\` reports each step. */
  tour?: boolean;
  /** Manual level, 0–1, for the channel the state owns. Omit it to follow the seeded, simulated signal. */
  level?: number;
  /** The simulated typist and reply. The same seed moves the same way every time. */
  seed?: number;
  /** Width and height in px. */
  size?: number;
  /** The state sentence: shown under the shape, or kept for screen readers only. */
  label?: 'visible' | 'hidden';
  /** A polite live region for the sentence. Turn it off when a status line nearby says the same. */
  announce?: boolean;
  /** Sentences per state. English defaults. */
  labels?: Partial<PresenceLabels>;
  /** Hold the shape still. It also holds offscreen, in a hidden tab, under reduced motion and under a paused ancestor. */
  paused?: boolean;
  /** Tour mode: called once per step. */
  onStateChange?: (state: PresenceState) => void;
  className?: string;
  ref?: Ref<PresenceHandle>;
}

const useIsomorphicLayoutEffect = canUseDOM() ? useLayoutEffect : useEffect;
const FLIP = new Set<PresenceState>(['listening', 'answering']);
/** Bar and tick width as a share of their full height: the height of a resting dot. */
const DOT: Partial<Record<PresenceVariant, number>> = { bars: 3.6 / 56, line: 1.5 / 50 };
const LINE_PITCH = 100 / LINE_SAMPLES;

const round = (value: number, digits = 3) => Number(value.toFixed(digits));

/** Inline style for one atom of a frame: individual transforms, or a clip for bars and the line. */
function atomStyle(variant: PresenceVariant, buffer: Float32Array, index: number): CSSProperties {
  const o = index * ATOM_STRIDE;
  const opacity = round(buffer[o + 5]);
  const dot = DOT[variant];
  if (dot !== undefined) {
    const inset = round((1 - Math.max(dot, clamp01(buffer[o + 3]))) * 50, 2);
    return variant === 'bars'
      ? { clipPath: \`inset(\${inset}% 0 round 999px)\`, opacity, translate: \`\${round(buffer[o] * 100, 2)}cqi 0\` }
      : { clipPath: \`inset(\${inset}% 0 round 999px)\`, opacity };
  }
  return {
    translate: \`\${round(buffer[o] * 100, 2)}cqi \${round(buffer[o + 1] * 100, 2)}cqi\`,
    scale: \`\${round(buffer[o + 2])} \${round(buffer[o + 3])}\`,
    rotate: \`\${round(buffer[o + 4], 2)}deg\`,
    opacity,
  };
}

/** Write a frame to the atoms, touching only what moved. */
function paint(variant: PresenceVariant, atoms: readonly (HTMLElement | null)[], buffer: Float32Array, last: Float32Array, track: HTMLElement | null) {
  const count = atomCount[variant];
  const dot = DOT[variant];
  for (let i = 0; i < count; i++) {
    const node = atoms[i];
    if (!node) continue;
    const o = i * ATOM_STRIDE;
    const style = node.style;
    if (Math.abs(buffer[o + 5] - last[o + 5]) > 0.002 || Number.isNaN(last[o + 5])) {
      style.opacity = String(round(buffer[o + 5]));
      last[o + 5] = buffer[o + 5];
    }
    if (dot !== undefined) {
      if (Math.abs(buffer[o + 3] - last[o + 3]) > 0.001 || Number.isNaN(last[o + 3])) {
        style.clipPath = \`inset(\${round((1 - Math.max(dot, clamp01(buffer[o + 3]))) * 50, 2)}% 0 round 999px)\`;
        last[o + 3] = buffer[o + 3];
      }
      if (variant === 'bars' && (Math.abs(buffer[o] - last[o]) > 0.0005 || Number.isNaN(last[o]))) {
        style.translate = \`\${round(buffer[o] * 100, 2)}cqi 0\`;
        last[o] = buffer[o];
      }
      continue;
    }
    if (Math.abs(buffer[o] - last[o]) > 0.0005 || Math.abs(buffer[o + 1] - last[o + 1]) > 0.0005 || Number.isNaN(last[o])) {
      style.translate = \`\${round(buffer[o] * 100, 2)}cqi \${round(buffer[o + 1] * 100, 2)}cqi\`;
      last[o] = buffer[o];
      last[o + 1] = buffer[o + 1];
    }
    if (Math.abs(buffer[o + 2] - last[o + 2]) > 0.001 || Math.abs(buffer[o + 3] - last[o + 3]) > 0.001 || Number.isNaN(last[o + 2])) {
      style.scale = \`\${round(buffer[o + 2])} \${round(buffer[o + 3])}\`;
      last[o + 2] = buffer[o + 2];
      last[o + 3] = buffer[o + 3];
    }
    if (Math.abs(buffer[o + 4] - last[o + 4]) > 0.05 || Number.isNaN(last[o + 4])) {
      style.rotate = \`\${round(buffer[o + 4], 2)}deg\`;
      last[o + 4] = buffer[o + 4];
    }
  }
  // The line scrolls as one track by a fraction of a pitch, so the history glides instead of stepping.
  if (variant === 'line' && track) track.style.translate = \`\${round(buffer[0] * LINE_PITCH, 3)}cqi 0\`;
}

function Glyphs() {
  return (
    <svg className="z-presence__glyph" viewBox="0 0 24 24" width="24" height="24" focusable="false">
      <path className="z-presence__check" d="M7 12.6l3.3 3.2L17.2 8.8" pathLength={1} />
      <path className="z-presence__close" d="M8.2 8.2l7.6 7.6M15.8 8.2l-7.6 7.6" pathLength={1} />
    </svg>
  );
}

/** The atoms of a form, in paint order (the order of the pose buffer). */
function Atoms({ variant, styles, atom, track }: { variant: PresenceVariant; styles: CSSProperties[]; atom: (index: number) => (node: HTMLElement | null) => void; track: (node: HTMLElement | null) => void }) {
  const span = (index: number, className: string, children?: ReactNode) => <span key={index} ref={atom(index)} className={className} style={styles[index]}>{children}</span>;
  if (variant === 'halo') {
    return (
      <>
        {span(0, 'z-presence__disc z-presence__disc--skin')}
        {span(1, 'z-presence__disc z-presence__disc--mid')}
        {Array.from({ length: HALO_DOTS }, (_, k) => span(2 + k, 'z-presence__dot'))}
        {span(2 + HALO_DOTS, 'z-presence__disc z-presence__disc--core', <Glyphs />)}
      </>
    );
  }
  if (variant === 'ripple') {
    return (
      <>
        {Array.from({ length: RIPPLE_RINGS }, (_, k) => span(k, 'z-presence__ring'))}
        {span(RIPPLE_RINGS, 'z-presence__disc z-presence__disc--core', <Glyphs />)}
      </>
    );
  }
  if (variant === 'bloom') {
    return (
      <>
        {Array.from({ length: BLOOM_PETALS }, (_, k) => span(k, 'z-presence__petal'))}
        {span(BLOOM_PETALS, 'z-presence__disc z-presence__disc--core z-presence__disc--bud', <Glyphs />)}
      </>
    );
  }
  if (variant === 'bars') return <span className="z-presence__row">{Array.from({ length: BAR_COUNT }, (_, k) => span(k, 'z-presence__bar'))}</span>;
  if (variant === 'matrix') return <>{Array.from({ length: MATRIX_SIZE * MATRIX_SIZE }, (_, k) => span(k, 'z-presence__cell'))}</>;
  return <span ref={track} className="z-presence__row z-presence__track">{Array.from({ length: LINE_SAMPLES + 1 }, (_, k) => span(k, 'z-presence__tick'))}</span>;
}

/** Holds still under an ancestor marked data-playback="paused" (a specimen, a paused stage). */
function usePausedAncestor(ref: RefObject<HTMLElement | null>) {
  const [held, setHeld] = useState(false);
  useEffect(() => {
    const scope = ref.current?.parentElement?.closest<HTMLElement>('[data-playback]');
    if (!scope) return;
    const sync = () => setHeld(scope.dataset.playback === 'paused');
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(scope, { attributes: true, attributeFilter: ['data-playback'] });
    return () => observer.disconnect();
  }, [ref]);
  return held;
}

/**
 * The visible presence of an AI agent: idle, listening, thinking, answering, handing off, done, error.
 * The state is a sentence first (announced politely); the shape only confirms it. One pure model drives
 * six forms: weights morph between state poses, a two-pole follower smooths the keystrokes it hears
 * and the reply it gives, and a shared frame loop sleeps once nothing moves.
 */
export function Presence({
  variant = 'halo', state = 'idle', tour = false, level, seed = 7, size = 160, label = 'hidden', announce = true,
  labels, paused = false, onStateChange, className, ref,
}: PresenceProps) {
  const host = useRef<HTMLDivElement>(null);
  const atoms = useRef<(HTMLElement | null)[]>([]);
  const track = useRef<HTMLElement | null>(null);
  const simRef = useRef<PresenceSim | null>(null);
  if (!simRef.current) {
    simRef.current = createPresenceSim(state, { seed, tour });
    if (level !== undefined) simRef.current.manual = clamp01(level);
  }
  const sim = simRef.current;

  const reduced = useReducedMotion();
  const held = usePausedAncestor(host);
  const running = useActivity(host, { paused: paused || held });
  const [tourState, setTourState] = useState<PresenceState>(() => simState(sim));
  const shown = tour ? tourState : state;

  // The still frame for the first paint (and the server): stable per form, so React never rewrites it.
  const now = useRef({ shown, level });
  now.current = { shown, level };
  const styles = useMemo(() => {
    const frame = stillFrame(variant, now.current.shown, { seed, level: now.current.level });
    return Array.from({ length: atomCount[variant] }, (_, index) => atomStyle(variant, frame, index));
  }, [variant, seed]); // Only a new form needs new atoms; every later change is painted directly.
  const buffer = useMemo(() => createAtoms(variant), [variant]);
  const last = useMemo(() => new Float32Array(atomCount[variant] * ATOM_STRIDE).fill(Number.NaN), [variant]);
  const refs = useMemo(() => Array.from({ length: atomCount[variant] }, (_, index) => (node: HTMLElement | null) => { atoms.current[index] = node; }), [variant]);
  const atom = (index: number) => refs[index];
  const trackRef = useRef((node: HTMLElement | null) => { track.current = node; }).current;

  // Everything the frame loop reads lives in refs, so the tick is created once.
  const live = useRef({ variant, buffer, last, onStateChange });
  live.current = { variant, buffer, last, onStateChange };
  const painted = useRef('');
  const keyOf = (target: PresenceState) => \`\${live.current.variant}:\${target}:\${sim.manual}\`;

  const tick = useRef<PresenceTick | null>(null);
  if (!tick.current) {
    tick.current = (dt: number) => {
      const { variant: form, buffer: frame, last: written, onStateChange: report } = live.current;
      const moved = stepSim(sim, dt);
      if (moved) {
        setTourState(moved);
        report?.(moved);
      }
      poseFrame(sim, form, frame, dt);
      paint(form, atoms.current, frame, written, track.current);
      painted.current = keyOf(simState(sim));
      if (!simAtRest(sim, form)) return true;
      if (host.current) host.current.dataset.resting = '';
      return false;
    };
  }

  useImperativeHandle(ref, () => ({
    impulse(strength = 1) {
      simImpulse(sim, strength);
      if (running && tick.current) wake(host.current, tick.current);
    },
  }), [sim, running]);

  useIsomorphicLayoutEffect(() => {
    sim.manual = level === undefined ? Number.NaN : clamp01(level);
    sim.tour = tour;
    if (!tour) { setSimState(sim, state); return; }
    const step = presenceTour(sim.tourClock).state;
    setSimState(sim, step);
    setTourState(step);
  }, [sim, level, tour, state]);

  // A new form starts from the live state, not from scratch.
  const formRef = useRef(variant);
  useIsomorphicLayoutEffect(() => {
    if (formRef.current === variant) return;
    formRef.current = variant;
    primeVariant(sim, variant);
  }, [sim, variant]);

  useIsomorphicLayoutEffect(() => {
    const node = host.current;
    const run = tick.current;
    if (!node || !run) return;
    if (running) {
      wake(node, run);
      return () => sleepPresence(run);
    }
    // Held still. Keep the frame on screen, unless it shows another state or reduced motion asks for a still pose.
    const target = tour ? presenceTour(sim.tourClock).state : state;
    if (reduced || painted.current !== keyOf(target)) {
      stillSim(sim, target, variant);
      poseFrame(sim, variant, buffer, 0);
      paint(variant, atoms.current, buffer, last, track.current);
      painted.current = keyOf(target);
    }
    return undefined;
  }, [running, reduced, state, tour, level, variant, sim, buffer, last]);

  useEffect(() => () => { if (tick.current) sleepPresence(tick.current); }, []);

  // Tour mode: the parent hears the first step too.
  useEffect(() => {
    if (tour) onStateChange?.(presenceTour(sim.tourClock).state);
  }, [tour]); // Once per switch into tour mode, not on every new callback.

  const sentences = { ...presenceLabels, ...labels };
  const text = sentences[shown];
  // One announcement per state. A quick listening ↔ answering flip waits a beat, so nothing is said twice.
  const [spoken, setSpoken] = useState(text);
  const previous = useRef(shown);
  useEffect(() => {
    const from = previous.current;
    previous.current = shown;
    if (FLIP.has(from) && FLIP.has(shown) && from !== shown) {
      const timer = setTimeout(() => setSpoken(text), PRESENCE_TEMPO.flip);
      return () => clearTimeout(timer);
    }
    setSpoken(text);
    return undefined;
  }, [shown, text]);

  const silent = !announce && label === 'hidden';
  return (
    <div
      ref={host}
      className={cx('z-presence', \`z-presence--\${variant}\`, className)}
      data-variant={variant}
      data-state={shown}
      data-tone={PRESENCE_STATES[shown].tone}
      data-active={running}
      data-label={label}
      role={silent ? 'img' : undefined}
      aria-label={silent ? text : undefined}
      style={{ '--z-presence-size': \`\${size}px\` } as CSSProperties}
    >
      <div className="z-presence__body" aria-hidden="true">
        <Atoms key={variant} variant={variant} styles={styles} atom={atom} track={trackRef} />
      </div>
      {announce
        ? <p className={label === 'visible' ? 'z-presence__sentence' : 'z-sr-only'} role="status">{spoken}</p>
        : label === 'visible' && <p className="z-presence__sentence">{text}</p>}
    </div>
  );
}

/** Join the frame loop. If the shape was breathing at rest, hand its current scale to a transition so waking never cuts. */
function wake(node: HTMLElement | null, run: PresenceTick) {
  if (node && 'resting' in node.dataset) {
    const body = node.querySelector<HTMLElement>('.z-presence__body');
    const scale = body ? getComputedStyle(body).scale : 'none';
    delete node.dataset.resting;
    if (body && scale && scale !== 'none' && scale !== '1') {
      body.style.scale = scale;
      requestAnimationFrame(() => { body.style.scale = ''; });
    }
  }
  wakePresence(run);
}
`},{name:`presenceModel.ts`,code:`/* Agent presence model. Pure and time-based: no DOM, no clock, no unseeded randomness. Tested in Node.
 * Ported from Aspen's voice engine and recast for a shopping agent: the user's keystrokes are the input
 * channel, the agent's reply is the output channel, and every state is a sentence first.
 * Everything that moves is either an exact solution over dt (followers, springs) or a phase accumulator,
 * so 60, 120 and 144 Hz draw the same curve. Callers own the buffers; nothing here allocates per tick. */

/* ---------- registries ---------- */

export const presenceStates = Object.freeze(['idle', 'listening', 'thinking', 'answering', 'handoff', 'done', 'error'] as const);
export type PresenceState = typeof presenceStates[number];

/** Six forms, one engine. */
export const presenceVariants = Object.freeze(['halo', 'ripple', 'bloom', 'bars', 'matrix', 'line'] as const);
export type PresenceVariant = typeof presenceVariants[number];

export type PresenceChannel = 'input' | 'output' | null;
/** Color role: rest (blue, quiet), active (action blue), busy, success, danger. */
export type PresenceTone = 'rest' | 'active' | 'busy' | 'success' | 'danger';

/** Beats in ms. One rhythm per state; the docs read these, so they cannot drift. */
export const PRESENCE_TEMPO = Object.freeze({
  sweep: 1200, think: 1800, breath: 4800, nod: 600, shake: 420, hold: 1600, flip: 250, delay: 160, min: 320,
});

/** The level follower: a held sample every 30 ms, a 40 ms rise, a 240 ms fall, a 35 ms polish. */
export const PRESENCE_LEVEL = Object.freeze({ sampleMs: 30, attackMs: 40, releaseMs: 240, polishMs: 35, impulseMs: 60, liveMs: 1500 });

/** 90% of a morph, per destination. Answering the user is quick; returning to rest is slow. */
export const PRESENCE_MORPH = Object.freeze({ idle: 560, listening: 280, thinking: 420, answering: 280, handoff: 380, done: 320, error: 240 } satisfies Record<PresenceState, number>);

export interface PresenceStateRow {
  /** Short name for controls and trails. */
  name: string;
  /** The sentence: announced, and shown where the label is visible. */
  label: string;
  busy: boolean;
  channel: PresenceChannel;
  /** Settles to a still frame, so the loop can sleep. */
  still: boolean;
  tone: PresenceTone;
  /** What the shape does, for the state sheet. */
  sees: string;
  /** Guidance for apps: where the state goes next on its own. */
  settle?: Readonly<{ after: number; to: PresenceState; keepLabel?: boolean }>;
}

const row = (name: string, label: string, busy: boolean, channel: PresenceChannel, still: boolean, tone: PresenceTone, sees: string, settle?: PresenceStateRow['settle']): PresenceStateRow =>
  Object.freeze({ name, label, busy, channel, still, tone, sees, ...(settle ? { settle: Object.freeze(settle) } : {}) });

export const PRESENCE_STATES: Readonly<Record<PresenceState, PresenceStateRow>> = Object.freeze({
  idle: row('Idle', 'Ready when you are.', false, null, true, 'rest', 'Small and calm, breathing slowly'),
  listening: row('Listening', 'Listening to your request.', false, 'input', false, 'active', 'Every keystroke pulls it inward'),
  thinking: row('Thinking', 'Comparing 12 offers…', true, null, false, 'busy', 'One pulse travels around'),
  answering: row('Answering', 'Answering with three picks under $80.', false, 'output', false, 'active', 'The reply pushes outward'),
  handoff: row('Handing off', 'Confirming your order…', true, null, false, 'busy', 'One steady sweep, like a lock turning'),
  done: row('Done', 'Order placed. Arriving Thursday.', false, null, true, 'success', 'A single nod, then green', { after: PRESENCE_TEMPO.hold, to: 'idle' }),
  error: row('Error', 'The store didn’t answer. Try again.', false, null, true, 'danger', 'One small shake, then red', { after: PRESENCE_TEMPO.hold, to: 'idle', keepLabel: true }),
});

export type PresenceLabels = Record<PresenceState, string>;
export const presenceLabels: Readonly<PresenceLabels> = Object.freeze(
  Object.fromEntries(presenceStates.map(state => [state, PRESENCE_STATES[state].label])) as PresenceLabels,
);

/** The rhythm of a state in words, generated from the tempo table. */
export function presenceRhythm(state: PresenceState): string {
  const seconds = (ms: number) => \`\${(ms / 1000).toFixed(1)} s\`;
  switch (state) {
    case 'idle': return \`Breathes every \${seconds(PRESENCE_TEMPO.breath)}, then sleeps\`;
    case 'listening':
    case 'answering': return \`Sampled every \${PRESENCE_LEVEL.sampleMs} ms\`;
    case 'thinking': return \`One pulse every \${seconds(PRESENCE_TEMPO.think)}\`;
    case 'handoff': return \`One sweep every \${seconds(PRESENCE_TEMPO.sweep)}\`;
    case 'done': return \`Nods once in \${PRESENCE_TEMPO.nod} ms\`;
    default: return \`Shakes once in \${PRESENCE_TEMPO.shake} ms\`;
  }
}

/** What drives the shape, in words. */
export function presenceSignal(state: PresenceState): string {
  const channel = PRESENCE_STATES[state].channel;
  if (channel === 'input') return 'Your keystrokes';
  if (channel === 'output') return 'The reply';
  return PRESENCE_STATES[state].busy ? 'A steady beat' : 'None';
}

/** The happy path, written down and tested. The component accepts any state in any order: agent events do. */
export const PRESENCE_TRANSITIONS: Readonly<Record<PresenceState, readonly PresenceState[]>> = Object.freeze({
  idle: ['listening', 'thinking'],
  listening: ['thinking', 'idle'],
  thinking: ['answering', 'handoff', 'listening', 'error'],
  answering: ['listening', 'handoff', 'idle'],
  handoff: ['done', 'error'],
  done: ['idle', 'listening'],
  error: ['idle', 'listening', 'thinking'],
});
export const canTransition = (from: PresenceState, to: PresenceState) => PRESENCE_TRANSITIONS[from].includes(to);

/** A request, start to finish, on a loop: seconds per state. */
export const PRESENCE_TOUR: readonly (readonly [PresenceState, number])[] = Object.freeze([
  ['idle', 1.8], ['listening', 3.6], ['thinking', 2.4], ['answering', 3.6], ['handoff', 2.2], ['done', 1.8],
] as const);
export const PRESENCE_TOUR_LENGTH = PRESENCE_TOUR.reduce((sum, step) => sum + step[1], 0);
/** The tour starts as the user starts typing, so the first frame already listens. */
export const PRESENCE_TOUR_START = PRESENCE_TOUR[0][1];

export function presenceTour(t: number): { state: PresenceState; elapsed: number; index: number } {
  let left = ((t % PRESENCE_TOUR_LENGTH) + PRESENCE_TOUR_LENGTH) % PRESENCE_TOUR_LENGTH;
  for (let index = 0; index < PRESENCE_TOUR.length; index++) {
    const [state, length] = PRESENCE_TOUR[index];
    if (left < length) return { state, elapsed: left, index };
    left -= length;
  }
  return { state: PRESENCE_TOUR[0][0], elapsed: 0, index: 0 };
}

export const stateIndex = (state: PresenceState) => presenceStates.indexOf(state);
const [IDLE, LISTENING, THINKING, ANSWERING, HANDOFF, DONE, ERROR] = [0, 1, 2, 3, 4, 5, 6];
const STATE_COUNT = presenceStates.length;

/* ---------- maths ---------- */

/** Instrumented: a test proves the safety clamp never engages. */
export const weightStats = { clamped: 0 };
export const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export function smoothstep(a: number, b: number, x: number) {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
}
/** A raised cosine: 1 at the centre, 0 from |d| = sigma outward. */
export const bump = (d: number, sigma: number) => {
  const u = Math.abs(d) / sigma;
  return u >= 1 ? 0 : 0.5 + 0.5 * Math.cos(Math.PI * u);
};
export const frac = (x: number) => x - Math.floor(x);
const easeInOutSine = (p: number) => 0.5 - 0.5 * Math.cos(Math.PI * p);
const easeOutCubic = (p: number) => 1 - (1 - p) ** 3;
/** Shortest signed distance between two angles, in radians. */
export const angleGap = (a: number, b: number) => {
  const d = (a - b) % (2 * Math.PI);
  return d > Math.PI ? d - 2 * Math.PI : d < -Math.PI ? d + 2 * Math.PI : d;
};
/** Cyclic distance between two positions on a ring of \`n\`. */
const ringGap = (a: number, b: number, n: number) => {
  const d = (((a - b) % n) + n) % n;
  return Math.min(d, n - d);
};

export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function hash01(i: number, seed = 0) {
  let h = (Math.imul(i | 0, 374761393) + Math.imul(seed | 0, 668265263)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}
/** Smoothstep value noise. An integer period makes a loop seamless. */
export function noise1(x: number, seed = 0, period = 0) {
  const i = Math.floor(x);
  const f = x - i;
  const i0 = period ? ((i % period) + period) % period : i;
  const i1 = period ? (i0 + 1) % period : i + 1;
  const a = hash01(i0, seed);
  const b = hash01(i1, seed);
  return a + (b - a) * f * f * (3 - 2 * f);
}
export const expSmooth = (y: number, x: number, dt: number, tau: number) => y + (x - y) * (1 - Math.exp(-dt / tau));

export interface Spring { x: number; v: number; omega: number }
/** Critically damped, closed form: exact at any dt, never past the goal when it starts at rest. */
export function springStep(s: Spring, goal: number, omega: number, dt: number) {
  const d = s.x - goal;
  const e = Math.exp(-omega * dt);
  const k = (s.v + omega * d) * dt;
  s.x = goal + (d + k) * e;
  s.v = (s.v - omega * k) * e;
  return s.x;
}
/** 3.89 / omega is the 90% time of a critically damped step. */
export const omegaFor = (state: PresenceState, scale = 1) => 3890 / (PRESENCE_MORPH[state] * scale);

/* ---------- level: two channels, sample and hold, two smoothing poles ---------- */

export interface LevelEngine {
  t: number;
  next: number;
  /** Held sample per channel: 0 input (keystrokes), 1 output (the reply). */
  x: Float64Array;
  y1: Float64Array;
  y2: Float64Array;
  /** Three layers chase the output, skin slow, core quick. */
  layers: Spring[];
}

const LAYER_SMOOTH = [0.24, 0.16, 0.09];
export function createLevel(): LevelEngine {
  return { t: 0, next: 0, x: new Float64Array(2), y1: new Float64Array(2), y2: new Float64Array(2), layers: LAYER_SMOOTH.map(s => ({ x: 0, v: 0, omega: 2 / s })) };
}

function integrate(engine: LevelEngine, dt: number) {
  if (!(dt > 0)) return;
  const ta = PRESENCE_LEVEL.attackMs / 1000;
  const tr = PRESENCE_LEVEL.releaseMs / 1000;
  const t2 = PRESENCE_LEVEL.polishMs / 1000;
  const ea = Math.exp(-dt / ta);
  const er = Math.exp(-dt / tr);
  const e2 = Math.exp(-dt / t2);
  const { x, y1, y2 } = engine;
  for (let i = 0; i < 2; i++) {
    const up = x[i] > y1[i];
    const t1 = up ? ta : tr;
    const c = y1[i] - x[i];
    const k = (c * t1) / (t1 - t2);
    const e1 = up ? ea : er;
    y2[i] = x[i] + k * e1 + (y2[i] - x[i] - k) * e2;
    y1[i] = x[i] + c * e1;
  }
  for (const layer of engine.layers) springStep(layer, x[1], layer.omega, dt);
}

/** Integrate to each sample boundary with the old input, take the new sample there, integrate the rest. */
export function advanceLevel(engine: LevelEngine, dt: number, sample: (t: number, out: Float64Array) => void) {
  let left = Math.min(Math.max(dt, 0), 0.05);
  const S = PRESENCE_LEVEL.sampleMs / 1000;
  while (engine.t + left >= engine.next * S - 1e-12) {
    const step = Math.max(0, engine.next * S - engine.t);
    integrate(engine, step);
    left = Math.max(0, left - step);
    engine.t = engine.next * S;
    engine.next++;
    sample(engine.t, engine.x);
  }
  if (left > 0) {
    integrate(engine, left);
    engine.t += left;
  }
}

export function levelAtRest(engine: LevelEngine, eps = 1e-3) {
  for (let i = 0; i < 2; i++) if (engine.y1[i] > eps || engine.y2[i] > eps || engine.x[i] > eps) return false;
  return engine.layers.every(layer => Math.abs(layer.x) < eps && Math.abs(layer.v) < eps);
}

/* ---------- simulated signals: seeded, seamless 12 s loops ---------- */

const LOOP = 12;
const typingCache = new Map<number, Float64Array>();

/** Keystroke times for a seeded typist: words of 3–7 keys at 7–10 Hz, short gaps, longer pauses. */
export function typingSchedule(seed: number): Float64Array {
  const cached = typingCache.get(seed);
  if (cached) return cached;
  const random = mulberry32(seed * 7919 + 13);
  const keys: number[] = [];
  let t = 0.25;
  while (t < LOOP - 0.6) {
    const words = 2 + Math.floor(random() * 4);
    for (let w = 0; w < words && t < LOOP - 0.6; w++) {
      const letters = 3 + Math.floor(random() * 5);
      for (let k = 0; k < letters && t < LOOP - 0.6; k++) {
        keys.push(t);
        t += lerp(0.1, 0.145, random());
      }
      t += lerp(0.12, 0.3, random());
    }
    t += lerp(0.7, 1.4, random());
  }
  const schedule = Float64Array.from(keys);
  typingCache.set(seed, schedule);
  return schedule;
}

/** Simulated typing: an impulse train. Each key is held for one impulse window. */
export function typingLevel(t: number, seed = 7): number {
  const at = ((t % LOOP) + LOOP) % LOOP;
  const keys = typingSchedule(seed);
  const window = PRESENCE_LEVEL.impulseMs / 1000;
  let lo = 0;
  let hi = keys.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (keys[mid] <= at) lo = mid; else hi = mid - 1;
  }
  if (keys[lo] > at || at - keys[lo] >= window) return 0;
  return 0.72 + 0.28 * hash01(lo, seed);
}

const replyCache = new Map<number, Float64Array>();
function replyPhrases(seed: number): Float64Array {
  const cached = replyCache.get(seed);
  if (cached) return cached;
  const random = mulberry32(seed + 1);
  const phrases: number[] = [];
  let t = 0.3;
  while (t < LOOP - 1.5) {
    const end = Math.min(LOOP - 0.45, t + lerp(2, 4, random()));
    phrases.push(t, end);
    t = end + lerp(0.3, 0.9, random());
  }
  const out = Float64Array.from(phrases);
  replyCache.set(seed, out);
  return out;
}

/** Simulated reply: phrases and pauses with soft edges, syllables near 4 Hz. */
export function replyLevel(t: number, seed = 7): number {
  const voice = seed + 1;
  const phrases = replyPhrases(seed);
  const at = ((t % LOOP) + LOOP) % LOOP;
  let gate = 0;
  for (let i = 0; i < phrases.length; i += 2) {
    if (at > phrases[i] && at < phrases[i + 1]) gate = smoothstep(0, 0.12, at - phrases[i]) * smoothstep(0, 0.12, phrases[i + 1] - at);
  }
  if (!gate) return 0;
  const syllable = smoothstep(0.12, 0.88, noise1((at * 50) / LOOP, voice, 50));
  return gate * (0.25 + 0.75 * syllable ** 1.4);
}

const TILT = [0.78, 1, 0.96, 0.86, 0.72, 0.58, 0.44, 0.32];
/** Eight bands from one level: most energy low, a seeded grain on each. */
export function bandLevels(out: Float64Array, level: number, t: number, seed = 7) {
  for (let b = 0; b < out.length; b++) out[b] = clamp01(level * TILT[b % TILT.length] * (0.25 + 0.95 * noise1(t * 4.3 + b * 7.3, seed + b) ** 1.3));
  return out;
}

/** A lit count only changes once the level has passed the next cell by half a cell. */
export function vuCells(level: number, rows: number, previousLit = 0) {
  const target = clamp01(level) * rows;
  return Math.abs(target - previousLit) < 1 ? previousLit : Math.min(rows, Math.max(0, Math.round(target)));
}
/** Reduced motion: a live level becomes a five-step meter. */
export const reducedMeter = (level: number, steps = 5) => Math.round(clamp01(level) * steps) / steps;

/* ---------- weights: one per state, a partition of 1 ---------- */

/** The omega floor keeps v + omega·d on the side of d, so no weight crosses its goal. Smooth, unlike a clamp. */
export function retarget(w: Float64Array, v: Float64Array, om: Float64Array, active: number, omegaDest: number) {
  for (let s = 0; s < w.length; s++) {
    const goal = s === active ? 1 : 0;
    const gap = goal - w[s];
    const dist = Math.abs(gap);
    const toward = gap >= 0 ? v[s] : -v[s];
    if (dist < 1e-6 && Math.abs(v[s]) < 1e-4) { w[s] = goal; v[s] = 0; om[s] = omegaDest; continue; }
    om[s] = Math.min(60, Math.max(omegaDest, toward > 0 ? toward / dist : 0));
  }
}

export function stepWeights(w: Float64Array, v: Float64Array, om: Float64Array, active: number, dt: number, out: Float64Array) {
  let sum = 0;
  for (let s = 0; s < w.length; s++) {
    const goal = s === active ? 1 : 0;
    const d = w[s] - goal;
    const e = Math.exp(-om[s] * dt);
    const k = (v[s] + om[s] * d) * dt;
    let x = goal + (d + k) * e;
    v[s] = (v[s] - om[s] * k) * e;
    if (Math.abs(x - goal) < 1e-7 && Math.abs(v[s]) < 1e-6) { x = goal; v[s] = 0; }
    if (x < -1e-9 || x > 1 + 1e-9) weightStats.clamped++;
    x = clamp01(x);
    w[s] = x;
    sum += x;
  }
  for (let s = 0; s < w.length; s++) out[s] = sum > 0 ? w[s] / sum : s === active ? 1 : 0;
}

export function weightsAtRest(w: Float64Array, v: Float64Array, active: number, eps = 1e-3) {
  for (let s = 0; s < w.length; s++) if (Math.abs(w[s] - (s === active ? 1 : 0)) > eps || Math.abs(v[s]) > eps) return false;
  return true;
}

/* ---------- the simulation: one per presence ---------- */

/** Spin speed per state, rad/s. One accumulator, so a morph never jumps an angle. */
const SPIN = [0.06, 0.32, 0.14, 0.42, 1.1, 0, 0];

export interface PresencePhases {
  /** Cycles of the handoff sweep (1.2 s). */
  sweep: number;
  /** Cycles of the thinking pulse (1.8 s). */
  think: number;
  /** Noise units: grain flowing inward while listening, outward while answering. */
  flowIn: number;
  flowOut: number;
  /** Radians, blended across states. */
  spin: number;
  /** Seconds since the current state began (the nod, the shake). */
  shot: number;
}

export interface PresenceSim {
  seed: number;
  /** Seconds simulated. */
  t: number;
  state: number;
  w: Float64Array;
  v: Float64Array;
  om: Float64Array;
  /** Normalised weights: what poses blend by. */
  weights: Float64Array;
  level: LevelEngine;
  phases: PresencePhases;
  /** Manual level for the channel the state owns; NaN follows the simulated signal. */
  manual: number;
  /** Engine time until a real keystroke stops being heard, and until simulated typing stays muted. */
  impulseUntil: number;
  impulseStrength: number;
  liveUntil: number;
  tour: boolean;
  tourClock: number;
  bandsIn: Float64Array;
  bandsOut: Float64Array;
  /** Matrix: smoothed brightness, lit columns per channel, falling peaks. */
  cells: Float64Array;
  target: Float64Array;
  litIn: Float64Array;
  litOut: Float64Array;
  peaks: Float64Array;
  /** Line: a rolling history of the shown signal. */
  history: Float64Array;
  historyClock: number;
}

export const MATRIX_SIZE = 7;
export const LINE_SAMPLES = 40;
export const LINE_SAMPLE_MS = 50;

export function createPresenceSim(state: PresenceState = 'idle', { seed = 7, tour = false }: { seed?: number; tour?: boolean } = {}): PresenceSim {
  const start = tour ? presenceTour(PRESENCE_TOUR_START).state : state;
  const index = stateIndex(start);
  const w = new Float64Array(STATE_COUNT);
  w[index] = 1;
  const om = new Float64Array(STATE_COUNT).fill(omegaFor(start));
  return {
    seed,
    t: 0,
    state: index,
    w,
    v: new Float64Array(STATE_COUNT),
    om,
    weights: Float64Array.from(w),
    level: createLevel(),
    phases: { sweep: 0, think: 0, flowIn: 0, flowOut: 0, spin: 0, shot: 10 },
    manual: Number.NaN,
    impulseUntil: -1,
    impulseStrength: 0,
    liveUntil: -1,
    tour,
    tourClock: PRESENCE_TOUR_START,
    bandsIn: new Float64Array(8),
    bandsOut: new Float64Array(8),
    cells: new Float64Array(MATRIX_SIZE * MATRIX_SIZE),
    target: new Float64Array(MATRIX_SIZE * MATRIX_SIZE),
    litIn: new Float64Array(MATRIX_SIZE),
    litOut: new Float64Array(MATRIX_SIZE),
    peaks: new Float64Array(MATRIX_SIZE),
    history: new Float64Array(LINE_SAMPLES + 1),
    historyClock: 0,
  };
}

export const simState = (sim: PresenceSim): PresenceState => presenceStates[sim.state];

/** Morph toward a state. Retargets mid-flight without overshoot. Returns true when it changed. */
export function setSimState(sim: PresenceSim, state: PresenceState): boolean {
  const index = stateIndex(state);
  if (index < 0) throw new RangeError(\`Unknown presence state: \${state}\`);
  if (index === sim.state) return false;
  sim.state = index;
  sim.phases.shot = 0;
  retarget(sim.w, sim.v, sim.om, index, omegaFor(state));
  return true;
}

/** A real keystroke: heard for one impulse window, and the simulated typist steps aside for a while. */
export function simImpulse(sim: PresenceSim, strength = 1) {
  sim.impulseUntil = sim.level.t + PRESENCE_LEVEL.impulseMs / 1000;
  sim.impulseStrength = clamp01(strength);
  sim.liveUntil = sim.level.t + PRESENCE_LEVEL.liveMs / 1000;
}

/** The shown levels: input and output after smoothing. */
export const levelIn = (sim: PresenceSim) => sim.level.y2[0];
export const levelOut = (sim: PresenceSim) => sim.level.y2[1];

/**
 * Advance the simulation by dt seconds. A channel only hears while its state owns it, so levels fall
 * away naturally on a change. In tour mode the tour picks the state; returns the new state when it moved.
 */
export function stepSim(sim: PresenceSim, rawDt: number): PresenceState | null {
  const dt = Math.min(Math.max(rawDt, 0), 0.1);
  let changed: PresenceState | null = null;
  if (sim.tour) {
    sim.tourClock += dt;
    const next = presenceTour(sim.tourClock).state;
    if (setSimState(sim, next)) changed = next;
  }
  const state = sim.state;
  const manual = sim.manual;
  advanceLevel(sim.level, dt, (t, x) => {
    if (state === LISTENING) {
      const impulse = t < sim.impulseUntil ? sim.impulseStrength : 0;
      const base = Number.isNaN(manual) ? (t < sim.liveUntil ? 0 : typingLevel(t, sim.seed)) : manual;
      x[0] = Math.max(impulse, base);
    } else x[0] = 0;
    x[1] = state === ANSWERING ? (Number.isNaN(manual) ? replyLevel(t, sim.seed) : manual) : 0;
  });
  const p = sim.phases;
  const inLevel = levelIn(sim);
  const outLevel = levelOut(sim);
  p.sweep += dt / (PRESENCE_TEMPO.sweep / 1000);
  p.think += dt / (PRESENCE_TEMPO.think / 1000);
  p.flowIn += dt * (0.6 + 2.4 * inLevel);
  p.flowOut += dt * (0.9 + 2.2 * outLevel);
  let spin = 0;
  for (let s = 0; s < STATE_COUNT; s++) spin += sim.weights[s] * SPIN[s];
  p.spin = (p.spin + dt * spin) % (2 * Math.PI);
  p.shot += dt;
  stepWeights(sim.w, sim.v, sim.om, sim.state, dt, sim.weights);
  bandLevels(sim.bandsIn, inLevel, sim.level.t, sim.seed);
  bandLevels(sim.bandsOut, outLevel, sim.level.t, sim.seed + 3);
  sim.t += dt;
  return changed;
}

/** How long after a still state begins its last movement ends (the nod, the shake, a history scrolling off). */
export function settleTime(variant: PresenceVariant) {
  return variant === 'line' ? (LINE_SAMPLES * LINE_SAMPLE_MS) / 1000 + 0.2 : 1;
}

/** Nothing left to draw: a still state, settled weights, silent channels, the last gesture over. */
export function simAtRest(sim: PresenceSim, variant: PresenceVariant) {
  const row = PRESENCE_STATES[simState(sim)];
  if (!row.still || sim.tour) return false;
  if (sim.phases.shot < settleTime(variant)) return false;
  if (!weightsAtRest(sim.w, sim.v, sim.state)) return false;
  if (!levelAtRest(sim.level)) return false;
  if (variant === 'matrix') {
    for (let i = 0; i < sim.cells.length; i++) if (Math.abs(sim.cells[i] - sim.target[i]) > 2e-3) return false;
  }
  return true;
}

export const STILL_LEVEL = Object.freeze({ input: 0.56, output: 0.62 });

/**
 * Snap to a still frame of a state: weights settled, phases at a legible moment, levels at a
 * representative value (or the manual level as a five-step meter). For reduced motion, paused
 * specimens and the first render.
 */
export function stillSim(sim: PresenceSim, state: PresenceState, variant: PresenceVariant) {
  const index = stateIndex(state);
  sim.state = index;
  sim.w.fill(0);
  sim.v.fill(0);
  sim.w[index] = 1;
  sim.weights.fill(0);
  sim.weights[index] = 1;
  sim.om.fill(omegaFor(state));
  Object.assign(sim.phases, { sweep: 0.42, think: 0.3, flowIn: 0, flowOut: 0, spin: 0, shot: 5 });
  const manual = Number.isNaN(sim.manual) ? null : reducedMeter(sim.manual);
  const input = index === LISTENING ? manual ?? STILL_LEVEL.input : 0;
  const output = index === ANSWERING ? manual ?? STILL_LEVEL.output : 0;
  const { level } = sim;
  level.x[0] = level.y1[0] = level.y2[0] = input;
  level.x[1] = level.y1[1] = level.y2[1] = output;
  for (const layer of level.layers) { layer.x = output; layer.v = 0; }
  bandLevels(sim.bandsIn, input, 1.3, sim.seed);
  bandLevels(sim.bandsOut, output, 1.3, sim.seed + 3);
  sim.litIn.fill(0);
  sim.litOut.fill(0);
  sim.peaks.fill(0);
  if (variant === 'matrix') {
    matrixTarget(sim, 0);
    sim.cells.set(sim.target);
  }
  if (variant === 'line') {
    for (let i = 0; i <= LINE_SAMPLES; i++) {
      const t = 1 + i * (LINE_SAMPLE_MS / 1000);
      sim.history[i] = lineValue(index, sim, t, input * (0.35 + 0.65 * noise1(i * 0.55, sim.seed)), output * (0.35 + 0.65 * noise1(i * 0.55, sim.seed + 1)), 0.6);
    }
    sim.historyClock = 0;
  }
}

/** Bring a form's own buffers up to the live state after a switch: the matrix lights at once, the line rolls in. */
export function primeVariant(sim: PresenceSim, variant: PresenceVariant) {
  if (variant === 'matrix') {
    matrixTarget(sim, 0);
    sim.cells.set(sim.target);
  }
  if (variant === 'line') {
    sim.history.fill(0);
    sim.historyClock = 0;
  }
}

/* ---------- poses ----------
 * Each form is a row of atoms. Per atom: x, y (fractions of the size, from the centre), scale x,
 * scale y, rotation (deg) and opacity. A pose per state, blended by the weights: a morph in
 * parameter space, never a crossfade of pixels. Bars and the line use scale y as a height (0..1). */

export const ATOM_STRIDE = 6;
export const HALO_DOTS = 24;
export const BAR_COUNT = 15;
export const BLOOM_PETALS = 6;
export const RIPPLE_RINGS = 4;

/** Atoms per form, in paint order. */
export const atomCount: Readonly<Record<PresenceVariant, number>> = Object.freeze({
  halo: 3 + HALO_DOTS,
  ripple: RIPPLE_RINGS + 1,
  bloom: BLOOM_PETALS + 1,
  bars: BAR_COUNT,
  matrix: MATRIX_SIZE * MATRIX_SIZE,
  line: LINE_SAMPLES + 1,
});

export const createAtoms = (variant: PresenceVariant) => new Float32Array(atomCount[variant] * ATOM_STRIDE);

const put = (out: Float32Array | Float64Array, i: number, x: number, y: number, sx: number, sy: number, rot: number, alpha: number) => {
  const o = i * ATOM_STRIDE;
  out[o] = x; out[o + 1] = y; out[o + 2] = sx; out[o + 3] = sy; out[o + 4] = rot; out[o + 5] = alpha;
};

/** One centre-out ripple: reaches the edge in 420 ms, gone by 600 ms, starting from nothing. */
export function nod(shot: number, u = 0) {
  const front = easeOutCubic(clamp01(shot / 0.42));
  const envelope = smoothstep(0, 0.06, shot) * (1 - smoothstep(0.1, PRESENCE_TEMPO.nod / 1000, shot));
  return envelope * bump(u - front, 0.42);
}
/** A small decaying shake, done in 420 ms. */
export function shake(shot: number) {
  const end = PRESENCE_TEMPO.shake / 1000;
  if (shot <= 0 || shot >= end) return 0;
  return Math.sin(2 * Math.PI * 7 * shot) * (1 - shot / end) ** 2;
}
/** A soft pop for arrivals: up and back within 600 ms. */
const pop = (shot: number) => (shot <= 0 ? 0 : Math.sin(Math.PI * clamp01(shot / 0.6)) * (1 - clamp01(shot / 0.6)) * 1.6);

interface PoseContext {
  sim: PresenceSim;
  inLevel: number;
  outLevel: number;
}

function poseHalo(out: Float64Array, s: number, { sim, inLevel, outLevel }: PoseContext) {
  const p = sim.phases;
  const layers = sim.level.layers;
  let skin = 1, mid = 1, core = 1, dx = 0;
  const N = HALO_DOTS;
  const think = 2 * Math.PI * p.think;
  if (s === IDLE) { skin = 0.9; mid = 0.88; core = 0.84; }
  else if (s === LISTENING) { skin = 0.95 + 0.05 * inLevel; mid = 0.96 + 0.1 * inLevel; core = 0.94 + 0.34 * inLevel; }
  else if (s === THINKING) { skin = 0.94; mid = 0.95 + 0.03 * Math.sin(think - 0.6); core = 0.92 + 0.07 * Math.sin(think); }
  else if (s === ANSWERING) { skin = 0.97 + 0.06 * layers[0].x; mid = 0.97 + 0.12 * layers[1].x; core = 0.96 + 0.22 * layers[2].x; }
  else if (s === HANDOFF) { skin = 0.9; mid = 0.9; core = 0.9; }
  else if (s === DONE) { skin = 0.96; mid = 0.98; core = 1.06 + 0.08 * pop(p.shot); }
  else { skin = 0.88; mid = 0.86; core = 0.92; dx = 0.022 * shake(p.shot); }
  put(out, 0, dx, 0, skin, skin, 0, 1);
  put(out, 1, dx, 0, mid, mid, 0, 1);
  put(out, 2 + N, dx, 0, core, core, 0, 1);
  const head = 2 * Math.PI * frac(p.think) - Math.PI / 2;
  const sweep = 2 * Math.PI * frac(p.sweep) - Math.PI / 2;
  for (let k = 0; k < N; k++) {
    const angle = (2 * Math.PI * k) / N + p.spin - Math.PI / 2;
    let r = 0.455, scale = 1, alpha = 0.35;
    if (s === IDLE) { r = 0.44; scale = 0.62; alpha = 0.3; }
    else if (s === LISTENING) {
      const grain = 0.5 + 0.5 * noise1(k * 0.9 + p.flowIn * 1.3, sim.seed, N);
      r = 0.46 - 0.085 * inLevel * grain;
      scale = 0.72 + 0.6 * inLevel * grain;
      alpha = 0.42 + 0.55 * inLevel;
    } else if (s === THINKING) {
      // A comet: a soft leading edge, a bright head, a tail behind it.
      const behind = angleGap(head, angle) / ((2 * Math.PI) / N);
      const tail = behind < 0 ? Math.max(0, 1 + behind) ** 2 : behind < 7 ? (1 - behind / 7) ** 1.6 : 0;
      r = 0.44;
      scale = 0.62 + 0.62 * tail;
      alpha = 0.18 + 0.78 * tail;
    } else if (s === ANSWERING) {
      const wave = 0.5 + 0.5 * Math.sin((2 * Math.PI * 3 * k) / N - p.flowOut * 2.6);
      r = 0.455 + 0.06 * outLevel * wave;
      scale = 0.82 + 0.6 * outLevel * wave;
      alpha = 0.55 + 0.45 * outLevel;
    } else if (s === HANDOFF) {
      const lit = bump(angleGap(angle, sweep) / ((2 * Math.PI) / N), 4.5);
      r = 0.4;
      scale = 0.66 + 0.5 * lit;
      alpha = 0.22 + 0.74 * lit;
    } else if (s === DONE) { r = 0.45 + 0.05 * nod(p.shot); scale = 0.86; alpha = 0.85; }
    else { r = 0.43; scale = 0.58; alpha = 0.2; }
    put(out, 2 + k, dx + r * Math.cos(angle), r * Math.sin(angle), scale, scale, 0, alpha);
  }
}

function poseRipple(out: Float64Array, s: number, { sim, inLevel, outLevel }: PoseContext) {
  const p = sim.phases;
  const R = RIPPLE_RINGS;
  let core = 1, dx = 0;
  if (s === IDLE) core = 0.86;
  else if (s === LISTENING) core = 0.94 + 0.3 * inLevel;
  else if (s === THINKING) core = 0.92 + 0.07 * Math.sin(2 * Math.PI * p.think);
  else if (s === ANSWERING) core = 0.96 + 0.2 * sim.level.layers[2].x;
  else if (s === HANDOFF) core = 0.9;
  else if (s === DONE) core = 1.08 + 0.08 * pop(p.shot);
  else { core = 0.9; dx = 0.022 * shake(p.shot); }
  for (let k = 0; k < R; k++) {
    let scale = 0.42, alpha = 0;
    if (s === IDLE) { scale = k === 0 ? 0.62 : 0.42; alpha = k === 0 ? 0.32 : 0; }
    else if (s === LISTENING) {
      const q = frac(k / R - p.flowIn * 0.42);
      scale = lerp(1, 0.4, q);
      alpha = (0.18 + 0.62 * inLevel) * smoothstep(0, 0.22, q) * (1 - smoothstep(0.72, 1, q));
    } else if (s === THINKING) {
      const wave = 0.5 + 0.5 * Math.sin(2 * Math.PI * (p.think - k * 0.16));
      scale = 0.5 + 0.12 * k + 0.035 * wave;
      alpha = 0.12 + 0.3 * wave * (1 - k * 0.18);
    } else if (s === ANSWERING) {
      const q = frac(k / R + p.flowOut * 0.5);
      scale = lerp(0.4, 1, q);
      alpha = (0.2 + 0.6 * outLevel) * smoothstep(0, 0.12, q) * (1 - q) ** 1.2;
    } else if (s === HANDOFF) {
      const lit = bump(k - (frac(p.sweep) * (R + 2.4) - 1.2), 1.3);
      scale = 0.52 + 0.14 * k;
      alpha = 0.1 + 0.55 * lit;
    } else if (s === DONE) {
      // One ring goes out with the nod; another settles where idle rests.
      const q = easeOutCubic(clamp01(p.shot / 0.6));
      scale = k === 0 ? lerp(0.4, 1.04, q) : k === 1 ? 0.62 : 0.42;
      alpha = k === 0 ? 0.7 * (1 - q) : k === 1 ? 0.32 * smoothstep(0.25, 0.6, p.shot) : 0;
    } else if (s === ERROR) {
      scale = k === 0 ? 0.58 : 0.42;
      alpha = k === 0 ? 0.28 : 0;
    }
    put(out, k, dx, 0, scale, scale, 0, alpha);
  }
  put(out, R, dx, 0, core, core, 0, 1);
}

function poseBloom(out: Float64Array, s: number, { sim, inLevel, outLevel }: PoseContext) {
  const p = sim.phases;
  const P = BLOOM_PETALS;
  let core = 1, dx = 0, turn = 0;
  if (s === IDLE) core = 0.74;
  else if (s === LISTENING) core = 0.8 + 0.24 * inLevel;
  else if (s === THINKING) core = 0.78;
  else if (s === ANSWERING) core = 0.84 + 0.14 * sim.level.layers[2].x;
  else if (s === HANDOFF) { core = 0.76; turn = 30; }
  else if (s === DONE) core = 1.1 + 0.08 * pop(p.shot);
  else { core = 0.84; dx = 0.022 * shake(p.shot); }
  const head = frac(p.think) * P;
  for (let k = 0; k < P; k++) {
    let d = 0.12, sx = 0.7, sy = 0.66, alpha = 0.8;
    if (s === IDLE) { d = 0.1; sx = 0.6; sy = 0.56; alpha = 0.5; }
    else if (s === LISTENING) {
      const grain = 0.55 + 0.45 * noise1(k * 1.7 + p.flowIn * 1.2, sim.seed, P);
      d = 0.12 + 0.07 * inLevel * grain;
      sx = 0.7 + 0.16 * inLevel;
      sy = 0.66 + 0.3 * inLevel * grain;
      alpha = 0.66 + 0.32 * inLevel;
    } else if (s === THINKING) {
      const lit = bump(ringGap(k, head, P), 1.7);
      d = 0.125 + 0.025 * lit;
      sx = 0.7;
      sy = 0.66 + 0.16 * lit;
      alpha = 0.45 + 0.5 * lit;
    } else if (s === ANSWERING) {
      const band = sim.bandsOut[k];
      d = 0.14 + 0.1 * band;
      sx = 0.76 + 0.14 * band;
      sy = 0.72 + 0.3 * band;
      alpha = 0.9;
    } else if (s === HANDOFF) { d = 0.085; sx = 0.62; sy = 0.6; alpha = 0.86; }
    else if (s === DONE) { d = 0.165 + 0.03 * nod(p.shot); sx = 0.84; sy = 0.88; alpha = 0.94; }
    else { d = 0.075; sx = 0.56; sy = 0.5; alpha = 0.36; }
    const deg = k * (360 / P) + turn + (p.spin * 180) / Math.PI;
    const a = (deg * Math.PI) / 180;
    put(out, k, dx + d * Math.sin(a), -d * Math.cos(a), sx, sy, deg, alpha);
  }
  put(out, P, dx, 0, core, core, 0, 1);
}

function poseBars(out: Float64Array, s: number, { sim }: PoseContext) {
  const p = sim.phases;
  const n = BAR_COUNT;
  const c = (n - 1) / 2;
  const B = sim.bandsIn.length;
  const x = -2 + (n + 3) * easeInOutSine(frac(p.sweep));
  for (let i = 0; i < n; i++) {
    const u = Math.abs(i - c) / c;
    let h = 0, a = 0.45, dx = 0;
    if (s === LISTENING) {
      h = 0.08 + 0.92 * Math.min(1, 1.5 * sim.bandsIn[Math.round(u * (B - 1))]) * (1 - 0.45 * u * u) * (0.75 + 0.25 * noise1(Math.abs(i - c) * 1.7 + p.flowIn, sim.seed));
      a = 0.75;
    } else if (s === THINKING) { h = 0.14 + 0.14 * (0.5 + 0.5 * Math.sin(2 * Math.PI * p.think - 2.2 * u)); a = 0.7; }
    else if (s === ANSWERING) {
      const f = (i * (B - 1)) / (n - 1);
      const k = Math.floor(f);
      const band = lerp(sim.bandsOut[k], sim.bandsOut[Math.min(B - 1, k + 1)], f - k);
      h = 0.08 + 0.92 * band * (1 - 0.25 * u * u) * (0.7 + 0.3 * noise1(i * 1.7 - p.flowOut, sim.seed + 1));
      a = 0.95;
    } else if (s === HANDOFF) { const lit = bump(i - x, 1.8); h = 0.16 + 0.34 * lit; a = 0.4 + 0.55 * lit; }
    else if (s === DONE) { h = 0.55 * nod(p.shot, u); a = 0.9; }
    else if (s === ERROR) { a = 0.75; dx = 0.018 * shake(p.shot); }
    put(out, i, dx, 0, 1, h, 0, a);
  }
}

const RING = [[1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [4, 5], [3, 5], [2, 5], [1, 5], [1, 4], [1, 3], [1, 2]] as const;
export const PIXEL_GLYPHS = Object.freeze({
  check: ['0000000', '0000001', '0000010', '1000100', '0101000', '0010000', '0000000'],
  close: ['0000000', '0100010', '0010100', '0001000', '0010100', '0100010', '0000000'],
});
const stepped = (cycles: number, seconds: number, fps: number) => Math.floor(cycles * seconds * fps) / (seconds * fps);

/** Brightness per cell for one state. Phases step at 12 per second, LED-style. */
function poseMatrix(cells: Float64Array, s: number, sim: PresenceSim, dt: number) {
  const N = MATRIX_SIZE;
  const p = sim.phases;
  const B = sim.bandsIn.length;
  cells.fill(s === IDLE || s === HANDOFF || s === THINKING ? 0.08 : 0.04);
  if (s === IDLE) cells[3 * N + 3] = 0.5;
  else if (s === HANDOFF) {
    const x = -1 + (N + 3) * frac(stepped(p.sweep, PRESENCE_TEMPO.sweep / 1000, 12));
    for (let c = 0; c < N; c++) {
      const d = x - c;
      const lit = d >= 0 && d < 1 ? 1 : d >= 1 && d < 3 ? 0.5 - 0.18 * (d - 1) : 0;
      if (lit) for (let r = 0; r < N; r++) cells[r * N + c] = Math.max(cells[r * N + c], lit);
    }
  } else if (s === LISTENING || s === ANSWERING) {
    const input = s === LISTENING;
    const lit = input ? sim.litIn : sim.litOut;
    const bands = input ? sim.bandsIn : sim.bandsOut;
    for (let c = 0; c < N; c++) {
      const band = input ? Math.round((Math.abs(c - 3) / 3) * (B - 1) * 0.6) : Math.round((c * (B - 1)) / (N - 1));
      lit[c] = vuCells(bands[band] * (input ? 1.45 - 0.16 * Math.abs(c - 3) : 1), N, lit[c]);
      for (let r = 0; r < N; r++) cells[(N - 1 - r) * N + c] = r < lit[c] ? (input ? 0.75 : 0.95) : 0.06;
      if (!input) {
        sim.peaks[c] = Math.max(lit[c], sim.peaks[c] - 1.2 * dt);
        const peak = Math.round(sim.peaks[c]) - 1;
        if (peak >= lit[c] && peak < N) cells[(N - 1 - peak) * N + c] = 0.6;
      }
    }
  } else if (s === THINKING) {
    const head = Math.floor(frac(stepped(p.think, PRESENCE_TEMPO.think / 1000, 12)) * RING.length);
    for (let k = 0; k < 8; k++) {
      const [c, r] = RING[(head - k + RING.length * 2) % RING.length];
      cells[r * N + c] = k < 3 ? 0.95 : 0.5 - 0.08 * (k - 3);
    }
  } else {
    const glyph = PIXEL_GLYPHS[s === DONE ? 'check' : 'close'];
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (glyph[r][c] === '1') cells[r * N + c] = 0.95;
  }
  return cells;
}

const matrixScratch = new Float64Array(MATRIX_SIZE * MATRIX_SIZE);
/** Blend every weighted state's cells into sim.target. */
function matrixTarget(sim: PresenceSim, dt: number) {
  sim.target.fill(0);
  for (let s = 0; s < STATE_COUNT; s++) {
    const w = sim.weights[s];
    if (w < 0.001) continue;
    poseMatrix(matrixScratch, s, sim, dt);
    for (let i = 0; i < sim.target.length; i++) sim.target[i] += w * matrixScratch[i];
  }
}

/** The value one state adds to the line's history at time t. */
function lineValue(s: number, sim: PresenceSim, t: number, inLevel: number, outLevel: number, shot: number) {
  if (s === LISTENING) return inLevel * (0.4 + 0.6 * noise1(t * 14, sim.seed));
  if (s === ANSWERING) return outLevel * (0.4 + 0.6 * noise1(t * 11, sim.seed + 1));
  if (s === THINKING) return 0.1 + 0.1 * (0.5 + 0.5 * Math.sin(2 * Math.PI * (t / (PRESENCE_TEMPO.think / 1000))));
  if (s === HANDOFF) {
    const beat = frac(t / (PRESENCE_TEMPO.sweep / 1000));
    return 0.08 + 0.62 * bump(beat - 0.12, 0.07) + 0.26 * bump(beat - 0.26, 0.06);
  }
  if (s === DONE) return 0.7 * nod(shot);
  return 0;
}

const atomScratch = new Float64Array(Math.max(...Object.values(atomCount)) * ATOM_STRIDE);
const atomSum = new Float64Array(atomScratch.length);

/**
 * The frame for a form: blend each weighted state's pose into \`out\`. Stateful forms (the matrix's
 * smoothed cells, the line's history) advance by \`dt\`; pass 0 for a still frame.
 */
export function poseFrame(sim: PresenceSim, variant: PresenceVariant, out: Float32Array, dt = 0): Float32Array {
  const count = atomCount[variant];
  const ctx: PoseContext = { sim, inLevel: levelIn(sim), outLevel: levelOut(sim) };
  if (variant === 'matrix') {
    matrixTarget(sim, dt);
    for (let i = 0; i < count; i++) {
      sim.cells[i] = dt > 0 ? expSmooth(sim.cells[i], sim.target[i], dt, 0.07) : sim.target[i];
      const b = sim.cells[i];
      const x = ((i % MATRIX_SIZE) - 3) / MATRIX_SIZE;
      const y = (Math.floor(i / MATRIX_SIZE) - 3) / MATRIX_SIZE;
      put(out, i, x, y, 0.7 + 0.3 * b, 0.7 + 0.3 * b, 0, 0.1 + 0.9 * b);
    }
    return out;
  }
  if (variant === 'line') {
    const step = LINE_SAMPLE_MS / 1000;
    sim.historyClock += dt;
    while (sim.historyClock >= step) {
      sim.historyClock -= step;
      let value = 0;
      for (let s = 0; s < STATE_COUNT; s++) {
        const w = sim.weights[s];
        if (w >= 0.001) value += w * lineValue(s, sim, sim.t, ctx.inLevel, ctx.outLevel, sim.phases.shot);
      }
      sim.history.copyWithin(0, 1);
      sim.history[LINE_SAMPLES] = clamp01(value);
    }
    let dim = 0;
    for (let s = 0; s < STATE_COUNT; s++) dim += sim.weights[s] * (s === IDLE ? 0.45 : s === ERROR ? 0.75 : 0.92);
    const offset = sim.historyClock / step;
    for (let i = 0; i <= LINE_SAMPLES; i++) put(out, i, -offset, 0, 1, sim.history[i], 0, dim);
    return out;
  }
  const pose = variant === 'halo' ? poseHalo : variant === 'ripple' ? poseRipple : variant === 'bloom' ? poseBloom : poseBars;
  const size = count * ATOM_STRIDE;
  atomSum.fill(0, 0, size);
  for (let s = 0; s < STATE_COUNT; s++) {
    const w = sim.weights[s];
    if (w < 0.001) continue;
    pose(atomScratch, s, ctx);
    for (let i = 0; i < size; i++) atomSum[i] += w * atomScratch[i];
  }
  let total = 0;
  for (let s = 0; s < STATE_COUNT; s++) if (sim.weights[s] >= 0.001) total += sim.weights[s];
  for (let i = 0; i < size; i++) out[i] = total > 0 ? atomSum[i] / total : 0;
  return out;
}

/** A still frame for a state, from scratch: what the server renders and what reduced motion keeps. */
export function stillFrame(variant: PresenceVariant, state: PresenceState, { seed = 7, level }: { seed?: number; level?: number } = {}) {
  const sim = createPresenceSim(state, { seed });
  if (level !== undefined) sim.manual = clamp01(level);
  stillSim(sim, state, variant);
  return poseFrame(sim, variant, createAtoms(variant), 0);
}
`},{name:`presenceLoop.ts`,code:`/* One requestAnimationFrame loop for every presence on the page. An instance joins while it has
   something to draw and leaves once it settles, so a resting presence costs no frames. The loop
   stops itself when the last instance leaves. */

/** Called once per frame with seconds since the last frame; return false to leave the loop. */
export type PresenceTick = (dt: number) => boolean;

const awake = new Set<PresenceTick>();
let frame = 0;
let last = 0;

function loop(now: number) {
  const dt = Math.min(Math.max((now - last) / 1000, 0), 0.1);
  last = now;
  for (const tick of [...awake]) {
    if (!awake.has(tick)) continue;
    if (!tick(dt)) awake.delete(tick);
  }
  frame = awake.size ? requestAnimationFrame(loop) : 0;
}

export function wakePresence(tick: PresenceTick) {
  awake.add(tick);
  if (!frame && typeof requestAnimationFrame === 'function') {
    last = typeof performance !== 'undefined' ? performance.now() : 0;
    frame = requestAnimationFrame(loop);
  }
}

export function sleepPresence(tick: PresenceTick) {
  awake.delete(tick);
  if (!awake.size && frame) {
    cancelAnimationFrame(frame);
    frame = 0;
  }
}

/** How many presences are drawing right now. Zero at rest. */
export const awakePresences = () => awake.size;
`},{name:`presence.css`,code:se},{name:`tokens.css`,code:T}],G=g(),pe=w.sampleMs/1e3,K=480,me=148,q=142,J=128;function he(e=7,n=.15){let r=S(),i=new Float32Array(120),a=new Float32Array(120),o=-1,s=n+120*pe;for(let c=0;c<s;c+=.01)t(r,.01,(t,s)=>{s[0]=m(t,e),s[1]=0,t>=n&&o<119&&(o+=1,i[o]=s[0],a[o]=r.y2[0])});return{raw:i,shown:a}}function ge({raw:e,shown:t}){let n=K/119,r=``,i=``;for(let a=0;a<120;a++){let o=(a*n).toFixed(1);e[a]>.001&&(r+=`M${o} ${q}V${(q-e[a]*J).toFixed(1)}`),i+=`${a?`L`:`M`}${o} ${(q-t[a]*J).toFixed(1)}`}return{raw:r,shown:i}}var _e=e=>e.y1[0]<.001&&e.y2[0]<.001&&e.x[0]<.001;function ve(){let e=i(),n=(0,R.useId)(),r=(0,R.useRef)(null),o=N(r,{page:`presence`}),s=u(),c=(0,R.useMemo)(()=>ge(he()),[]),l=(0,R.useRef)(null),d=(0,R.useRef)(null),f=(0,R.useRef)(null),[p,m]=(0,R.useState)(`seeded`),[h,g]=(0,R.useState)(``),[_,v]=(0,R.useState)(0);(0,R.useEffect)(()=>{let e=f.current;if(!e||p!==`live`)return;let n=()=>{let t=ge(e.trace);l.current?.setAttribute(`d`,t.raw),d.current?.setAttribute(`d`,t.shown)},r=r=>{let i=r;for(;i>0;){let n=Math.min(i,.05);t(e.engine,n,(t,n)=>{n[0]=t<e.until?e.strength:0,n[1]=0,e.trace.raw.copyWithin(0,1),e.trace.shown.copyWithin(0,1),e.trace.raw[119]=n[0],e.trace.shown[119]=e.engine.y2[0],e.quiet=n[0]>0||e.engine.y2[0]>.001?0:e.quiet+1}),i-=n}return n(),!(_e(e.engine)&&e.quiet>=120)};if(s){let e=setInterval(()=>{r(.4)||(clearInterval(e),m(`asleep`))},400);return()=>clearInterval(e)}if(!o)return;let i=0,a=performance.now(),c=e=>{let t=Math.min((e-a)/1e3,.1);a=e,r(t)?i=requestAnimationFrame(c):m(`asleep`)};return i=requestAnimationFrame(c),()=>cancelAnimationFrame(i)},[p,o,s,_]);let y=e=>{let t=e.target.value;f.current||={engine:S(),trace:{raw:new Float32Array(120),shown:new Float32Array(120)},until:-1,strength:1,quiet:0};let n=f.current;n.until=n.engine.t+w.impulseMs/1e3,n.strength=t.length<h.length?.55:1,n.quiet=0,g(t),p===`live`?v(e=>e+1):m(`live`)},b=p===`seeded`?`Simulated typist, seed 7. The same every time.`:p===`asleep`?`Asleep. No frames at rest.`:s?`Reduced motion: redrawn every 400 ms.`:`Live. A sample every ${w.sampleMs} ms.`;return(0,G.jsxs)(`div`,{ref:r,className:`presence-lab`,children:[(0,G.jsxs)(`div`,{className:`presence-lab__intro`,children:[(0,G.jsx)(`h3`,{className:`presence-panel__title`,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Smooth what you hear`})})}),(0,G.jsxs)(`p`,{className:`presence-panel__lead`,children:[(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`A tap rises in `})}),(0,G.jsx)(a,{en:w.attackMs}),(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:` ms and falls in `})}),(0,G.jsx)(a,{en:w.releaseMs}),(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:` ms, then a `})}),(0,G.jsx)(a,{en:w.polishMs}),(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:` ms polish rounds it off. Fast typing becomes a level that feels alive, not twitchy.`})})]}),(0,G.jsxs)(`div`,{className:`presence-lab__field`,children:[(0,G.jsx)(`label`,{className:`presence-lab__label`,htmlFor:n,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Type anything`})})}),(0,G.jsx)(`input`,{id:n,className:`presence-lab__input`,value:h,onChange:y,autoComplete:`off`,placeholder:e({en:`Size 10, under $80`})})]}),(0,G.jsxs)(`dl`,{className:`presence-lab__facts`,children:[(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`dt`,{children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Sample`})})}),(0,G.jsxs)(`dd`,{children:[(0,G.jsx)(a,{en:w.sampleMs}),(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:` ms`})})]})]}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`dt`,{children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Rise`})})}),(0,G.jsxs)(`dd`,{children:[(0,G.jsx)(a,{en:w.attackMs}),(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:` ms`})})]})]}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`dt`,{children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Fall`})})}),(0,G.jsxs)(`dd`,{children:[(0,G.jsx)(a,{en:w.releaseMs}),(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:` ms`})})]})]}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`dt`,{children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Polish`})})}),(0,G.jsxs)(`dd`,{children:[(0,G.jsx)(a,{en:w.polishMs}),(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:` ms`})})]})]})]})]}),(0,G.jsxs)(`figure`,{className:`presence-scope`,children:[(0,G.jsxs)(`div`,{className:`presence-scope__legend`,"aria-hidden":`true`,children:[(0,G.jsxs)(`span`,{children:[(0,G.jsx)(`i`,{"data-trace":`raw`}),(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:` Keystrokes`})})]}),(0,G.jsxs)(`span`,{children:[(0,G.jsx)(`i`,{"data-trace":`shown`}),(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:` Shown level`})})]})]}),(0,G.jsxs)(`svg`,{className:`presence-scope__plot`,viewBox:`0 0 ${K} ${me}`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:[(0,G.jsx)(a,{en:[.25,.5,.75].map(e=>(0,G.jsx)(`line`,{className:`presence-scope__grid`,x1:`0`,x2:K,y1:q-e*J,y2:q-e*J},e))}),(0,G.jsx)(`line`,{className:`presence-scope__base`,x1:`0`,x2:K,y1:q,y2:q}),(0,G.jsx)(`path`,{ref:l,className:`presence-scope__raw`,d:c.raw}),(0,G.jsx)(`path`,{ref:d,className:`presence-scope__shown`,d:c.shown})]}),(0,G.jsx)(`figcaption`,{className:`presence-scope__readout`,children:(0,G.jsx)(a,{en:b})})]})]})}function ye({variant:e}){let t={viewBox:`0 0 40 24`,width:40,height:24,className:`presence-thumb presence-thumb--${e}`,"aria-hidden":!0};if(e===`halo`)return(0,G.jsxs)(`svg`,{...t,children:[(0,G.jsx)(`circle`,{className:`presence-thumb__skin`,cx:`20`,cy:`12`,r:`9.6`}),(0,G.jsx)(`circle`,{className:`presence-thumb__mid`,cx:`20`,cy:`12`,r:`6.8`}),(0,G.jsx)(`circle`,{className:`presence-thumb__ink`,cx:`20`,cy:`12`,r:`4`}),(0,G.jsx)(a,{en:Array.from({length:12},(e,t)=>{let n=t/12*Math.PI*2;return(0,G.jsx)(`circle`,{className:`presence-thumb__ink`,cx:20+11*Math.cos(n),cy:12+11*Math.sin(n),r:`.85`,opacity:t%3==0?1:.45},t)})})]});if(e===`ripple`)return(0,G.jsxs)(`svg`,{...t,children:[(0,G.jsx)(a,{en:[10.6,8,5.6].map((e,t)=>(0,G.jsx)(`circle`,{className:`presence-thumb__ring`,cx:`20`,cy:`12`,r:e,opacity:.3+t*.22},e))}),(0,G.jsx)(`circle`,{className:`presence-thumb__ink`,cx:`20`,cy:`12`,r:`3.6`})]});if(e===`bloom`)return(0,G.jsxs)(`svg`,{...t,children:[(0,G.jsx)(a,{en:Array.from({length:6},(e,t)=>(0,G.jsx)(`ellipse`,{className:`presence-thumb__mid`,cx:`20`,cy:`7.2`,rx:`2.9`,ry:`4.6`,transform:`rotate(${t*60} 20 12)`,opacity:`.9`},t))}),(0,G.jsx)(`circle`,{className:`presence-thumb__ink`,cx:`20`,cy:`12`,r:`3.2`})]});if(e===`bars`){let e=[3,6,11,16,20,14,9,13,7,4,3];return(0,G.jsx)(`svg`,{...t,children:(0,G.jsx)(a,{en:e.map((e,t)=>(0,G.jsx)(`rect`,{className:`presence-thumb__ink`,x:7+t*2.6,y:12-e/2,width:`1.6`,height:e,rx:`.8`},t))})})}if(e===`matrix`){let e=new Set([9,13,17,19,23,7,3]);return(0,G.jsx)(`svg`,{...t,children:(0,G.jsx)(a,{en:Array.from({length:25},(t,n)=>(0,G.jsx)(`circle`,{className:`presence-thumb__ink`,cx:11.6+n%5*4.2,cy:3.6+Math.floor(n/5)*4.2,r:`1.35`,opacity:e.has(n)?1:.18},n))})})}let n=[2,3,5,9,14,8,4,6,12,17,11,6,3,2];return(0,G.jsx)(`svg`,{...t,children:(0,G.jsx)(a,{en:n.map((e,t)=>(0,G.jsx)(`rect`,{className:`presence-thumb__ink`,x:2.6+t*2.6,y:12-e/2,width:`1.3`,height:e,rx:`.65`,opacity:Math.min(1,.25+Math.min(t,13-t)*.22)},t))})})}var be={halo:`A breathing core in a ring of light. The default.`,ripple:`Rings drawn in as you type, sent out as it answers.`,bloom:`Six petals that open with every phrase.`,bars:`Sized for a composer. Mirrored for input, low to high for output.`,matrix:`Seven by seven dots, legible in an order row.`,line:`Two seconds of history, always scrolling forward.`},xe=e.map(e=>({id:e,label:B[e],description:be[e],thumb:(0,G.jsx)(ye,{variant:e})})),Se=[{value:`auto`,label:`Auto tour`},{value:`manual`,label:`Manual`}],Ce=o.map(e=>({value:e,label:z[e]})),we=[`idle`,`listening`,`thinking`,`answering`,`handoff`,`done`],Te=e=>we.map(t=>t===`done`&&e===`error`?{id:`error`,label:z.error}:{id:t,label:z[t]}),Y=[[`thinking`,2400],[`answering`,3400],[`handoff`,2200],[`done`,2400]],X=`Running shoes under $80`;function Z(e,t){if(t.length<e.length)return .55;let n=t.charCodeAt(t.length-1)||0;return n===32?.6:.82+n*37%10/55}function Ee({variant:e,active:t,demo:n,prompt:r,tourOn:o,state:s,onTourState:c,onPrompt:l}){let u=i(),d=(0,R.useId)(),f=(0,R.useRef)(null),[p,m]=(0,R.useState)(``),h=r.phase===`run`,g=(0,R.useRef)(t);return(0,R.useEffect)(()=>{g.current&&!t&&l({phase:`rest`}),g.current=t},[t,l]),(0,G.jsxs)(`div`,{className:`presence-scene`,children:[(0,G.jsx)(b,{ref:f,variant:e,state:s,tour:o,level:n.level??void 0,size:160,announce:!1,paused:!t,onStateChange:c,className:`presence-scene__shape`}),(0,G.jsxs)(`form`,{className:`presence-prompt`,onSubmit:e=>{e.preventDefault();let t=p.trim()||X;m(``),l({phase:`run`,step:0,query:t})},children:[(0,G.jsx)(`label`,{className:`kit-sr-only`,htmlFor:d,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Message your shopping agent`})})}),(0,G.jsx)(`input`,{id:d,className:`presence-prompt__input`,value:p,placeholder:u({en:X}),autoComplete:`off`,enterKeyHint:`send`,onChange:e=>{let t=e.target.value;f.current?.impulse(Z(p,t)),m(t),t?r.phase!==`typing`&&l({phase:`typing`},h?`Interrupted. Listening.`:void 0):l({phase:`rest`})},onKeyDown:e=>{e.key===`Escape`&&r.phase!==`rest`&&(e.preventDefault(),m(``),l({phase:`rest`},h?`Stopped. Nothing was ordered.`:void 0))},onBlur:()=>{r.phase===`typing`&&l({phase:`rest`})}}),(0,G.jsx)(_,{type:`submit`,label:u({en:`Send`}),icon:`arrow-up`,variant:`blue`,shape:`circle`,className:`presence-prompt__send`})]}),(0,G.jsxs)(`p`,{className:`presence-prompt__note`,children:[(0,G.jsx)(`span`,{className:`presence-chip`,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Simulated`})})}),(0,G.jsx)(`span`,{className:`presence-prompt__hint`,children:(0,G.jsx)(a,{en:h?`“${r.query}”`:`Type to see it listen. Enter sends.`})})]})]})}function De(){let e=i(),[t,n]=(0,R.useState)(ce),[r,o]=(0,R.useState)(()=>h(c).state),[s,u]=(0,R.useState)({phase:`rest`}),[d,f]=(0,R.useState)(``),p=e=>t=>n(n=>({...n,[e]:t})),m=(0,R.useCallback)((e,t)=>{u(e),f(t??``)},[]);(0,R.useEffect)(()=>{if(s.phase!==`run`)return;let e=setTimeout(()=>{s.step+1<Y.length?u({...s,step:s.step+1}):(u({phase:`rest`}),n(e=>e.mode===`manual`?{...e,state:`idle`}:e))},Y[s.step][1]);return()=>clearTimeout(e)},[s]),(0,R.useEffect)(()=>{if(!d)return;let e=setTimeout(()=>f(``),2400);return()=>clearTimeout(e)},[d]);let g=s.phase===`typing`?`listening`:s.phase===`run`?Y[s.step][0]:null,_=t.mode===`auto`&&!g,v=g??(t.mode===`manual`?t.state:r),y=Math.round((t.level??.5)*100),b=s.phase===`run`?le(v,s.query,l):l[v],x=d||(_?(0,G.jsx)(`span`,{"aria-live":`off`,children:(0,G.jsx)(a,{en:b})}):b),[S,C]=(0,R.useState)(null);return(0,G.jsx)(ee,{page:`presence`,name:`Agent presence`,variants:xe,variant:t.variant,onVariantChange:p(`variant`),status:x,animated:!0,trail:(0,G.jsx)(k,{states:Te(v),active:v,label:e({en:`Presence states`})}),code:{setup:ue,usage:de({...t,state:v}),usageFile:`ShoppingAgent.tsx`,sources:fe},controls:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(M,{label:e({en:`Mode`}),value:t.mode,options:Se,onChange:e=>{m({phase:`rest`}),n(t=>({...t,mode:e,state:v}))}}),(0,G.jsx)(`div`,{className:`presence-hold`,onFocus:()=>C(v),onBlur:()=>C(null),children:(0,G.jsx)(ie,{label:e({en:`State`}),value:S??v,options:Ce,onChange:e=>{C(e),m({phase:`rest`}),n(t=>({...t,mode:`manual`,state:e}))}})}),(0,G.jsx)(re,{label:e({en:`Simulated signal`}),checked:t.level===null,onChange:e=>p(`level`)(e?null:.5)}),(0,G.jsx)(j,{label:e({en:`Level`}),value:y,min:0,max:100,onChange:e=>p(`level`)(e/100),format:e=>t.level===null?`—`:`${e}%`})]}),children:({variant:e,active:n})=>(0,G.jsx)(Ee,{variant:e,active:n,demo:t,prompt:s,tourOn:_,state:v,onTourState:o,onPrompt:m})})}function Oe(){let e=i();return(0,G.jsx)(`div`,{className:`kit-table-wrap presence-sheet`,children:(0,G.jsxs)(`table`,{className:`kit-table`,children:[(0,G.jsx)(`caption`,{className:`kit-sr-only`,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`State sheet`})})}),(0,G.jsx)(`thead`,{children:(0,G.jsxs)(`tr`,{children:[(0,G.jsx)(`th`,{scope:`col`,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`State`})})}),(0,G.jsx)(`th`,{scope:`col`,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`What you see`})})}),(0,G.jsx)(`th`,{scope:`col`,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Signal`})})}),(0,G.jsx)(`th`,{scope:`col`,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Rhythm`})})}),(0,G.jsx)(`th`,{scope:`col`,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Announced as`})})})]})}),(0,G.jsx)(`tbody`,{children:(0,G.jsx)(a,{en:o.map(t=>(0,G.jsxs)(`tr`,{children:[(0,G.jsx)(`th`,{scope:`row`,"data-label":e({en:`State`}),children:(0,G.jsx)(`span`,{className:`presence-sheet__state`,"data-tone":C[t].tone,children:(0,G.jsx)(a,{en:z[t]})})}),(0,G.jsx)(`td`,{"data-label":e({en:`What you see`}),children:(0,G.jsx)(a,{en:C[t].sees})}),(0,G.jsx)(`td`,{"data-label":e({en:`Signal`}),children:(0,G.jsx)(a,{en:n(t)})}),(0,G.jsx)(`td`,{"data-label":e({en:`Rhythm`}),children:(0,G.jsx)(a,{en:r(t)})}),(0,G.jsxs)(`td`,{"data-label":e({en:`Announced as`}),children:[`“`,(0,G.jsx)(a,{en:l[t]}),`”`]})]},t))})})]})})}var ke=[{variant:`halo`,state:`answering`,note:`The hero. The core swells with the reply.`},{variant:`ripple`,state:`listening`,note:`Rings drawn inward, one per burst of keys.`},{variant:`bloom`,state:`done`,note:`Opens fully when the order lands.`},{variant:`bars`,state:`answering`,note:`Small enough for a composer or a button.`},{variant:`matrix`,state:`thinking`,note:`Reads at 32px, beside an order.`},{variant:`line`,state:`listening`,note:`A short history for a live session.`}];function Ae(){let e=i(),t=Math.max(...Object.values(f)),n=[...o].sort((e,t)=>f[e]-f[t]);return(0,G.jsxs)(`div`,{className:`presence-morph`,children:[(0,G.jsxs)(`div`,{className:`presence-morph__intro`,children:[(0,G.jsx)(`h3`,{className:`presence-panel__title`,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Morph, never cut`})})}),(0,G.jsx)(`p`,{className:`presence-panel__lead`,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Every change blends the shape from one pose to the next. Arrivals that answer you are quick; returning to rest is slow.`})})})]}),(0,G.jsx)(`ol`,{className:`presence-morph__rows`,"aria-label":e({en:`Time to settle, per state`}),children:(0,G.jsx)(a,{en:n.map(e=>(0,G.jsxs)(`li`,{className:`presence-morph__row`,children:[(0,G.jsx)(`span`,{className:`presence-morph__name`,children:(0,G.jsx)(a,{en:z[e]})}),(0,G.jsx)(`span`,{className:`presence-morph__track`,"aria-hidden":`true`,children:(0,G.jsx)(`span`,{className:`presence-morph__bar`,"data-tone":C[e].tone,style:{scale:`${f[e]/t} 1`}})}),(0,G.jsxs)(`span`,{className:`presence-morph__value`,children:[(0,G.jsx)(a,{en:f[e]}),(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:` ms`})})]})]},e))})})]})}var Q=[{name:`Pegasus 41`,store:`Runner’s Depot`,price:`$74.00`,note:`Lightest of the three`},{name:`Ghost 16`,store:`Shoe Hall`,price:`$79.00`,note:`Most cushion`},{name:`Novablast 5`,store:`Fleet Street`,price:`$68.00`,note:`Lowest price`}],$=`Running shoes under $80, size 10`;function je({active:e}){let t=i(),n=(0,R.useId)(),r=(0,R.useRef)(null),o=d({holdSuccess:0}),{reset:s}=o,[c,u]=(0,R.useState)(`rest`),[f,m]=(0,R.useState)(``),[h,g]=(0,R.useState)(``),[S,C]=(0,R.useState)(0),[w,T]=(0,R.useState)(!1),E=(0,R.useCallback)(()=>{u(`rest`),g(``),C(0),m(``),s()},[s]);(0,R.useEffect)(()=>{e||E()},[e,E]),(0,R.useEffect)(()=>{if(c===`thinking`){let e=setTimeout(()=>u(`answering`),1800);return()=>clearTimeout(e)}if(c===`answering`){if(S>=Q.length){let e=setTimeout(()=>u(`proposal`),700);return()=>clearTimeout(e)}let e=setTimeout(()=>C(e=>e+1),S===0?300:650);return()=>clearTimeout(e)}},[c,S]);let D=()=>{o.run(v(1600,w?`error`:`success`))},O=o.state===`waiting`||o.state===`loading`?`handoff`:o.state===`success`?`done`:o.state===`error`?`error`:c===`typing`?`listening`:c===`thinking`?`thinking`:c===`answering`?`answering`:`idle`,k=c===`proposal`&&O===`idle`?`Three picks. The Pegasus fits best.`:l[O],A=e=>{o.busy||(s(),g(e),m(``),C(0),u(`thinking`))},j=e=>{e.preventDefault(),A(f.trim()||$)},M=e=>{let t=e.target.value;r.current?.impulse(Z(f,t)),m(t),o.busy||u(t?`typing`:h?`proposal`:`rest`)},N=o.state===`success`;return(0,G.jsxs)(`article`,{className:`presence-chat`,"aria-label":t({en:`Shopping agent`}),children:[(0,G.jsxs)(`header`,{className:`presence-chat__head`,children:[(0,G.jsx)(b,{ref:r,state:O,size:52,announce:!1,paused:!e,className:`presence-chat__presence`}),(0,G.jsxs)(`div`,{className:`presence-chat__who`,children:[(0,G.jsx)(`p`,{className:`presence-chat__name`,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Shopping agent`})})}),(0,G.jsx)(`p`,{className:`presence-chat__sentence`,role:`status`,children:(0,G.jsx)(a,{en:k})})]}),(0,G.jsx)(`span`,{className:`presence-chip`,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Simulated`})})})]}),(0,G.jsxs)(`div`,{className:`presence-chat__thread`,children:[(0,G.jsx)(a,{en:!h&&(0,G.jsxs)(`div`,{className:`presence-chat__empty`,children:[(0,G.jsx)(`p`,{children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Ask for something specific. It compares stores and hands off to checkout when you say yes.`})})}),(0,G.jsx)(p,{size:`sm`,variant:`light`,onClick:()=>A($),children:(0,G.jsx)(a,{en:$})})]})}),(0,G.jsx)(a,{en:h&&(0,G.jsx)(`p`,{className:`presence-chat__bubble`,children:(0,G.jsx)(a,{en:h})})}),(0,G.jsx)(a,{en:h&&(0,G.jsx)(`ul`,{className:`presence-chat__offers`,"aria-label":t({en:`Offers`}),children:(0,G.jsx)(a,{en:Q.map((e,t)=>(0,G.jsxs)(`li`,{className:`presence-offer`,"data-shown":t<S||void 0,"data-pick":t===0&&c===`proposal`?``:void 0,children:[(0,G.jsxs)(`span`,{className:`presence-offer__text`,children:[(0,G.jsx)(`span`,{className:`presence-offer__name`,children:(0,G.jsx)(a,{en:e.name})}),(0,G.jsxs)(`span`,{className:`presence-offer__meta`,children:[(0,G.jsx)(a,{en:e.store}),` · `,(0,G.jsx)(a,{en:e.note})]})]}),(0,G.jsx)(`span`,{className:`presence-offer__price`,children:(0,G.jsx)(a,{en:e.price})})]},e.name))})})}),(0,G.jsx)(a,{en:c===`proposal`&&!N&&(0,G.jsxs)(`div`,{className:`presence-chat__proposal`,children:[(0,G.jsx)(p,{size:`sm`,state:o.visibleState,onClick:D,children:(0,G.jsx)(a,{en:o.state===`error`?`Try again`:`Buy Pegasus 41 · $74.00`})}),(0,G.jsx)(y,{label:t({en:`Store times out`}),checked:w,onChange:T,disabled:o.busy})]})}),(0,G.jsx)(a,{en:N&&(0,G.jsxs)(`div`,{className:`presence-receipt`,children:[(0,G.jsx)(`span`,{className:`presence-receipt__mark`,"aria-hidden":`true`,children:(0,G.jsx)(x,{name:`check`,size:16})}),(0,G.jsxs)(`span`,{className:`presence-receipt__text`,children:[(0,G.jsx)(`span`,{className:`presence-receipt__title`,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Ordered from Runner’s Depot`})})}),(0,G.jsx)(`span`,{className:`presence-receipt__meta`,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Pegasus 41, size 10 · $74.00 · Thursday`})})})]}),(0,G.jsx)(p,{size:`sm`,variant:`ghost`,onClick:E,children:t({en:`New request`})})]})})]}),(0,G.jsxs)(`form`,{className:`presence-composer`,onSubmit:j,children:[(0,G.jsx)(`label`,{className:`kit-sr-only`,htmlFor:n,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Message your shopping agent`})})}),(0,G.jsx)(`input`,{id:n,value:f,placeholder:t({en:`Ask your agent`}),autoComplete:`off`,enterKeyHint:`send`,onChange:M,onBlur:()=>{c===`typing`&&u(h?`proposal`:`rest`)}}),(0,G.jsx)(_,{type:`submit`,label:t({en:`Send`}),icon:`arrow-up`,variant:`blue`,shape:`circle`,size:`sm`})]})]})}var Me=[{item:`Noise-cancelling earbuds`,state:`thinking`},{item:`Trail running shoes`,state:`handoff`},{item:`Desk lamp`,state:`done`},{item:`Coffee beans, 1 kg`,state:`error`}];function Ne({active:e}){let t=i(),n=d({holdSuccess:0}),{reset:r}=n;(0,R.useEffect)(()=>{e||r()},[e,r]);let o=n.state===`waiting`||n.state===`loading`?`thinking`:n.state===`success`?`done`:`error`;return(0,G.jsxs)(`article`,{className:`presence-tasks`,"aria-label":t({en:`Agent errands`}),children:[(0,G.jsxs)(`header`,{className:`presence-tasks__head`,children:[(0,G.jsx)(`p`,{className:`presence-chat__name`,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Errands`})})}),(0,G.jsx)(`span`,{className:`presence-chip`,children:(0,G.jsx)(a,{en:(0,G.jsx)(G.Fragment,{children:`Simulated`})})})]}),(0,G.jsx)(`ul`,{className:`presence-tasks__list`,children:(0,G.jsx)(a,{en:Me.map(r=>{let i=r.item.startsWith(`Coffee`)?o:r.state;return(0,G.jsxs)(`li`,{className:`presence-task`,children:[(0,G.jsx)(b,{variant:`matrix`,state:i,size:44,announce:!1,paused:!e}),(0,G.jsxs)(`span`,{className:`presence-task__text`,children:[(0,G.jsx)(`span`,{className:`presence-task__item`,children:(0,G.jsx)(a,{en:r.item})}),(0,G.jsx)(`span`,{className:`presence-task__sentence`,"data-tone":C[i].tone,children:(0,G.jsx)(a,{en:l[i]})})]}),(0,G.jsx)(a,{en:i===`error`&&(0,G.jsx)(p,{size:`sm`,variant:`dark`,onClick:()=>{n.run(v(1400))},children:t({en:`Retry`})})})]},r.item)})})})]})}function Pe(){let e=(0,R.useRef)(null),t=N(e,{page:`presence`});return(0,G.jsxs)(`div`,{ref:e,className:`presence-context`,"data-playback":t?`running`:`paused`,children:[(0,G.jsx)(je,{active:t}),(0,G.jsx)(Ne,{active:t})]})}function Fe(){let e=i();return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(D,{id:`presence`}),(0,G.jsx)(De,{}),(0,G.jsx)(O,{title:e({en:`The state is a sentence.`}),lead:e({en:`The shape only confirms it. One small model drives every form, so the agent moves the same way everywhere it appears.`}),reasons:[{title:`Words first`,text:`Every state has a sentence, “Comparing 12 offers…”. It is announced once, politely. The shape is there for the eye.`},{title:`Direction carries meaning`,text:`Listening pulls inward with each keystroke; answering pushes outward. Level is never the only cue, color never the only signal.`},{title:`Asleep at rest`,text:`One frame loop for every presence. Offscreen, hidden, paused or settled, it draws nothing. Reduced motion keeps a still pose and the same words.`}]}),(0,G.jsx)(P,{id:`states`,title:e({en:`States`}),lead:e({en:`Seven states, each a pose and a sentence. Handoff is the moment money moves, so it gets its own.`}),children:(0,G.jsxs)(`div`,{className:`kit-stack`,children:[(0,G.jsxs)(L,{columns:4,children:[(0,G.jsx)(a,{en:o.map(t=>(0,G.jsx)(I,{title:e({en:z[t]}),note:C[t].sees,inspect:{code:W({state:t})},children:(0,G.jsx)(b,{state:t,size:112,announce:!1})},t))}),(0,G.jsx)(I,{title:e({en:`Tour`}),note:`A whole request, on a loop.`,interactive:!0,inspect:{code:W({tour:!0})},children:(0,G.jsx)(b,{tour:!0,size:112,announce:!1})})]}),(0,G.jsx)(Oe,{})]})}),(0,G.jsx)(P,{id:`forms`,title:e({en:`Forms`}),lead:e({en:`Six forms, one engine. Pick by the room you have: a hero, a composer, a row.`}),children:(0,G.jsx)(L,{columns:3,children:(0,G.jsx)(a,{en:ke.map(t=>(0,G.jsx)(I,{title:e({en:B[t.variant]}),note:t.note,inspect:{code:W({variant:t.variant,state:t.state})},children:(0,G.jsx)(b,{variant:t.variant,state:t.state,size:136,announce:!1})},t.variant))})})}),(0,G.jsx)(P,{id:`signal`,title:e({en:`Signal`}),lead:e({en:`It hears your keystrokes, never a microphone. Each key is a ${w.impulseMs} ms impulse; a two-pole follower turns the taps into a level.`}),children:(0,G.jsxs)(`div`,{className:`kit-stack`,children:[(0,G.jsx)(ve,{}),(0,G.jsx)(Ae,{})]})}),(0,G.jsx)(P,{id:`in-context`,title:e({en:`In context`}),lead:e({en:`A shopping agent from request to order, and a row of errands running at once. Type in the composer: it listens.`}),children:(0,G.jsx)(Pe,{})}),(0,G.jsx)(P,{id:`reference`,title:e({en:`Reference`}),children:(0,G.jsxs)(`div`,{className:`kit-folds`,children:[(0,G.jsx)(A,{title:e({en:`Properties & states`}),children:(0,G.jsx)(te,{props:E.props??[]})}),(0,G.jsx)(A,{title:e({en:`Usage & keyboard`}),children:(0,G.jsxs)(`div`,{className:`kit-stack`,children:[(0,G.jsx)(F,{number:1,title:e({en:`A sentence, then a shape`}),do:{text:`Pair the presence with its sentence, shown or announced.`,example:(0,G.jsx)(b,{variant:`bars`,state:`thinking`,size:88,label:e({en:`visible`}),announce:!1,paused:!0})},dont:{text:`Leave the shape to speak alone. Motion is not a status.`,example:(0,G.jsx)(b,{variant:`bars`,state:`thinking`,size:88,announce:!1,paused:!0})}}),(0,G.jsx)(F,{number:2,title:e({en:`One presence per surface`}),do:{text:`One agent, one presence, where the conversation is.`,example:(0,G.jsx)(b,{variant:`halo`,state:`answering`,size:72,announce:!1,paused:!0})},dont:{text:`Several shapes competing for the same attention.`,example:(0,G.jsxs)(`span`,{className:`presence-crowd`,children:[(0,G.jsx)(b,{variant:`halo`,state:`answering`,size:56,announce:!1,paused:!0}),(0,G.jsx)(b,{variant:`bloom`,state:`thinking`,size:56,announce:!1,paused:!0}),(0,G.jsx)(b,{variant:`ripple`,state:`listening`,size:56,announce:!1,paused:!0})]})}}),(0,G.jsx)(F,{number:3,title:e({en:`Busy only when it is`}),do:{text:`A fast answer skips thinking. Under 160 ms, go straight to answering.`,example:(0,G.jsx)(b,{variant:`matrix`,state:`answering`,size:72,announce:!1,paused:!0})},dont:{text:`Hold a thinking pose to look diligent. Waiting is a cost.`,example:(0,G.jsx)(b,{variant:`matrix`,state:`thinking`,size:72,announce:!1,paused:!0})}}),(0,G.jsx)(ae,{keys:E.keys??[]})]})}),(0,G.jsx)(A,{title:e({en:`Tokens`}),children:(0,G.jsxs)(`div`,{className:`kit-stack`,children:[(0,G.jsx)(ne,{tokens:E.tokens??[]}),(0,G.jsx)(oe,{tokens:[...E.tokens??[],`--z-color-blue`,`--z-color-danger`,`--z-motion-feedback`,`--z-color-surface`]})]})})]})})]})}export{Fe as default};