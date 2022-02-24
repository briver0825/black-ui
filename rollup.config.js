import vue from "rollup-plugin-vue"
import resolve from "@rollup/plugin-node-resolve"

export default {
  input: "packages/black-ui/index.ts",
  output: [
    {
      format: "cjs",
      exports: "auto",
      file: "lib/black-ui.cjs.js",
    },
    {
      format: "es",
      file: "lib/black-ui.esm.js",
    },
  ],
  plugins: [vue(), resolve()],
}
