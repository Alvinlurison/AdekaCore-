// =====================================================
// FIREBASE CONFIGURATION - AdekaCore
// =====================================================

const firebaseConfig = {
  apiKey: "AIzaSyBmsSCbPmXCk4nPZAXKfZVZrjEn9x_cwGA",
  authDomain: "adecomm-hub.firebaseapp.com",
  projectId: "adecomm-hub",
  storageBucket: "adecomm-hub.firebasestorage.app",
  messagingSenderId: "771891537050",
  appId: "1:771891537050:web:fed4f72bb2c1d85485ab23"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
