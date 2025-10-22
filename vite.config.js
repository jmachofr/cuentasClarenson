import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      // Enable JSX transform in .js files explicitly
      include: "**/*.{js,jsx,ts,tsx}",
    }),
  ],
  resolve: {
    // Optional: allows importing .js files without specifying extension
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
});
