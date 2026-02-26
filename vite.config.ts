import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	base: "/gh-pages-sample-web-page/",
	plugins: [react()],
});
