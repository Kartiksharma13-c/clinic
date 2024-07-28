const firebaseConfig = {
    apiKey: "AIzaSyAjjhUprp1smV3cysFPu8faHfRPbkzUYh4",
    authDomain: "new1-670c8.firebaseapp.com",
    databaseURL: "https://new1-670c8-default-rtdb.firebaseio.com/",
    projectId: "new1-670c8",
    storageBucket: "new1-670c8.appspot.com",
    messagingSenderId: "558226138912",
    appId: "1:558226138912:web:361d8502bc7c7c44eb9945"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("loginForm").addEventListener("submit", loginUser);

function loginUser(e) {
    e.preventDefault();

    var emailid = getElementVal("emailid");
    var password = getElementVal("password");

    checkUser(emailid, password);
}

const checkUser = (emailid, password) => {
    contactFormDB.orderByChild('emailid').equalTo(emailid).once('value', snapshot => {
        if (snapshot.exists()) {
            snapshot.forEach(childSnapshot => {
                const userData = childSnapshot.val();
                if (userData.password === password) {
                    // Login successful
                    document.querySelector(".alert").innerText = "Login successful";
                    document.querySelector(".alert").style.display = "block";
                    setTimeout(() => {
                        document.querySelector(".alert").style.display = "none";
                        window.location.href = "main.html"; // Redirect to main.html
                    }, 3000);
                } else {
                    // Password incorrect
                    document.querySelector(".alert").innerText = "Incorrect password";
                    document.querySelector(".alert").style.display = "block";
                    setTimeout(() => {
                        document.querySelector(".alert").style.display = "none";
                    }, 3000);
                }
            });
        } else {
            // Email not found
            document.querySelector(".alert").innerText = "Email not found";
            document.querySelector(".alert").style.display = "block";
            setTimeout(() => {
                document.querySelector(".alert").style.display = "none";
            }, 3000);
        }
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
