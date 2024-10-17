
index.html file


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Registration Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Register Now</h2>
        <!-- Registration Form -->
        <form id="registrationForm">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required>

            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required>

            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required>

            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Confirm your password" required>

            <!-- Submit Button -->
            <button type="submit">Submit</button>
        </form>

        <!-- Error Message Display -->
        <p id="errorMessage"></p>
    </div>

    <!-- Success Popup Modal -->
    <div id="popup" class="popup">
        <div class="popup-content">
            <span id="closePopup" class="close">&times;</span>
            <p>Your application has been successfully submitted!</p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>

CSS CODE SAVE AS STYLE.CSS

/* Reset and Basic Styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial, sans-serif;
    background-color: #f0f8ff;
}

.container {
    width: 90%;
    max-width: 400px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Header Styles */
h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
    font-size: 1.8em;
    color: #4CAF50;
}

/* Form Label and Input Styles */
label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
    color: #333;
}

input[type="text"],
input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
}

/* Button Styles */
button {
    width: 100%;
    padding: 12px;
    background-color: #4CAF50;
    color: #fff;
    font-size: 1.1em;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #45a049;
}

/* Error Message Styles */
#errorMessage {
    color: red;
    text-align: center;
    margin-top: 10px;
    font-weight: bold;
}

/* Popup Modal Styles */
.popup {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
}

.popup-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 80%;
    max-width: 300px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.popup-content p {
    font-size: 1.2em;
    color: #4CAF50;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5em;
    cursor: pointer;
}



JAVASCRIPT 


    document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("errorMessage");

    // Clear any previous error messages
    errorMessage.textContent = "";

    // Password matching validation
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return;
    }

    // If all validations pass, show the success popup
    showPopup();

    // Reset the form after successful submission
    document.getElementById("registrationForm").reset();
});

// Function to display popup message
function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "flex";

    // Close popup when close button is clicked
    document.getElementById("closePopup").onclick = function() {
        popup.style.display = "none";
    };

    // Close popup if clicking outside the popup content
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    };
}

