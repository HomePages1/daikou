// Firebase 設定
const firebaseConfig = {
  apiKey: "AIzaSyCjSVYiBJODK81YokKhSGncGBC0fUYJqRY",
  authDomain: "daikou-ffff4.firebaseapp.com",
  projectId: "daikou-ffff4",
  storageBucket: "daikou-ffff4.appspot.com",
  messagingSenderId: "35029479664",
  appId: "1:35029479664:web:a36efa3aa1650a1de4d235",
  measurementId: "G-RKGZ9N056B"
};

// 初期化
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
