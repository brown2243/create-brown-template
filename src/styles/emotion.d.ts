import "@emotion/react";

import { COLORS } from "src/utils/constant";

type Colors = typeof COLORS;
declare module "@emotion/react" {
  export interface Theme {
    color: Colors;
    fs: {
      xxl: "2.5rem";
      xl: "2rem";
      l: "1.5rem";
      m: "1rem";
      s: "0.875rem";
      xs: "0.75rem";
    };
    fw: {
      s: "400";
      m: "500";
      b: "700";
    };
  }
}
declare module "@emotion/styled" {}
