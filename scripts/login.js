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

  if (email && password) {
    logInCheck(email, password);
  }
};

logInButton.addEventListener("click", logIn);
