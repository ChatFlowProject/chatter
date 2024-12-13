import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: "@/", replacement: path.resolve(__dirname, "./src/") },
            { find: "@api/", replacement: path.resolve(__dirname, "./src/api") },
            { find: "@assets/", replacement: path.resolve(__dirname, "./src/assets") },
            { find: "@components/", replacement: path.resolve(__dirname, "./src/components") },
            { find: "@hooks/", replacement: path.resolve(__dirname, "./src/hooks") },
            { find: "@store/", replacement: path.resolve(__dirname, "./src/store") },
            { find: "@types/", replacement: path.resolve(__dirname, "./src/types") },
            { find: "@utils/", replacement: path.resolve(__dirname, "./src/utils") },
        ],
    },
});
