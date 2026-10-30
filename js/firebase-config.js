/**
 * Lugoba Miracle Center Church — Configuration
 * Replace every YOUR_* value with your real credentials.
 *
 * Cloudinary: create an unsigned upload preset that allows both
 * images and videos (Settings → Upload → Upload presets).
 */
window.LMCC_CONFIG = {
  firebase: {
      apiKey: "AIzaSyAkUO02xkxGUUvgt2-C2UNRB_K6v3pBgiQ",
  authDomain: "brendava-tours-and-travel.firebaseapp.com",
  databaseURL: "https://brendava-tours-and-travel-default-rtdb.firebaseio.com",
  projectId: "brendava-tours-and-travel",
  storageBucket: "brendava-tours-and-travel.firebasestorage.app",
  messagingSenderId: "732703885570",
  appId: "1:732703885570:web:3011a3989d5fe36eb69a1b",
  measurementId: "G-ZC356HMW9C"
  },
  cloudinary: {
    cloudName: "YOUR_CLOUDINARY_CLOUD_NAME",
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
