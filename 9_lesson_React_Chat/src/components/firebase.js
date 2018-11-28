import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAqiGbBbiz9l0XKIQeTw1qlVonK8rmS3hU",
    authDomain: "altarixchat.firebaseapp.com",
    databaseURL: "https://altarixchat.firebaseio.com",
    projectId: "altarixchat",
    storageBucket: "altarixchat.appspot.com",
    messagingSenderId: "707928431356",
};

firebase.initializeApp(config);

const db = firebase.database();

export { db };