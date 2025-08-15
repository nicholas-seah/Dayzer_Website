export default defineConfig({
  site: 'https://gridstordayzer.netlify.app',
  integrations: [react(), tailwind()],
  output: 'server',
  adapter: netlify(),
  vite: {
    build: {
      rollupOptions: {
        external: ['@prisma/client']
      }
    }
  },
  // Add this to handle proxying
  experimental: {
    assets: true
  }
});