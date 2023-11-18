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

const logInCheck = (email, password) => {
  var foundEmail = false;

  // Iterating through local storage
  for (var i = 0; i < localStorage.length; i++) {
    // Getting the keys
    var userKey = localStorage.key(i);

    if (userKey != "debug" && userKey != "loglevel") {
      // Converting from JSON to objects
      var user = JSON.parse(localStorage.getItem(userKey));

      // Checking if a user is already log in
      if (user.isLogIn) {
        alert("A user is already Logged In!");
      } else {
        // Checking if there is a user with the specified email and password
        if (user.email == email) {
          foundEmail = true;

          if (user.password == password) {
            user.isLogIn = true;
            localStorage.setItem(user.name, JSON.stringify(user));

            // Redirecting user to home page
            window.location.href = "/index.html";
          } else {
            passwordErrorMsg.innerHTML = "Wrong Password.";
            passwordErrorMsg.style.color = "#b42b2b";
          }
        }
      }
    }
  }

  if (!foundEmail) {
    emailErrorMsg.innerHTML = "This email doesn't belong to any user";
    emailErrorMsg.style.color = "#b42b2b2";
  }
};

const logIn = () => {
  if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
    logInCheck(emailInput.value, passwordInput.value);
  }
};

logInButton.addEventListener("click", logIn);

// Live verification
emailInput.addEventListener("input", () => validateEmail(emailInput.value));
passwordInput.addEventListener("input", () =>
  validatePassword(passwordInput.value)
);
