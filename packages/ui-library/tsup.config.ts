import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: {
    // dts 옵션을 객체로 변경
    entry: "./src/index.ts",
    compilerOptions: {
      incremental: false, // incremental 옵션 비활성화
    },
  },
  clean: true,
  external: ["react", "react-dom"],
  sourcemap: true,
});
