import typescript from "rollup-plugin-typescript2";

export default {
  input: "./src/Component.ts",
  output: {
    file: "dist/grid-component.js",
    format: "esm"
  },
  plugins: [typescript()]
};
