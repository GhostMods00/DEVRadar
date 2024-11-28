import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  envDir: '.',  // Look for .env in root directory
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  }
});