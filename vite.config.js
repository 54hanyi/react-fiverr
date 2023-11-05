// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   base: import.meta.env.VITE_BASE_URL,
//   plugins: [react()],
// });

// console.log('Base URL:', import.meta.env.VITE_BASE_URL);


/* global process */

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.VITE_BASE_URL || '/',
    plugins: [react()],
  };
});


