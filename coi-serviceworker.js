/* coi-serviceworker v0.1.7 (adapted from gzuidhof/coi-serviceworker, MIT)
 * Enables SharedArrayBuffer on GitHub Pages for tikzjax WebAssembly.
 * Dual-mode: acts as SW when loaded by the browser SW engine, acts as
 * page-side registration script when loaded via <script src="...">.
 *
 * On first visit: registers SW → triggers a single page reload.
 * After reload: SW intercepts fetches and injects COOP+COEP headers →
 *   window.crossOriginIsolated = true → SharedArrayBuffer available.
 */

/* ── SW context ── */
if (typeof window === 'undefined') {
  self.addEventListener('install', () => self.skipWaiting());
  self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

  self.addEventListener('fetch', e => {
    const { request } = e;
    // Skip opaque cache-only requests
    if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') return;
    // Skip no-cors (e.g. CDN <script> tags) — don't mangle opaque responses
    if (request.mode === 'no-cors') return;

    e.respondWith(
      fetch(request, { credentials: 'omit' })
        .then(response => {
          if (response.status === 0) return response;
          const headers = new Headers(response.headers);
          headers.set('Cross-Origin-Opener-Policy', 'same-origin');
          headers.set('Cross-Origin-Embedder-Policy', 'credentialless');
          return new Response(response.body, {
            status:     response.status,
            statusText: response.statusText,
            headers,
          });
        })
        .catch(() => fetch(request))
    );
  });
}

/* ── Page context: register the SW ── */
else {
  (() => {
    if (window.crossOriginIsolated) return; // already isolated — done
    if (!navigator.serviceWorker) {
      console.warn('[coi-sw] Service workers not supported in this browser.');
      return;
    }

    const swSrc = document.currentScript.src;

    navigator.serviceWorker.register(swSrc)
      .then(reg => {
        // If a new SW was installed, reload when it activates
        if (reg.installing) {
          reg.installing.addEventListener('statechange', ({ target: sw }) => {
            if (sw.state === 'activated') {
              console.log('[coi-sw] SW activated → reloading for cross-origin isolation');
              location.reload();
            }
          });
        } else {
          // SW already active from a previous registration — just reload
          console.log('[coi-sw] SW already active → reloading for cross-origin isolation');
          location.reload();
        }
      })
      .catch(err => console.warn('[coi-sw] SW registration failed:', err));
  })();
}
