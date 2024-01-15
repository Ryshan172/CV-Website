// Import from Fireabase sdk
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAtWKJhSETEhPXPkOMXuhpqthnXxB4_81c",
    authDomain: "cv-website-48baa.firebaseapp.com",
    projectId: "cv-website-48baa",
    storageBucket: "cv-website-48baa.appspot.com",
    messagingSenderId: "868736333428",
    appId: "1:868736333428:web:20a52608554e37868d8321",
    measurementId: "G-VHDGLCVYF1"
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

export {}