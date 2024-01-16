// Import firebase Functions
// Import the necessary functions from the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
// for authorisation
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

// Initialise firebase
const webApp = initializeApp(firebaseConfig);

// Reference Firebase Auth
const auth = getAuth(webApp);

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
    if (!user) {
        console.log("User not signed in");
        // Redirect to login page
        window.location.href = "login.html";
    }
});

// Reference contact-submissions data
const fireDatabase = getDatabase(webApp);
const submissionsRef = ref(fireDatabase, "contact-submissions");

// Function to delete an entry
function deleteEntry(key) {
    // Remove the entry from the database using its key
    remove(ref(submissionsRef, key))
        .then(() => {
            console.log("Entry deleted successfully");
        })
        .catch((error) => {
            console.error("Error deleting entry:", error);
        });
}


// Retrieve and display data 
function showContactFormData(snapshot) {

    // connecting to html for display
    const submissionsList = document.getElementById("submissionsList");
    // Clear previous data because it refreshes 
    submissionsList.innerHTML = "";

    // Loop through retrieved data and check for values 
    // Then append the values to the list items 
    snapshot.forEach((childSnapshot) => {
        const submissionData = childSnapshot.val();
        const listItem = document.createElement("li");

        
        // Display name and email above the message
        const fromInfo = document.createElement("p");
        fromInfo.textContent = `From: ${submissionData.contactName}, ${submissionData.contactEmail}`;
        listItem.appendChild(fromInfo);

        // Display the message
        const messageInfo = document.createElement("p");
        messageInfo.textContent = `Message: ${submissionData.formMessage}`;
        listItem.appendChild(messageInfo);

        /**
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        //deleteButton.addEventListener("click", ()=> deleteEntry(childSnapshot.key));
        deleteButton.addEventListener("click", () => deleteEntry(childSnapshot.key));

        // Append items to list 
        listItem.appendChild(deleteButton);
        
        */
        submissionsList.append(listItem);
    });

}


// Using a Listener for changes in the 'contact-submissions' data
onValue(submissionsRef, showContactFormData, {
    // Make sure that data is only fetched once, not continuously
    onlyOnce : true
});

// Logout button functionality
const logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            console.log('User signed out successfully');
            // Redirect to home page
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.error('Error signing out:', error);
        });
});

export {webApp, showContactFormData};
