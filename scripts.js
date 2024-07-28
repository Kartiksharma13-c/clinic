// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjjhUprp1smV3cysFPu8faHfRPbkzUYh4",
    authDomain: "new1-670c8.firebaseapp.com",
    projectId: "new1-670c8",
    storageBucket: "new1-670c8.appspot.com",
    messagingSenderId: "558226138912",
    appId: "1:558226138912:web:361d8502bc7c7c44eb9945"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Login Form Submission
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('User logged in:', userCredential.user);
            // Redirect to the appropriate dashboard
        })
        .catch((error) => {
            console.error('Error logging in:', error);
        });
});

// Sign Up Form Submission
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('User signed up:', userCredential.user);
            // Store additional user info in Firestore
            return db.collection('users').doc(userCredential.user.uid).set({
                name: name,
                email: email
            });
        })
        .then(() => {
            console.log('User information saved to Firestore');
            // Redirect to the appropriate dashboard
        })
        .catch((error) => {
            console.error('Error signing up:', error);
        });
});
