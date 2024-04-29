import path from "node:path";
import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["src/index"],
  clean: true,
  rollup: {
    inlineDependencies: true,
    esbuild: {
      target: "node18",
      minify: true,
    },
  },
  alias: {
    prompts: "prompts/lib/index.js",
    src: path.resolve(__dirname, "./src"),
  },
});
