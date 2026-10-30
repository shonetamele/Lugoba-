/**
 * Lugoba Miracle Center Church — Configuration
 * Replace every YOUR_* value with your real credentials.
 *
 * Cloudinary: create an unsigned upload preset that allows both
 * images and videos (Settings → Upload → Upload presets).
 */
window.LMCC_CONFIG = {
  firebase: {
      apiKey: "AIzaSyDun0D4bAGg_gxOgz4rZ4cACJkY9jX76wE",
  authDomain: "pearl-dreams-safaris-42fe8.firebaseapp.com",
  databaseURL: "https://pearl-dreams-safaris-42fe8-default-rtdb.firebaseio.com",
  projectId: "pearl-dreams-safaris-42fe8",
  storageBucket: "pearl-dreams-safaris-42fe8.firebasestorage.app",
  messagingSenderId: "23903308074",
  appId: "1:23903308074:web:b89a9fd41e949320e93653",
  measurementId: "G-SG2LXJQPY8"
  },
  cloudinary: {
    cloudName: "r7eut0eh",
    uploadPreset: "lugoba_gallery",
    folder: "lugoba-miracle-center"
  },
  adminEmails: [
    "mcclfoundation@gmail.com"
  ],
  whatsappNumber: "256704476063",
  // Miracle Center Church Lugoba — auto live when this channel goes live on YouTube
  youtubeChannelId: "UCnBi7R15W7GB7E8Zc2SsrKg"
};
