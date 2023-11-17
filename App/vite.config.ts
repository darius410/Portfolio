import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio/", 
  plugins: [react()],
  
  build: {
    outDir: 'dist', // Specify the output directory for the build
    assetsDir: 'assets', // Specify the assets directory within the output directory
    rollupOptions: {
      input: {
        main: './index.html', // Adjust the entry point as needed
      },
    },
  },
});
