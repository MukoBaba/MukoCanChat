importScripts('https://cdn.jsdelivr.net/npm/firebase@8.10.1/firebase-app.js');
importScripts('https://cdn.jsdelivr.net/npm/firebase@8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBAVovHw8u0uigBN4KJ-Bbry6muTcuSSaQ",
  authDomain: "mukocan-chat-5ea03.firebaseapp.com",
  projectId: "mukocan-chat-5ea03",
  storageBucket: "mukocan-chat-5ea03.firebasestorage.app",
  messagingSenderId: "716674607770",
  appId: "1:716674607770:web:e715a7e49c76d10fedcd23"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'MukoCan Chat';
  const body = payload.notification?.body || 'Yeni bir mesajın var!';
  self.registration.showNotification(title, {
    body: body,
    icon: '/icon.png',
    tag: 'mukocan-msg',
    renotify: true,
  });
});
