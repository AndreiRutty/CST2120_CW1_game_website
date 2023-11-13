// Error Message Header
var emailErrorMsg = document.getElementById("email-error-message");
var passwordErrorMsg = document.getElementById("password-error-message");

// Button
var logInButton = document.getElementById("log-in-button");

// Function to reset the error messages to default setting
const resetErrorMessage = () => {
  if (emailErrorMsg) {
    emailErrorMsg.innerHTML = "";
    emailErrorMsg.style.color = "#b42b2b";
  }

  if (passwordErrorMsg) {
    passwordErrorMsg.innerHTML = "";
    passwordErrorMsg.style.color = "#b42b2b";
  }
};

// Function to check the validity of the email
const validateEmail = (email) => {
  const atSign = /@/;
  var valid = true;

  // Checking if user has input an email
  if (email) {
    // Checking if the email contains '@'
    if (!atSign.test(email)) {
      emailErrorMsg.innerHTML = "Invalid Email!. Please include '@'";
      valid = false;
    }
  } else {
    emailErrorMsg.innerHTML = "Email cannot be left empty!";
    valid = false;
  }

  return valid;
};

// Function to check the validity of the password
const validatePassword = (password) => {
  var valid = true;

  if (!password) {
    passwordErrorMsg.innerHTML = "Password cannot be left empty!";
    console.log(`Password Error Message: ${passwordErrorMsg.innerHTML}`);
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
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Resetting error message headers to default settings
  resetErrorMessage();

  // Validating email and password
  var isEmailValid = validateEmail(email);
  var isPasswordValid = validatePassword(password);

  if (isEmailValid && isPasswordValid) {
    logInCheck(email, password);
  }
};

logInButton.addEventListener("click", logIn);
