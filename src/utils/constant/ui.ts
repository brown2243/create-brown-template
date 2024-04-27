import { ColorCode } from "src/utils/types";

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
export const COLORS = {
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

const BREAK_POINTS = {
  tablet: 1200,
  mobile: 768,
} as const;

const customMediaQuery = (minWidth: number): string => `@media (min-width: ${minWidth}px)`;
export const mq = (Object.keys(BREAK_POINTS) as Array<keyof typeof BREAK_POINTS>).reduce(
  (acc, cur) => {
    acc[cur] = customMediaQuery(BREAK_POINTS[cur]);
    return acc;
  },
  {} as Record<keyof typeof BREAK_POINTS, string>,
);
