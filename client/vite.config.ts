import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite"
import mkcert from "vite-plugin-mkcert";
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  server : {
    port: 3000
  },
  plugins: [
    tailwindcss(),
    mkcert(),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
