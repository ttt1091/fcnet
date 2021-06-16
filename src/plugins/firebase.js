import firebase from "firebase/app"
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAWKwZqjuJedIJzxEKARIWc334Yo1xxd6k",
    authDomain: "fc-net.firebaseapp.com",
    databaseURL: "https://fc-net.firebaseio.com",
    projectId: "fc-net",
    storageBucket: "fc-net.appspot.com",
    messagingSenderId: "2913163632",
    appId: "1:2913163632:web:94dc655d4340c933f5d7b5",
    measurementId: "G-7ML2WH6LTM"
  })
}

export default firebase
