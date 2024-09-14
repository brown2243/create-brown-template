import "@emotion/react";

import { THEME } from "src/common/constant";

declare module "@emotion/react" {
  export type Theme = typeof THEME;
}

declare module "@emotion/styled" {}
