import "@emotion/react";

import { THEME } from "src/utils/constant";

declare module "@emotion/react" {
  export type Theme = typeof THEME;
}

declare module "@emotion/styled" {}
