// Import from Fireabase sdk
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyD1jZUOQDcL6A8Dq8mQnmZoOFSmPv3o29o",
    authDomain: "cv-website-project.firebaseapp.com",
    projectId: "cv-website-project",
    storageBucket: "cv-website-project.appspot.com",
    messagingSenderId: "328803555280",
    appId: "1:328803555280:web:d6e1f56cfc563b1dd68bd5",
    measurementId: "G-P4HV2PTTSG"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handling Admin login form 
document.getElementById("adminLogin").addEventListener("submit", async (event) => {
    
    // Cancels the event if it is cancelable,
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        // Attempt to sign in admin user with password and email
        await signInWithEmailAndPassword(auth, email, password);
        // Redirect when successful
        window.location.href = "viewData.html";

    }
    catch (error) {
        console.error ("Error signing in", error.message);
        alert("Please check credentials and try again");
    }

});

/**
 * Email: admin@mail.com
 * password: gizmo198B
 */

