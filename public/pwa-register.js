if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', {scope: '/'}).catch(() => {
      // La web sigue funcionando aunque el navegador rechace el registro.
    });
  });
}
