import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyD9i0g6zb1X-CTpE31nS43WWhxjwU7KLkQ",
    authDomain: "hackathon-restaurant-app.firebaseapp.com",
    projectId: "hackathon-restaurant-app",
    storageBucket: "hackathon-restaurant-app.appspot.com",
    messagingSenderId: "1021277537943",
    appId: "1:1021277537943:web:321f2ad7dfb5881e180bd2",
    measurementId: "G-53EC5GNF3D"
  };
 
 let Firebase = firebase.initializeApp(firebaseConfig);

 export default Firebase