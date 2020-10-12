import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDCfMsQU2A7yQN_0jXJaTJTCMviR56d9Io",
    authDomain: "pro-plan-94f0c.firebaseapp.com",
    databaseURL: "https://pro-plan-94f0c.firebaseio.com",
    projectId: "pro-plan-94f0c",
    storageBucket: "pro-plan-94f0c.appspot.com",
    messagingSenderId: "113121918416",
    appId: "1:113121918416:web:4166e804835dc49df04dd5",
    measurementId: "G-BGT98X9HN5"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
