
const firebaseConfig = {
    apiKey: "AIzaSyAjjhUprp1smV3cysFPu8faHfRPbkzUYh4",
    authDomain: "new1-670c8.firebaseapp.com",
    databaseURL: "https://new1-670c8-default-rtdb.firebaseio.com/", // Add this line
    projectId: "new1-670c8",
    storageBucket: "new1-670c8.appspot.com",
    messagingSenderId: "558226138912",
    appId: "1:558226138912:web:361d8502bc7c7c44eb9945"
};

  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      password: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  