import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { fileURLToPath } from 'url';

export default {
  plugins: [react(), ssr({ includeAssetsImportedByServer: true, prerender: true })],
  resolve: {
    alias: {
      '@root': fileURLToPath(new URL('./', import.meta.url)),
      '@renderer': fileURLToPath(new URL('./renderer', import.meta.url)),
      '@components': fileURLToPath(new URL('./renderer/components', import.meta.url)),
      '@assets': fileURLToPath(new URL('./renderer/components/assets', import.meta.url))
    }
  }
}
