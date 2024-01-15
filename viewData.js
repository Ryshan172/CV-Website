// Import the necessary functions from the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Your web app's Firebase configuration
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
const webApp = initializeApp(firebaseConfig);

// Reference to the 'contact-submissions' data
const database = getDatabase(webApp);
const submissionsRef = ref(database, 'contact-submissions');

// Function to display retrieved data
function displayContactData(snapshot) {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = ''; // Clear previous data

    // Loop through the retrieved data
    snapshot.forEach((childSnapshot) => {
        const contactData = childSnapshot.val();
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${contactData.contactName}, Email: ${contactData.contactEmail}, Message: ${contactData.formMessage}`;
        contactList.appendChild(listItem);
    });
}

// Attach listener for changes in the 'contact-submissions' data
onValue(submissionsRef, displayContactData, {
    onlyOnce: true // This ensures that the data is fetched only once
});

// Export functions or variables you want to use in other scripts or HTML pages
export { webApp, displayContactData };

// You can also include any other code specific to this script
// ...
