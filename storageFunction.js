// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtWKJhSETEhPXPkOMXuhpqthnXxB4_81c",
    authDomain: "cv-website-48baa.firebaseapp.com",
    databaseURL: "https://cv-website-48baa-default-rtdb.firebaseio.com",
    projectId: "cv-website-48baa",
    storageBucket: "cv-website-48baa.appspot.com",
    messagingSenderId: "868736333428",
    appId: "1:868736333428:web:20a52608554e37868d8321",
    measurementId: "G-VHDGLCVYF1"
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

  // Email validation regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email is valid
  if (!emailRegex.test(contactEmail)) {
      alert('Please enter a valid email address');
      // Stop if it not valid 
      return; 
  }

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
      // Show that an error has occurred
      console.error('Error saving contact form data', error);
      alert('Your message was not sent');
  });
}




// Attach handling function to submit 
document.getElementById('contact_me').addEventListener('submit', handleContactForm);

//Export script functionality
export {webApp, firabaseAnalytics, handleContactForm};
