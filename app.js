  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAsPKL2YmBMcxvn6IIOD9VDMV6JAmEGcJI",
    authDomain: "project1-ff202.firebaseapp.com",
    projectId: "project1-ff202",
    storageBucket: "project1-ff202.appspot.com",
    messagingSenderId: "865418743182",
    appId: "1:865418743182:web:8e31c6916124641c6268df",
    measurementId: "G-L5WVGP415S"
  };

  document.addEventListener("DOMContentLoaded", function() {
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    });

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const analytics = getAnalytics(app);

  //Getting 
  var username = document.getElementById("username");
  var email = document.getElementById("Email");
  var password = document.getElementById("password");

  //making on function for starting data
  window.signup = function(e){
    e.preventDefault();
    var obj = {
        username: username.value,
        email: email.value,
        password: password.value,
    }
    createUserWithEmailAndPassword(auth, obj.email,obj.password)
    .then(function(Success){
        alert("Signup Successfully")
    })
    .catch(function(error){
        alert("error"+ error.message)
    })
    console.log(obj)
  };

