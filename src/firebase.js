import firebase from 'firebase'

const firebaseConfig = {
  
    apiKey: "AIzaSyBLeFQRUAfK_6ZSZL-nJe0JtPauNtV3LQM",
    authDomain: "facebook-89.firebaseapp.com",
    projectId: "facebook-89",
    storageBucket: "facebook-89.appspot.com",
    messagingSenderId: "255858932704",
    appId: "1:255858932704:web:f78a038bf367d60d3a8985",
    measurementId: "G-DC8P3YYEWH"
 
 
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db