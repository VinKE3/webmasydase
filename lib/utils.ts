import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MIN_RADIUS = 7.5;
const MAX_RADIUS = 15;
const DEPTH = 2;
const LEFT_COLOR = "2483ab";
const RIGHT_COLOR = "6DE4E8";
const NUM_POINTS = 2500;

// Helper function to ensure ratio is within bounds
const clamp = (value: number, min: number, max: number): number => {
  return Math.max(min, Math.min(max, value));
};

const getGradientStop = (ratio: number): string => {
  ratio = clamp(ratio, 0, 1);

  const c0 = (LEFT_COLOR as string)
    .match(/.{1,2}/g)
    ?.map((oct) => parseInt(oct, 16) * (1 - ratio)) || [0, 0, 0];

  const c1 = (RIGHT_COLOR as string)
    .match(/.{1,2}/g)
    ?.map((oct) => parseInt(oct, 16) * ratio) || [0, 0, 0];
  const ci = [0, 1, 2].map((i) => Math.min(Math.round(c0[i] + c1[i]), 255));
  const color = ci
    .reduce((a, v) => (a << 8) + v, 0)
    .toString(16)
    .padStart(6, "0");

  return `#${color}`;
};

const calculateColor = (x: number): string => {
  const maxDiff = MAX_RADIUS * 2;
  const distance = x + MAX_RADIUS;

  const ratio = distance / maxDiff;

  const stop = getGradientStop(ratio);
  return stop;
};

const randomFromInterval = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const pointsInner = Array.from(
  { length: NUM_POINTS },
  (v, k) => k + 1
).map((num) => {
  const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS);
  const randomAngle = Math.random() * Math.PI * 2;

  const x = Math.cos(randomAngle) * randomRadius;
  const y = Math.sin(randomAngle) * randomRadius;
  const z = randomFromInterval(-DEPTH, DEPTH);

  const color = calculateColor(x);

  return {
    idx: num,
    position: [x, y, z],
    color,
  };
});

export const pointsOuter = Array.from(
  { length: NUM_POINTS / 4 },
  (v, k) => k + 1
).map((num) => {
  const randomRadius = randomFromInterval(MIN_RADIUS / 2, MAX_RADIUS * 2);
  const angle = Math.random() * Math.PI * 2;

  const x = Math.cos(angle) * randomRadius;
  const y = Math.sin(angle) * randomRadius;
  const z = randomFromInterval(-DEPTH * 10, DEPTH * 10);

  const color = calculateColor(x);

  return {
    idx: num,
    position: [x, y, z],
    color,
  };
});
