import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    return defineConfig({
        plugins: [react()],
        base: env.VITE_ROUTER_BASE_URL || "/Gemini-Clone/",
        define: {
            "process.env": env,
        },
    });
};
