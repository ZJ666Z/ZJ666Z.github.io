var e=`import { useCallback, useMemo, useState, type KeyboardEvent, type PointerEvent, type SyntheticEvent } from 'react';

type Handler<E> = ((event: E) => void) | undefined;

/** Call every handler in order (library handlers first, then the caller's). */
export function composeHandlers<E extends SyntheticEvent>(...handlers: Handler<E>[]) {
  return (event: E) => {
    for (const handler of handlers) handler?.(event);
  };
}

export interface PressProps {
  'data-pressed'?: true;
  onPointerDown: (event: PointerEvent<HTMLElement>) => void;
  onPointerUp: () => void;
  onPointerLeave: () => void;
  onPointerCancel: () => void;
  onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
  onKeyUp: (event: KeyboardEvent<HTMLElement>) => void;
  onBlur: () => void;
}

/**
 * Press feedback for pointer and keyboard alike. Style \`[data-pressed]\` with
 * \`scale: var(--z-press-scale)\` over \`--z-motion-press\`; release uses \`--z-motion-feedback\`.
 */
export function usePress({ disabled = false }: { disabled?: boolean } = {}): { pressed: boolean; pressProps: PressProps } {
  const [pressed, setPressed] = useState(false);
  const release = useCallback(() => setPressed(false), []);
  const pressProps = useMemo<PressProps>(() => ({
    ...(pressed ? { 'data-pressed': true as const } : {}),
    onPointerDown: event => {
      if (disabled || event.button !== 0) return;
      setPressed(true);
    },
    onPointerUp: release,
    onPointerLeave: release,
    onPointerCancel: release,
    onKeyDown: event => {
      if (disabled || event.repeat) return;
      if (event.key === ' ' || event.key === 'Enter') setPressed(true);
    },
    onKeyUp: event => {
      if (event.key === ' ' || event.key === 'Enter') setPressed(false);
    },
    onBlur: release,
  }), [disabled, pressed, release]);
  return { pressed, pressProps };
}
`;export{e as t};