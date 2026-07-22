import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-static-section-indexes',
      configureServer(server) {
        server.middlewares.use((request, _response, next) => {
          if (request.url === '/formacion/' || request.url === '/formacion') {
            request.url = '/formacion/index.html';
          } else if (request.url === '/aplicaciones/' || request.url === '/aplicaciones') {
            request.url = '/aplicaciones/index.html';
          }
          next();
        });
      },
    },
  ],
  server: {
    host: '127.0.0.1',
    port: 4173,
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
  },
});
