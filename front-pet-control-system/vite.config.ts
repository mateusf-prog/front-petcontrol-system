import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/front-petcontrol-system/', // <-- coloque o nome exato do seu repositório aqui, com as barras
  plugins: [react()],
})
