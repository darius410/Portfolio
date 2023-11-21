import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/App", 
  plugins: [react()],
  
  build: {
    outDir: 'dist', // Specify the output directory for the build
    rollupOptions: {
      input: {
        main: './index.html', // Adjust the entry point as needed
      },
    },
  },
});
