import type { ColorCode } from "src/common/types";

const white: ColorCode = "#FFFFFF";
const creamYellow: ColorCode = "#F8F6E3";
const mintGreen: ColorCode = "#97E7E1";
const skyBlue: ColorCode = "#6AD4DD";
const blueViolet: ColorCode = "#7AA2E3";
const black: ColorCode = "#292929";
const red: ColorCode = "#ea3943";
const yellow: ColorCode = "#FFD700";
//
const up = red;
const down = blueViolet;

const color = {
  white,
  black,
  creamYellow,
  mintGreen,
  skyBlue,
  blueViolet,
  up,
  down,
  yellow,
} as const;

export const THEME = {
  color,
  fs: {
    xxl: "2.5rem",
    xl: "2rem",
    l: "1.5rem",
    m: "1rem",
    s: "0.875rem",
    xs: "0.75rem",
  },
  fw: {
    s: "400",
    m: "500",
    b: "700",
  },
} as const;

const BREAK_POINTS = {
  tablet: 1200,
  pad: 768,
  mobile: 360,
} as const;

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;
export const mq = (Object.keys(BREAK_POINTS) as Array<keyof typeof BREAK_POINTS>).reduce(
  (acc, cur) => {
    acc[cur] = customMediaQuery(BREAK_POINTS[cur]);
    return acc;
  },
  {} as Record<keyof typeof BREAK_POINTS, string>,
);
