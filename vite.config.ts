import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
const __dirname = path.resolve();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
