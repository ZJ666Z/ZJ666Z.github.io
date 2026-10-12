import{A as e,C as t,D as n,E as r,Fn as i,O as a,S as o,T as s,b as c,dn as l,gt as u,j as d,k as f,mn as p,mt as m,nn as h,p as g,rn as _,v,vt as y,w as b,x,y as S}from"./route-UEzl4zy4.js";import{t as C}from"./tokens--8wjVqaD.js";import{s as w}from"./docs-CRxPR9PY.js";import{A as T,O as E,a as D,c as O,d as k,f as A,g as j,h as ee,i as te,k as M,l as ne,m as re,n as N,o as P,p as ie,r as ae,s as F,t as oe}from"./kit-B_zmQpOy.js";import{t as se}from"./presence-QELuGdlv.js";var I=i(),ce={variant:`halo`,mode:`auto`,state:`listening`,level:null},L=Object.freeze({idle:`Idle`,listening:`Listening`,thinking:`Thinking`,answering:`Answering`,handoff:`Handoff`,done:`Done`,error:`Error`}),R=Object.freeze({halo:`Halo orb`,ripple:`Ripple`,bloom:`Bloom`,bars:`Signal bars`,matrix:`Status matrix`,line:`Activity line`});function le(e,t,n){let r=t.trim().replace(/\s+/g,` `);if(!r)return n[e];let i=r.length>36?`${r.slice(0,35).trimEnd()}…`:r;return e===`thinking`?`Comparing offers for “${i}”…`:e===`answering`?`Answering with three picks for “${i}”.`:n[e]}var ue=`// Once, at the app root
import '@zijie/ui/styles.css';

// Where you need it
import { Presence, type PresenceHandle, type PresenceState } from '@zijie/ui';
`,z=e=>String(Math.round(Math.min(1,Math.max(0,e))*100)/100);function B({variant:e,level:t},n=[]){let r=[];return e!==`halo`&&r.push(`variant="${e}"`),r.push(...n),t!==null&&r.push(`level={${z(t)}}`),r}var V=[`      <input`,`        aria-label="Message your shopping agent"`,`        placeholder="Running shoes under $80"`];function de(e){if(e.mode===`auto`)return[`import { useRef, useState } from 'react';`,`import { Presence, type PresenceHandle } from '@zijie/ui';`,``,`/** Walks a request start to finish; typing takes over and it listens. */`,`export function ShoppingAgent() {`,`  const presence = useRef<PresenceHandle>(null);`,`  const [typing, setTyping] = useState(false);`,`  return (`,`    <>`,`      <Presence`,...[`ref={presence}`,...B(e,[`tour={!typing}`,`state="listening"`])].map(e=>`        ${e}`),`      />`,...V,`        onChange={() => {`,`          setTyping(true);`,`          presence.current?.impulse();`,`        }}`,`        onBlur={() => setTyping(false)}`,`      />`,`    </>`,`  );`,`}`,``].join(`
`);let t=[`ref={presence}`,...B(e,[`state={state}`])];return[`import { useRef, useState } from 'react';`,`import { Presence, type PresenceHandle, type PresenceState } from '@zijie/ui';`,``,`/** Your agent events set the state; every keystroke is an impulse it listens to. */`,`export function ShoppingAgent() {`,`  const presence = useRef<PresenceHandle>(null);`,`  const [state, setState] = useState<PresenceState>('${e.state}');`,`  return (`,`    <>`,`      <Presence`,...t.map(e=>`        ${e}`),`      />`,...V,`        onChange={() => {`,`          setState('listening');`,`          presence.current?.impulse();`,`        }}`,`      />`,`    </>`,`  );`,`}`,``].join(`
`)}function H({variant:e=`halo`,state:t=`idle`,level:n,size:r,label:i,announce:a,tour:o}={}){let s=[];return e!==`halo`&&s.push(`variant="${e}"`),o?s.push(`tour`):t!==`idle`&&s.push(`state="${t}"`),n!==void 0&&s.push(`level={${z(n)}}`),r!==void 0&&r!==160&&s.push(`size={${r}}`),i===`visible`&&s.push(`label="visible"`),a===!1&&s.push(`announce={false}`),s.length<=2?`<Presence${s.map(e=>` ${e}`).join(``)} />\n`:[`<Presence`,...s.map(e=>`  ${e}`),`/>`,``].join(`
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
`},{name:`presence.css`,code:se},{name:`tokens.css`,code:C}],U=l(),pe=S.sampleMs/1e3,W=480,me=148,G=142,K=128;function he(e=7,n=.15){let r=b(),i=new Float32Array(120),a=new Float32Array(120),o=-1,s=n+120*pe;for(let c=0;c<s;c+=.01)t(r,.01,(t,s)=>{s[0]=d(t,e),s[1]=0,t>=n&&o<119&&(o+=1,i[o]=s[0],a[o]=r.y2[0])});return{raw:i,shown:a}}function q({raw:e,shown:t}){let n=W/119,r=``,i=``;for(let a=0;a<120;a++){let o=(a*n).toFixed(1);e[a]>.001&&(r+=`M${o} ${G}V${(G-e[a]*K).toFixed(1)}`),i+=`${a?`L`:`M`}${o} ${(G-t[a]*K).toFixed(1)}`}return{raw:r,shown:i}}var ge=e=>e.y1[0]<.001&&e.y2[0]<.001&&e.x[0]<.001;function _e(){let e=(0,I.useId)(),n=(0,I.useRef)(null),r=j(n,{page:`presence`}),i=p(),a=(0,I.useMemo)(()=>q(he()),[]),o=(0,I.useRef)(null),s=(0,I.useRef)(null),c=(0,I.useRef)(null),[l,u]=(0,I.useState)(`seeded`),[d,f]=(0,I.useState)(``),[m,h]=(0,I.useState)(0);(0,I.useEffect)(()=>{let e=c.current;if(!e||l!==`live`)return;let n=()=>{let t=q(e.trace);o.current?.setAttribute(`d`,t.raw),s.current?.setAttribute(`d`,t.shown)},a=r=>{let i=r;for(;i>0;){let n=Math.min(i,.05);t(e.engine,n,(t,n)=>{n[0]=t<e.until?e.strength:0,n[1]=0,e.trace.raw.copyWithin(0,1),e.trace.shown.copyWithin(0,1),e.trace.raw[119]=n[0],e.trace.shown[119]=e.engine.y2[0],e.quiet=n[0]>0||e.engine.y2[0]>.001?0:e.quiet+1}),i-=n}return n(),!(ge(e.engine)&&e.quiet>=120)};if(i){let e=setInterval(()=>{a(.4)||(clearInterval(e),u(`asleep`))},400);return()=>clearInterval(e)}if(!r)return;let d=0,f=performance.now(),p=e=>{let t=Math.min((e-f)/1e3,.1);f=e,a(t)?d=requestAnimationFrame(p):u(`asleep`)};return d=requestAnimationFrame(p),()=>cancelAnimationFrame(d)},[l,r,i,m]);let g=e=>{let t=e.target.value;c.current||={engine:b(),trace:{raw:new Float32Array(120),shown:new Float32Array(120)},until:-1,strength:1,quiet:0};let n=c.current;n.until=n.engine.t+S.impulseMs/1e3,n.strength=t.length<d.length?.55:1,n.quiet=0,f(t),l===`live`?h(e=>e+1):u(`live`)},_=l===`seeded`?`Simulated typist, seed 7. The same every time.`:l===`asleep`?`Asleep. No frames at rest.`:i?`Reduced motion: redrawn every 400 ms.`:`Live. A sample every ${S.sampleMs} ms.`;return(0,U.jsxs)(`div`,{ref:n,className:`presence-lab`,children:[(0,U.jsxs)(`div`,{className:`presence-lab__intro`,children:[(0,U.jsx)(`h3`,{className:`presence-panel__title`,children:`Smooth what you hear`}),(0,U.jsxs)(`p`,{className:`presence-panel__lead`,children:[`A tap rises in `,S.attackMs,` ms and falls in `,S.releaseMs,` ms, then a `,S.polishMs,` ms polish rounds it off. Fast typing becomes a level that feels alive, not twitchy.`]}),(0,U.jsxs)(`div`,{className:`presence-lab__field`,children:[(0,U.jsx)(`label`,{className:`presence-lab__label`,htmlFor:e,children:`Type anything`}),(0,U.jsx)(`input`,{id:e,className:`presence-lab__input`,value:d,onChange:g,autoComplete:`off`,placeholder:`Size 10, under $80`})]}),(0,U.jsxs)(`dl`,{className:`presence-lab__facts`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`dt`,{children:`Sample`}),(0,U.jsxs)(`dd`,{children:[S.sampleMs,` ms`]})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`dt`,{children:`Rise`}),(0,U.jsxs)(`dd`,{children:[S.attackMs,` ms`]})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`dt`,{children:`Fall`}),(0,U.jsxs)(`dd`,{children:[S.releaseMs,` ms`]})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`dt`,{children:`Polish`}),(0,U.jsxs)(`dd`,{children:[S.polishMs,` ms`]})]})]})]}),(0,U.jsxs)(`figure`,{className:`presence-scope`,children:[(0,U.jsxs)(`div`,{className:`presence-scope__legend`,"aria-hidden":`true`,children:[(0,U.jsxs)(`span`,{children:[(0,U.jsx)(`i`,{"data-trace":`raw`}),` Keystrokes`]}),(0,U.jsxs)(`span`,{children:[(0,U.jsx)(`i`,{"data-trace":`shown`}),` Shown level`]})]}),(0,U.jsxs)(`svg`,{className:`presence-scope__plot`,viewBox:`0 0 ${W} ${me}`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:[[.25,.5,.75].map(e=>(0,U.jsx)(`line`,{className:`presence-scope__grid`,x1:`0`,x2:W,y1:G-e*K,y2:G-e*K},e)),(0,U.jsx)(`line`,{className:`presence-scope__base`,x1:`0`,x2:W,y1:G,y2:G}),(0,U.jsx)(`path`,{ref:o,className:`presence-scope__raw`,d:a.raw}),(0,U.jsx)(`path`,{ref:s,className:`presence-scope__shown`,d:a.shown})]}),(0,U.jsx)(`figcaption`,{className:`presence-scope__readout`,children:_})]})]})}function ve({variant:e}){let t={viewBox:`0 0 40 24`,width:40,height:24,className:`presence-thumb presence-thumb--${e}`,"aria-hidden":!0};if(e===`halo`)return(0,U.jsxs)(`svg`,{...t,children:[(0,U.jsx)(`circle`,{className:`presence-thumb__skin`,cx:`20`,cy:`12`,r:`9.6`}),(0,U.jsx)(`circle`,{className:`presence-thumb__mid`,cx:`20`,cy:`12`,r:`6.8`}),(0,U.jsx)(`circle`,{className:`presence-thumb__ink`,cx:`20`,cy:`12`,r:`4`}),Array.from({length:12},(e,t)=>{let n=t/12*Math.PI*2;return(0,U.jsx)(`circle`,{className:`presence-thumb__ink`,cx:20+11*Math.cos(n),cy:12+11*Math.sin(n),r:`.85`,opacity:t%3==0?1:.45},t)})]});if(e===`ripple`)return(0,U.jsxs)(`svg`,{...t,children:[[10.6,8,5.6].map((e,t)=>(0,U.jsx)(`circle`,{className:`presence-thumb__ring`,cx:`20`,cy:`12`,r:e,opacity:.3+t*.22},e)),(0,U.jsx)(`circle`,{className:`presence-thumb__ink`,cx:`20`,cy:`12`,r:`3.6`})]});if(e===`bloom`)return(0,U.jsxs)(`svg`,{...t,children:[Array.from({length:6},(e,t)=>(0,U.jsx)(`ellipse`,{className:`presence-thumb__mid`,cx:`20`,cy:`7.2`,rx:`2.9`,ry:`4.6`,transform:`rotate(${t*60} 20 12)`,opacity:`.9`},t)),(0,U.jsx)(`circle`,{className:`presence-thumb__ink`,cx:`20`,cy:`12`,r:`3.2`})]});if(e===`bars`){let e=[3,6,11,16,20,14,9,13,7,4,3];return(0,U.jsx)(`svg`,{...t,children:e.map((e,t)=>(0,U.jsx)(`rect`,{className:`presence-thumb__ink`,x:7+t*2.6,y:12-e/2,width:`1.6`,height:e,rx:`.8`},t))})}if(e===`matrix`){let e=new Set([9,13,17,19,23,7,3]);return(0,U.jsx)(`svg`,{...t,children:Array.from({length:25},(t,n)=>(0,U.jsx)(`circle`,{className:`presence-thumb__ink`,cx:11.6+n%5*4.2,cy:3.6+Math.floor(n/5)*4.2,r:`1.35`,opacity:e.has(n)?1:.18},n))})}let n=[2,3,5,9,14,8,4,6,12,17,11,6,3,2];return(0,U.jsx)(`svg`,{...t,children:n.map((e,t)=>(0,U.jsx)(`rect`,{className:`presence-thumb__ink`,x:2.6+t*2.6,y:12-e/2,width:`1.3`,height:e,rx:`.65`,opacity:Math.min(1,.25+Math.min(t,13-t)*.22)},t))})}var ye={halo:`A breathing core in a ring of light. The default.`,ripple:`Rings drawn in as you type, sent out as it answers.`,bloom:`Six petals that open with every phrase.`,bars:`Sized for a composer. Mirrored for input, low to high for output.`,matrix:`Seven by seven dots, legible in an order row.`,line:`Two seconds of history, always scrolling forward.`},be=e.map(e=>({id:e,label:R[e],description:ye[e],thumb:(0,U.jsx)(ve,{variant:e})})),J=[{value:`auto`,label:`Auto tour`},{value:`manual`,label:`Manual`}],xe=a.map(e=>({value:e,label:L[e]})),Se=[`idle`,`listening`,`thinking`,`answering`,`handoff`,`done`],Ce=e=>Se.map(t=>t===`done`&&e===`error`?{id:`error`,label:L.error}:{id:t,label:L[t]}),Y=[[`thinking`,2400],[`answering`,3400],[`handoff`,2200],[`done`,2400]],X=`Running shoes under $80`;function Z(e,t){if(t.length<e.length)return .55;let n=t.charCodeAt(t.length-1)||0;return n===32?.6:.82+n*37%10/55}function we({variant:e,active:t,demo:n,prompt:r,tourOn:i,state:a,onTourState:o,onPrompt:s}){let c=(0,I.useId)(),l=(0,I.useRef)(null),[u,d]=(0,I.useState)(``),f=r.phase===`run`,p=(0,I.useRef)(t);return(0,I.useEffect)(()=>{p.current&&!t&&s({phase:`rest`}),p.current=t},[t,s]),(0,U.jsxs)(`div`,{className:`presence-scene`,children:[(0,U.jsx)(v,{ref:l,variant:e,state:a,tour:i,level:n.level??void 0,size:160,announce:!1,paused:!t,onStateChange:o,className:`presence-scene__shape`}),(0,U.jsxs)(`form`,{className:`presence-prompt`,onSubmit:e=>{e.preventDefault();let t=u.trim()||X;d(``),s({phase:`run`,step:0,query:t})},children:[(0,U.jsx)(`label`,{className:`kit-sr-only`,htmlFor:c,children:`Message your shopping agent`}),(0,U.jsx)(`input`,{id:c,className:`presence-prompt__input`,value:u,placeholder:X,autoComplete:`off`,enterKeyHint:`send`,onChange:e=>{let t=e.target.value;l.current?.impulse(Z(u,t)),d(t),t?r.phase!==`typing`&&s({phase:`typing`},f?`Interrupted. Listening.`:void 0):s({phase:`rest`})},onKeyDown:e=>{e.key===`Escape`&&r.phase!==`rest`&&(e.preventDefault(),d(``),s({phase:`rest`},f?`Stopped. Nothing was ordered.`:void 0))},onBlur:()=>{r.phase===`typing`&&s({phase:`rest`})}}),(0,U.jsx)(m,{type:`submit`,label:`Send`,icon:`arrow-up`,variant:`blue`,shape:`circle`,className:`presence-prompt__send`})]}),(0,U.jsxs)(`p`,{className:`presence-prompt__note`,children:[(0,U.jsx)(`span`,{className:`presence-chip`,children:`Simulated`}),(0,U.jsx)(`span`,{className:`presence-prompt__hint`,children:f?`“${r.query}”`:`Type to see it listen. Enter sends.`})]})]})}function Te(){let[e,t]=(0,I.useState)(ce),[n,r]=(0,I.useState)(()=>f(o).state),[i,a]=(0,I.useState)({phase:`rest`}),[c,l]=(0,I.useState)(``),u=e=>n=>t(t=>({...t,[e]:n})),d=(0,I.useCallback)((e,t)=>{a(e),l(t??``)},[]);(0,I.useEffect)(()=>{if(i.phase!==`run`)return;let e=setTimeout(()=>{i.step+1<Y.length?a({...i,step:i.step+1}):(a({phase:`rest`}),t(e=>e.mode===`manual`?{...e,state:`idle`}:e))},Y[i.step][1]);return()=>clearTimeout(e)},[i]),(0,I.useEffect)(()=>{if(!c)return;let e=setTimeout(()=>l(``),2400);return()=>clearTimeout(e)},[c]);let p=i.phase===`typing`?`listening`:i.phase===`run`?Y[i.step][0]:null,m=e.mode===`auto`&&!p,h=p??(e.mode===`manual`?e.state:n),g=Math.round((e.level??.5)*100),_=i.phase===`run`?le(h,i.query,s):s[h],v=c||(m?(0,U.jsx)(`span`,{"aria-live":`off`,children:_}):_),[y,b]=(0,I.useState)(null);return(0,U.jsx)(ee,{page:`presence`,name:`Agent presence`,variants:be,variant:e.variant,onVariantChange:u(`variant`),status:v,animated:!0,trail:(0,U.jsx)(D,{states:Ce(h),active:h,label:`Presence states`}),code:{setup:ue,usage:de({...e,state:h}),usageFile:`ShoppingAgent.tsx`,sources:fe},controls:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(A,{label:`Mode`,value:e.mode,options:J,onChange:e=>{d({phase:`rest`}),t(t=>({...t,mode:e,state:h}))}}),(0,U.jsx)(`div`,{className:`presence-hold`,onFocus:()=>b(h),onBlur:()=>b(null),children:(0,U.jsx)(ie,{label:`State`,value:y??h,options:xe,onChange:e=>{b(e),d({phase:`rest`}),t(t=>({...t,mode:`manual`,state:e}))}})}),(0,U.jsx)(re,{label:`Simulated signal`,checked:e.level===null,onChange:e=>u(`level`)(e?null:.5)}),(0,U.jsx)(k,{label:`Level`,value:g,min:0,max:100,onChange:e=>u(`level`)(e/100),format:t=>e.level===null?`—`:`${t}%`})]}),children:({variant:t,active:n})=>(0,U.jsx)(we,{variant:t,active:n,demo:e,prompt:i,tourOn:m,state:h,onTourState:r,onPrompt:d})})}function Ee(){return(0,U.jsx)(`div`,{className:`kit-table-wrap presence-sheet`,children:(0,U.jsxs)(`table`,{className:`kit-table`,children:[(0,U.jsx)(`caption`,{className:`kit-sr-only`,children:`State sheet`}),(0,U.jsx)(`thead`,{children:(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`th`,{scope:`col`,children:`State`}),(0,U.jsx)(`th`,{scope:`col`,children:`What you see`}),(0,U.jsx)(`th`,{scope:`col`,children:`Signal`}),(0,U.jsx)(`th`,{scope:`col`,children:`Rhythm`}),(0,U.jsx)(`th`,{scope:`col`,children:`Announced as`})]})}),(0,U.jsx)(`tbody`,{children:a.map(e=>(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`th`,{scope:`row`,"data-label":`State`,children:(0,U.jsx)(`span`,{className:`presence-sheet__state`,"data-tone":x[e].tone,children:L[e]})}),(0,U.jsx)(`td`,{"data-label":`What you see`,children:x[e].sees}),(0,U.jsx)(`td`,{"data-label":`Signal`,children:n(e)}),(0,U.jsx)(`td`,{"data-label":`Rhythm`,children:r(e)}),(0,U.jsxs)(`td`,{"data-label":`Announced as`,children:[`“`,s[e],`”`]})]},e))})]})})}var De=[{variant:`halo`,state:`answering`,note:`The hero. The core swells with the reply.`},{variant:`ripple`,state:`listening`,note:`Rings drawn inward, one per burst of keys.`},{variant:`bloom`,state:`done`,note:`Opens fully when the order lands.`},{variant:`bars`,state:`answering`,note:`Small enough for a composer or a button.`},{variant:`matrix`,state:`thinking`,note:`Reads at 32px, beside an order.`},{variant:`line`,state:`listening`,note:`A short history for a live session.`}];function Oe(){let e=Math.max(...Object.values(c)),t=[...a].sort((e,t)=>c[e]-c[t]);return(0,U.jsxs)(`div`,{className:`presence-morph`,children:[(0,U.jsxs)(`div`,{className:`presence-morph__intro`,children:[(0,U.jsx)(`h3`,{className:`presence-panel__title`,children:`Morph, never cut`}),(0,U.jsx)(`p`,{className:`presence-panel__lead`,children:`Every change blends the shape from one pose to the next. Arrivals that answer you are quick; returning to rest is slow.`})]}),(0,U.jsx)(`ol`,{className:`presence-morph__rows`,"aria-label":`Time to settle, per state`,children:t.map(t=>(0,U.jsxs)(`li`,{className:`presence-morph__row`,children:[(0,U.jsx)(`span`,{className:`presence-morph__name`,children:L[t]}),(0,U.jsx)(`span`,{className:`presence-morph__track`,"aria-hidden":`true`,children:(0,U.jsx)(`span`,{className:`presence-morph__bar`,"data-tone":x[t].tone,style:{scale:`${c[t]/e} 1`}})}),(0,U.jsxs)(`span`,{className:`presence-morph__value`,children:[c[t],` ms`]})]},t))})]})}var Q=[{name:`Pegasus 41`,store:`Runner’s Depot`,price:`$74.00`,note:`Lightest of the three`},{name:`Ghost 16`,store:`Shoe Hall`,price:`$79.00`,note:`Most cushion`},{name:`Novablast 5`,store:`Fleet Street`,price:`$68.00`,note:`Lowest price`}],$=`Running shoes under $80, size 10`;function ke({active:e}){let t=(0,I.useId)(),n=(0,I.useRef)(null),r=h({holdSuccess:0}),{reset:i}=r,[a,o]=(0,I.useState)(`rest`),[c,l]=(0,I.useState)(``),[d,f]=(0,I.useState)(``),[p,b]=(0,I.useState)(0),[x,S]=(0,I.useState)(!1),C=(0,I.useCallback)(()=>{o(`rest`),f(``),b(0),l(``),i()},[i]);(0,I.useEffect)(()=>{e||C()},[e,C]),(0,I.useEffect)(()=>{if(a===`thinking`){let e=setTimeout(()=>o(`answering`),1800);return()=>clearTimeout(e)}if(a===`answering`){if(p>=Q.length){let e=setTimeout(()=>o(`proposal`),700);return()=>clearTimeout(e)}let e=setTimeout(()=>b(e=>e+1),p===0?300:650);return()=>clearTimeout(e)}},[a,p]);let w=()=>{r.run(_(1600,x?`error`:`success`))},T=r.state===`waiting`||r.state===`loading`?`handoff`:r.state===`success`?`done`:r.state===`error`?`error`:a===`typing`?`listening`:a===`thinking`?`thinking`:a===`answering`?`answering`:`idle`,E=a===`proposal`&&T===`idle`?`Three picks. The Pegasus fits best.`:s[T],D=e=>{r.busy||(i(),f(e),l(``),b(0),o(`thinking`))},O=e=>{e.preventDefault(),D(c.trim()||$)},k=e=>{let t=e.target.value;n.current?.impulse(Z(c,t)),l(t),r.busy||o(t?`typing`:d?`proposal`:`rest`)},A=r.state===`success`;return(0,U.jsxs)(`article`,{className:`presence-chat`,"aria-label":`Shopping agent`,children:[(0,U.jsxs)(`header`,{className:`presence-chat__head`,children:[(0,U.jsx)(v,{ref:n,state:T,size:52,announce:!1,paused:!e,className:`presence-chat__presence`}),(0,U.jsxs)(`div`,{className:`presence-chat__who`,children:[(0,U.jsx)(`p`,{className:`presence-chat__name`,children:`Shopping agent`}),(0,U.jsx)(`p`,{className:`presence-chat__sentence`,role:`status`,children:E})]}),(0,U.jsx)(`span`,{className:`presence-chip`,children:`Simulated`})]}),(0,U.jsxs)(`div`,{className:`presence-chat__thread`,children:[!d&&(0,U.jsxs)(`div`,{className:`presence-chat__empty`,children:[(0,U.jsx)(`p`,{children:`Ask for something specific. It compares stores and hands off to checkout when you say yes.`}),(0,U.jsx)(u,{size:`sm`,variant:`light`,onClick:()=>D($),children:$})]}),d&&(0,U.jsx)(`p`,{className:`presence-chat__bubble`,children:d}),d&&(0,U.jsx)(`ul`,{className:`presence-chat__offers`,"aria-label":`Offers`,children:Q.map((e,t)=>(0,U.jsxs)(`li`,{className:`presence-offer`,"data-shown":t<p||void 0,"data-pick":t===0&&a===`proposal`?``:void 0,children:[(0,U.jsxs)(`span`,{className:`presence-offer__text`,children:[(0,U.jsx)(`span`,{className:`presence-offer__name`,children:e.name}),(0,U.jsxs)(`span`,{className:`presence-offer__meta`,children:[e.store,` · `,e.note]})]}),(0,U.jsx)(`span`,{className:`presence-offer__price`,children:e.price})]},e.name))}),a===`proposal`&&!A&&(0,U.jsxs)(`div`,{className:`presence-chat__proposal`,children:[(0,U.jsx)(u,{size:`sm`,state:r.visibleState,onClick:w,children:r.state===`error`?`Try again`:`Buy Pegasus 41 · $74.00`}),(0,U.jsx)(g,{label:`Store times out`,checked:x,onChange:S,disabled:r.busy})]}),A&&(0,U.jsxs)(`div`,{className:`presence-receipt`,children:[(0,U.jsx)(`span`,{className:`presence-receipt__mark`,"aria-hidden":`true`,children:(0,U.jsx)(y,{name:`check`,size:16})}),(0,U.jsxs)(`span`,{className:`presence-receipt__text`,children:[(0,U.jsx)(`span`,{className:`presence-receipt__title`,children:`Ordered from Runner’s Depot`}),(0,U.jsx)(`span`,{className:`presence-receipt__meta`,children:`Pegasus 41, size 10 · $74.00 · Thursday`})]}),(0,U.jsx)(u,{size:`sm`,variant:`ghost`,onClick:C,children:`New request`})]})]}),(0,U.jsxs)(`form`,{className:`presence-composer`,onSubmit:O,children:[(0,U.jsx)(`label`,{className:`kit-sr-only`,htmlFor:t,children:`Message your shopping agent`}),(0,U.jsx)(`input`,{id:t,value:c,placeholder:`Ask your agent`,autoComplete:`off`,enterKeyHint:`send`,onChange:k,onBlur:()=>{a===`typing`&&o(d?`proposal`:`rest`)}}),(0,U.jsx)(m,{type:`submit`,label:`Send`,icon:`arrow-up`,variant:`blue`,shape:`circle`,size:`sm`})]})]})}var Ae=[{item:`Noise-cancelling earbuds`,state:`thinking`},{item:`Trail running shoes`,state:`handoff`},{item:`Desk lamp`,state:`done`},{item:`Coffee beans, 1 kg`,state:`error`}];function je({active:e}){let t=h({holdSuccess:0}),{reset:n}=t;(0,I.useEffect)(()=>{e||n()},[e,n]);let r=t.state===`waiting`||t.state===`loading`?`thinking`:t.state===`success`?`done`:`error`;return(0,U.jsxs)(`article`,{className:`presence-tasks`,"aria-label":`Agent errands`,children:[(0,U.jsxs)(`header`,{className:`presence-tasks__head`,children:[(0,U.jsx)(`p`,{className:`presence-chat__name`,children:`Errands`}),(0,U.jsx)(`span`,{className:`presence-chip`,children:`Simulated`})]}),(0,U.jsx)(`ul`,{className:`presence-tasks__list`,children:Ae.map(n=>{let i=n.item.startsWith(`Coffee`)?r:n.state;return(0,U.jsxs)(`li`,{className:`presence-task`,children:[(0,U.jsx)(v,{variant:`matrix`,state:i,size:44,announce:!1,paused:!e}),(0,U.jsxs)(`span`,{className:`presence-task__text`,children:[(0,U.jsx)(`span`,{className:`presence-task__item`,children:n.item}),(0,U.jsx)(`span`,{className:`presence-task__sentence`,"data-tone":x[i].tone,children:s[i]})]}),i===`error`&&(0,U.jsx)(u,{size:`sm`,variant:`dark`,onClick:()=>{t.run(_(1400))},children:`Retry`})]},n.item)})})]})}function Me(){let e=(0,I.useRef)(null),t=j(e,{page:`presence`});return(0,U.jsxs)(`div`,{ref:e,className:`presence-context`,"data-playback":t?`running`:`paused`,children:[(0,U.jsx)(ke,{active:t}),(0,U.jsx)(je,{active:t})]})}function Ne(){return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(T,{id:`presence`}),(0,U.jsx)(Te,{}),(0,U.jsx)(E,{title:`The state is a sentence.`,lead:`The shape only confirms it. One small model drives every form, so the agent moves the same way everywhere it appears.`,reasons:[{title:`Words first`,text:`Every state has a sentence, “Comparing 12 offers…”. It is announced once, politely. The shape is there for the eye.`},{title:`Direction carries meaning`,text:`Listening pulls inward with each keystroke; answering pushes outward. Level is never the only cue, color never the only signal.`},{title:`Asleep at rest`,text:`One frame loop for every presence. Offscreen, hidden, paused or settled, it draws nothing. Reduced motion keeps a still pose and the same words.`}]}),(0,U.jsx)(M,{id:`states`,title:`States`,lead:`Seven states, each a pose and a sentence. Handoff is the moment money moves, so it gets its own.`,children:(0,U.jsxs)(`div`,{className:`kit-stack`,children:[(0,U.jsxs)(F,{columns:4,children:[a.map(e=>(0,U.jsx)(P,{title:L[e],note:x[e].sees,inspect:{code:H({state:e})},children:(0,U.jsx)(v,{state:e,size:112,announce:!1})},e)),(0,U.jsx)(P,{title:`Tour`,note:`A whole request, on a loop.`,interactive:!0,inspect:{code:H({tour:!0})},children:(0,U.jsx)(v,{tour:!0,size:112,announce:!1})})]}),(0,U.jsx)(Ee,{})]})}),(0,U.jsx)(M,{id:`forms`,title:`Forms`,lead:`Six forms, one engine. Pick by the room you have: a hero, a composer, a row.`,children:(0,U.jsx)(F,{columns:3,children:De.map(e=>(0,U.jsx)(P,{title:R[e.variant],note:e.note,inspect:{code:H({variant:e.variant,state:e.state})},children:(0,U.jsx)(v,{variant:e.variant,state:e.state,size:136,announce:!1})},e.variant))})}),(0,U.jsx)(M,{id:`signal`,title:`Signal`,lead:`It hears your keystrokes, never a microphone. Each key is a ${S.impulseMs} ms impulse; a two-pole follower turns the taps into a level.`,children:(0,U.jsxs)(`div`,{className:`kit-stack`,children:[(0,U.jsx)(_e,{}),(0,U.jsx)(Oe,{})]})}),(0,U.jsx)(M,{id:`in-context`,title:`In context`,lead:`A shopping agent from request to order, and a row of errands running at once. Type in the composer: it listens.`,children:(0,U.jsx)(Me,{})}),(0,U.jsx)(M,{id:`reference`,title:`Reference`,children:(0,U.jsxs)(`div`,{className:`kit-folds`,children:[(0,U.jsx)(O,{title:`Properties & states`,children:(0,U.jsx)(te,{props:w.props??[]})}),(0,U.jsx)(O,{title:`Usage & keyboard`,children:(0,U.jsxs)(`div`,{className:`kit-stack`,children:[(0,U.jsx)(N,{number:1,title:`A sentence, then a shape`,do:{text:`Pair the presence with its sentence, shown or announced.`,example:(0,U.jsx)(v,{variant:`bars`,state:`thinking`,size:88,label:`visible`,announce:!1,paused:!0})},dont:{text:`Leave the shape to speak alone. Motion is not a status.`,example:(0,U.jsx)(v,{variant:`bars`,state:`thinking`,size:88,announce:!1,paused:!0})}}),(0,U.jsx)(N,{number:2,title:`One presence per surface`,do:{text:`One agent, one presence, where the conversation is.`,example:(0,U.jsx)(v,{variant:`halo`,state:`answering`,size:72,announce:!1,paused:!0})},dont:{text:`Several shapes competing for the same attention.`,example:(0,U.jsxs)(`span`,{className:`presence-crowd`,children:[(0,U.jsx)(v,{variant:`halo`,state:`answering`,size:56,announce:!1,paused:!0}),(0,U.jsx)(v,{variant:`bloom`,state:`thinking`,size:56,announce:!1,paused:!0}),(0,U.jsx)(v,{variant:`ripple`,state:`listening`,size:56,announce:!1,paused:!0})]})}}),(0,U.jsx)(N,{number:3,title:`Busy only when it is`,do:{text:`A fast answer skips thinking. Under 160 ms, go straight to answering.`,example:(0,U.jsx)(v,{variant:`matrix`,state:`answering`,size:72,announce:!1,paused:!0})},dont:{text:`Hold a thinking pose to look diligent. Waiting is a cost.`,example:(0,U.jsx)(v,{variant:`matrix`,state:`thinking`,size:72,announce:!1,paused:!0})}}),(0,U.jsx)(ae,{keys:w.keys??[]})]})}),(0,U.jsx)(O,{title:`Tokens`,children:(0,U.jsxs)(`div`,{className:`kit-stack`,children:[(0,U.jsx)(ne,{tokens:w.tokens??[]}),(0,U.jsx)(oe,{tokens:[...w.tokens??[],`--z-color-blue`,`--z-color-danger`,`--z-motion-feedback`,`--z-color-surface`]})]})})]})})]})}export{Ne as default};