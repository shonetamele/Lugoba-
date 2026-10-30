/**
 * Lugoba Miracle Center Church — Configuration
 * Replace every YOUR_* value with your real credentials.
 *
 * Cloudinary: create an unsigned upload preset that allows both
 * images and videos (Settings → Upload → Upload presets).
 */
window.LMCC_CONFIG = {
  firebase: {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  },
  cloudinary: {
    cloudName: "YOUR_CLOUDINARY_CLOUD_NAME",
    uploadPreset: "YOUR_UNSIGNED_UPLOAD_PRESET",
    folder: "lugoba-miracle-center"
  },
  adminEmails: [
    "mcclfoundation@gmail.com"
  ],
  whatsappNumber: "256704476063",
  // Miracle Center Church Lugoba — auto live when this channel goes live on YouTube
  youtubeChannelId: "UCnBi7R15W7GB7E8Zc2SsrKg"
};
