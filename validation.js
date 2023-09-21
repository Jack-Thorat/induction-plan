// validation.js

// Predefined email and password
const predefinedEmail = "Jack@gmail.com";
const predefinedPassword = "password123";

// Function to handle form submission
function handleSubmit() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  const email = emailInput.value;
  const password = passwordInput.value;

  // Clear any previous error messages
  emailError.textContent = "";
  passwordError.textContent = "";

  let hasError = false; // Flag to track if there are errors

  // Check if the email is empty
  if (email.trim() === "") {
    emailError.textContent = "Please enter email to proceed";
    hasError = true; // Set the flag to true
  } else if (email !== predefinedEmail) {
    emailError.textContent = "Invalid email";
    hasError = true; // Set the flag to true
  }

  // Check if the password is empty
  if (password.trim() === "") {
    passwordError.textContent = "Please enter password to proceed";
    hasError = true; // Set the flag to true
  } else if (password !== predefinedPassword) {
    passwordError.textContent = "Incorrect password";
    hasError = true; // Set the flag to true
  }

  // If there are errors, return without showing the success message
  if (hasError) {                        
    return;
  }

  // If both email and password are correct, display success message
  alert("Login successful!");
  window.location.href = "welcome.html";
}

// Add an event listener to the form submit button
document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.querySelector(".login-button");
  loginButton.addEventListener("click", handleSubmit);
});
