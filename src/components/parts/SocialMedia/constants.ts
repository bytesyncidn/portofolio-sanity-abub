import type { Position, Rounded } from './tyes';

export const ROUNDED_CLASSNAME: Record<Rounded, string> = {
  all: 'rounded-full',
  right: 'rounded-e-full',
};

export const POSITION_CLASSNAME: Record<Position, string> = {
  left: 'left-0',
  center: 'left-1/2 -translate-x-1/2',
};
