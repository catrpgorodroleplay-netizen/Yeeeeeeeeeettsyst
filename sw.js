self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : { title: 'Уведомление' };
    
    const options = {
        body: data.body || 'ТЕСТ ПУШ УВЕДОМЛЕНИЙ',
        icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"%3E%3Cpath d="M12 2C8.13 2 5 5.13 5 9v4c0 .78.16 1.53.46 2.22L4.2 17.2c-.37.74.07 1.6.86 1.8.26.07.54.1.82.1h12.24c.28 0 .56-.03.82-.1.79-.2 1.23-1.06.86-1.8l-1.26-2.98c.3-.69.46-1.44.46-2.22V9c0-3.87-3.13-7-7-7zM9 20c0 .55.45 1 1 1h4c.55 0 1-.45 1-1h-6z"/%3E%3C/svg%3E',
        badge: '/badge.png',
        vibrate: [200, 100, 200],
        silent: false
    };

    event.waitUntil(
        self.registration.showNotification(data.title || 'ТЕСТ ПУШ УВЕДОМЛЕНИЙ', options)
    );
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(clients.openWindow('/'));
});
