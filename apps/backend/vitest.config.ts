// vitest.config.ts
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        coverage: {
            provider: "v8", // or 'v8'
            exclude: ["**/node_modules/**", "**/dist/**", "**/.docker/**", "./src/index"],
        },
        exclude: ["**/node_modules/**", "**/dist/**", "**/.docker/**"],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
