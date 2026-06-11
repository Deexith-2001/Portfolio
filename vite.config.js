import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Matches the GitHub repo name exactly: Deexith-2001/Portfolio
})
