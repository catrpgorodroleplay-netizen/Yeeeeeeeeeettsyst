const webpush = require('web-push');

webpush.setVapidDetails(
    'mailto:your@email.com',
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
);

// Для теста — отправляем на конкретную подписку
// В реальности нужно хранить подписки в Issues или Secrets
async function sendTest() {
    // Здесь будет код отправки
    console.log('Готов к отправке уведомлений');
}

sendTest();
