import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: {
        entry: "src/index.ts",
    },
    sourcemap: true,
    clean: true,
    splitting: false,
    target: "es2020",
    outDir: "dist",
    external: ["react", "react-dom"],
    tsconfig: "../../tsconfig.build.json",
    outExtension({ format }) {
        return {
            js: format === "cjs" ? ".cjs" : ".js",
        };
    },
});
