const registrations = await navigator.serviceWorker?.getRegistrations?.() ?? [];
await Promise.all(registrations.map((registration) => registration.unregister()));

if ("caches" in globalThis) {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames
      .filter((cacheName) => cacheName.startsWith("vocbay-"))
      .map((cacheName) => caches.delete(cacheName)),
  );
}

location.replace(`/?recovered=${Date.now()}`);
