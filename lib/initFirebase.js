import { initializeApp, getApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAlNcuzjG0tVfPWFcDPP293GEv6LEVse1E",
  authDomain: "test2-fd6d9.firebaseapp.com",
  databaseURL: "https://test2-fd6d9-default-rtdb.firebaseio.com",
  projectId: "test2-fd6d9",
  storageBucket: "test2-fd6d9.appspot.com",
  messagingSenderId: "419591498174",
  appId: "1:419591498174:web:ea15aeb1c3f3c71de8b1ef"
}

let app

try {
  app = getApp()
} catch (err) {
  app = initializeApp(firebaseConfig)
}

export default app