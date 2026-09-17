
import { defineConfig } from "vite";

export default defineConfig({
    base: "/uibuilderdoc/",
    server: {
        watch: {
            usePolling: true
        }
    },
    build: {
        outDir: "dist",
        emptyOutDir: true
    }
});