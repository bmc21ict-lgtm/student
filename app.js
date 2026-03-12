// app.js

// Initialize Firebase
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to upload a file
function uploadFile(file) {
    var storageRef = firebase.storage().ref();
    var fileRef = storageRef.child(file.name);
    fileRef.put(file).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
    }).catch(function(error) {
        console.error('Upload failed:', error);
    });
}

// Function to manage activities
function manageActivity(activity) {
    // Logic to add, update or delete activities
    console.log('Managing activity:', activity);
}

// Example usage:
// uploadFile(selectedFile);
// manageActivity({ action: 'add', name: 'New Activity' });
