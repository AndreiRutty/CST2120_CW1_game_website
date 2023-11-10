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
    valid = false;
  }
  if (!userEmail) {
    emailErrorMsg.innerHTML = "Email cannot be left empty!";
    valid = false;
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
  if (usernameErrorMsg) {
    usernameErrorMsg.innerHTML = "";
    usernameErrorMsg.style.color = "#b42b2b";
  }

  if (emailErrorMsg) {
    emailErrorMsg.innerHTML = "";
    emailErrorMsg.style.color = "#b42b2b";
  }

  if (passwordErrorMsg) {
    passwordErrorMsg.innerHTML = "";
    passwordErrorMsg.style.color = "#b42b2b";
  }

  if (ageErrorMsg) {
    ageErrorMsg.innerHTML = "";
    ageErrorMsg.style.color = "#b42b2b";
  }

  if (phoneNumberErrorMsg) {
    phoneNumberErrorMsg.innerHTML = "";
    phoneNumberErrorMsg.style.color = "b42b2b";
  }
};

/*
TODO:
Validate Username - check if not already exist
Validate Email - check if it contains '@'
Validate Password - checks lengths and characters
Validate Age - checks if it is b/w 0 and 100
Validate Phone Number - check data type and length
*/

// Function that will validate the email
const validateEmail = (userEmail) => {
  const atSign = /@/;
  var valid = true;
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Checking if user has input an email
  if (userEmail) {
    // Checking if the email contains '@'
    if (!atSign.test(userEmail)) {
      emailErrorMsg.innerHTML = "Invalid Email!. Please include '@'";
      valid = false;
    } else {
      // Checking if the email is the correct format
      if (validRegex.test(userEmail)) {
        emailErrorMsg.innerHTML = "Valid Email!";
        emailErrorMsg.style.color = "green";
      }else{
        emailErrorMsg.innerHTML = "Incomplete Email!";
      }
    }
  }

  return valid;
};

// Function to get value of entry field
const getEntryValue = () => {
  var userName = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var age = document.getElementById("age").value;
  var phoneNumber = document.getElementById("phone-number").value;

  // Resetting error message headers to default settings
  resetErrorMessage();

  // Checking if there is input in the entry field
  var isPresent = checkEntryPresence(
    userName,
    email,
    password,
    age,
    phoneNumber
  );
  var isEmailValid = validateEmail(email);

  console.log(isPresent);
  console.log(isEmailValid);
};

signUpBtn.addEventListener("click", getEntryValue);
