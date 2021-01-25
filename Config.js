import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBJ_Lyp2li07lhAx8qzolZcJHXJJ2_0wi4",
    authDomain: "newsletterapp-32c30.firebaseapp.com",
    databaseURL: "https://newsletterapp-32c30-default-rtdb.firebaseio.com",
    projectId: "newsletterapp-32c30",
    storageBucket: "newsletterapp-32c30.appspot.com",
    messagingSenderId: "47005588430",
    appId: "1:47005588430:web:e71301fe888de4ad58699f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();