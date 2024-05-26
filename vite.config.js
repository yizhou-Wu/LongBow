import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['styled-jsx/babel']
      }
    })
  ],
  define: {'process.env': process.env,
  'process.env.PUBLIC_URL': JSON.stringify('./public')}
})
