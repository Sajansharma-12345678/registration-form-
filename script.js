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
