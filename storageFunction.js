// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1jZUOQDcL6A8Dq8mQnmZoOFSmPv3o29o",
    authDomain: "cv-website-project.firebaseapp.com",
    projectId: "cv-website-project",
    storageBucket: "cv-website-project.appspot.com",
    messagingSenderId: "328803555280",
    appId: "1:328803555280:web:d6e1f56cfc563b1dd68bd5",
    measurementId: "G-P4HV2PTTSG"
};

// Initialise firebase functions
const webApp = initializeApp(firebaseConfig);
const firabaseAnalytics = getAnalytics(webApp);

// Handling the form submission
function handleContactForm(event) {
    event.preventDefault();

    // Get input values 
    const contactName = document.getElementById('name').value;
    const contactEmail = document.getElementById('email').value;
    const formMessage = document.getElementById('message').value;

    // Storing the data in the realtime database
    const fireDatabase = getDatabase();
    const storageReference = ref(fireDatabase, 'contact-submissions');

    push(storageReference, {
        contactName,
        contactEmail,
        formMessage,
    })
    .then(() => {
        // Give notification
        alert('Your message has been sent successfully');
    })
    .catch((error) => {
        // Show that an error has occured
        console.error('Error saving contact form data', error);
        alert('Your message was not sent')
    });

}


// Attach handling function to submit 
document.getElementById('contact_me').addEventListener('submit', handleContactForm);

//Export script functionality
export {webApp, firabaseAnalytics, handleContactForm};
