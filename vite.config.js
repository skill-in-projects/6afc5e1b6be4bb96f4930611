import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/6afc5e1b6be4bb96f4930611/',
  // Bundled when the dev server starts, so the first page the agent adds (HashRouter) does not make Vite re-bundle
  // mid-session, which left the Preview white until a manual reload.
  optimizeDeps: { include: ['react-router-dom'] },
})
