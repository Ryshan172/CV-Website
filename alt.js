// firebaseScript.js

// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtWKJhSETEhPXPkOMXuhpqthnXxB4_81c",
    authDomain: "cv-website-48baa.firebaseapp.com",
    projectId: "cv-website-48baa",
    storageBucket: "cv-website-48baa.appspot.com",
    messagingSenderId: "868736333428",
    appId: "1:868736333428:web:20a52608554e37868d8321",
    measurementId: "G-VHDGLCVYF1"
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Store data in Firebase Realtime Database
  const database = getDatabase();
  const entriesRef = ref(database, 'contact_entries');

  push(entriesRef, {
    name,
    email,
    message,
  })
  .then(() => {
    alert('Data saved successfully');
    // Optionally, you can redirect or perform additional actions
  })
  .catch((error) => {
    console.error('Error saving data to Firebase:', error);
    alert('Error saving data to Firebase');
  });
}

// Attach the form submission handler to the form
document.getElementById('contactForm').addEventListener('submit', handleFormSubmission);

// Export any additional functionality you might need
export { app, analytics, handleFormSubmission };
