/**
 * Lugoba Miracle Center Church — Configuration
 * Replace every YOUR_* value with your real credentials.
 *
 * Cloudinary: create an unsigned upload preset that allows both
 * images and videos (Settings → Upload → Upload presets).
 */
window.LMCC_CONFIG = {
  firebase: {
     apiKey: "AIzaSyCcspF5aUBaA4JFNFKhROVGssw7UdMyo14",
  authDomain: "lugoba-19106.firebaseapp.com",
  projectId: "lugoba-19106",
  storageBucket: "lugoba-19106.firebasestorage.app",
  messagingSenderId: "557880643763",
  appId: "1:557880643763:web:1edf41f5b18d97685ae0c6",
  measurementId: "G-Q6CYQJEPK1"
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
