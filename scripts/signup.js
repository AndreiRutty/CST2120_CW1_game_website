// Error Message Headers
var usernameErrorMsg = document.getElementById("username-error-message");
var emailErrorMsg = document.getElementById("email-error-message");
var passwordErrorMsg = document.getElementById("password-error-message");
var ageErrorMsg = document.getElementById("age-error-message");
var phoneNumberErrorMsg = document.getElementById("phone-number-error-message");

// Button
var signUpBtn = document.getElementById("sign-up-button");

// Function to check if the entry fields are not left empty
const checkEntryPresence = (
  userName,
  userEmail,
  userPassword,
  userAge,
  userPhoneNumber
) => {
  valid = true;

  if (!userName) {
    usernameErrorMsg.innerHTML = "Username cannot be left empty!";
    valid = false
  }
  if (!userEmail) {
    emailErrorMsg.innerHTML = "Email cannot be left empty!";
    valid = false
  }
  if (!userPassword) {
    passwordErrorMsg.innerHTML = "Password cannot be left empty!";
    valid = false;
  }
  if (!userAge) {
    ageErrorMsg.innerHTML = "Age cannot be left empty!";
    valid = false;
  }
  if (!userPhoneNumber) {
    phoneNumberErrorMsg.innerHTML = "Phone Number cannot be left empty!";
    valid = false;
  }

  return valid;
};

// Function to reset the inner HTML of the error message header
const resetErrorMessage = () => {
    if(usernameErrorMsg){
        usernameErrorMsg.innerHTML = "";
    }

    if(emailErrorMsg){
        emailErrorMsg.innerHTML = "";
    }

    if(passwordErrorMsg){
        passwordErrorMsg.innerHTML = "";
    }

    if(ageErrorMsg){
        ageErrorMsg.innerHTML = "";
    }

    if(phoneNumberErrorMsg){
        phoneNumberErrorMsg.innerHTML = "";
    }

}

// Function to get value of entry field
const getEntryValue = () => {
  var userName = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var age = document.getElementById("age").value;
  var phoneNumber = document.getElementById("phone-number").value;

  // Resetting error message headers
  resetErrorMessage();

  // Checking if there is input in the entry field
  var isPresent = checkEntryPresence(userName, email, password, age, phoneNumber);
  console.log(isPresent);
};

signUpBtn.addEventListener("click", getEntryValue);
