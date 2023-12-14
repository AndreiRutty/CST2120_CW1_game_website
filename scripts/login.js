// Input Fields
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

// Error Message Header
var emailErrorMsg = document.getElementById("email-error-message");
var passwordErrorMsg = document.getElementById("password-error-message");

// Button
var logInButton = document.getElementById("log-in-button");

// Function to check the validity of the email
const validateEmail = (email) => {
  const atSign = /@/;
  var valid = true;

  // Checking if user has input an email
  if (email) {
    // Checking if the email contains '@'
    if (!atSign.test(email)) {
      emailErrorMsg.innerHTML = "Invalid Email!. Please include '@'";
      emailErrorMsg.style.color = "#b42b2b";
      valid = false;
    } else {
      emailErrorMsg.innerHTML = "Valid Email";
      emailErrorMsg.style.color = "green";
    }
  } else {
    emailErrorMsg.innerHTML = "Email cannot be left empty!";
    emailErrorMsg.style.color = "#b42b2b";
    valid = false;
  }

  return valid;
};

// Function to check the validity of the password
const validatePassword = (password) => {
  var valid = true;

  if (!password) {
    passwordErrorMsg.innerHTML = "Password cannot be left empty!";
    passwordErrorMsg.style.color = "#b42b2b";
    valid = false;
  }

  return valid;
};

// Function to perform log in checks like user already exist or user is already logged in
const logInCheck = (email, password) => {
  var valid = false;
  var i = 0;

  // Iterating through local storage
  while (!valid && i < localStorage.length) {
    // Getting the keys
    var userKey = localStorage.key(i);

    if (userKey != "debug" && userKey != "loglevel") {
      // Converting from JSON to objects
      var user = JSON.parse(localStorage.getItem(userKey));

      // Checking if there is a user with the specified email and password
      if (user.email == email) {
        if (user.password == password) {
          // Checking if a user is already log in
          if (user.isLogIn) {
            alert("A user is already Logged In!");
            emailErrorMsg.innerHTML = "A user is already Logged In!";
            emailErrorMsg.style.color = "#b42b2b";
            valid = false;
            break;
          } else {
            user.isLogIn = true;
            localStorage.setItem(user.name, JSON.stringify(user));
            window.location.href = "/index.html";
            valid = true;
            alert(`Welcome Back ${user.name}`);
          }
        } else {
          passwordErrorMsg.innerHTML = "Wrong Password.";
          passwordErrorMsg.style.color = "#b42b2b";
          valid = false;
        }
      } else {
        emailErrorMsg.innerHTML = "This email doesn't belong to any user";
        emailErrorMsg.style.color = "#b42b2b";
      }
    }
    i++;
  }
};

const logIn = () => {
  if (
    validateEmail(emailInput.value) &&
    validatePassword(passwordInput.value)
  ) {
    logInCheck(emailInput.value, passwordInput.value);
  }
};

logInButton.addEventListener("click", logIn);

// Live verification
emailInput.addEventListener("input", () => validateEmail(emailInput.value));
passwordInput.addEventListener("input", () =>
  validatePassword(passwordInput.value)
);
