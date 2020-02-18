import firebase from 'firebase/app'
import 'firesbase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCb5CmcypRqG5UAseZkkd3EZdiSnAHcjg0",
    authDomain: "fostertocode2.firebaseapp.com",
    databaseURL: "https://fostertocode2.firebaseio.com",
    projectId: "fostertocode2",
    storageBucket: "fostertocode2.appspot.com",
    messagingSenderId: "60787251419",
    appId: "1:60787251419:web:ae500a864eea06b04614fe",
    measurementId: "G-GH6KQ1RD58"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;