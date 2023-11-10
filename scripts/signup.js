// Error Message Headers
var usernameErrorMsg = document.getElementById("username-error-message");
var emailErrorMsg = document.getElementById("email-error-message");
var passwordErrorMsg = document.getElementById("password-error-message");
var ageErrorMsg = document.getElementById("age-error-message");
var phoneNumberErrorMsg = document.getElementById("phone-number-error-message");

// Button
var signUpBtn = document.getElementById("sign-up-button");

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

// Function that will validate the username
const validateUsername = (userName) => {
  valid = true;

  // Checking if user has input a username
  if (userName){
    // Checking if the username already exists in local storage
    var alreadyExist = localStorage.getItem(userName);

    if (alreadyExist){
      usernameErrorMsg.innerHTML = `${userName} is not available. Try a different user name`;
      valid = false;
    }else{
      usernameErrorMsg.innerHTML = "Valid Username";
      usernameErrorMsg.style.color = "green";
    }

  }else{
    usernameErrorMsg.innerHTML = "Username cannot be left empty!";
    valid = false;
  }

  return valid;
}

// Function that will validate the email
const validateEmail = (userEmail) => {
  const atSign = /@/;
  var valid = true;
  var emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Checking if user has input an email
  if (userEmail) {
    // Checking if the email contains '@'
    if (!atSign.test(userEmail)) {
      emailErrorMsg.innerHTML = "Invalid Email!. Please include '@'";
      valid = false;
    } else {
      // Checking if the email is the correct format
      if (emailRegex.test(userEmail)) {
        emailErrorMsg.innerHTML = "Valid Email!";
        emailErrorMsg.style.color = "green";
      } else {
        emailErrorMsg.innerHTML = "Incomplete Email!";
        valid = false;
      }
    }
  } else {
    emailErrorMsg.innerHTML = "Email cannot be left empty!";
    valid = false;
  }

  return valid;
};

// Function that will validate the password
const validatePassword = (userPassword) => {
  var valid = true;
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/;

  // Checking user has entered a password
  if (userPassword) {
    // Checking password length
    if (userPassword.length < 8) {
      passwordErrorMsg.innerHTML = "Password should be eight characters long!";
      valid = false;
    } else {
      // Checking for password strength -if it includes lowercase, uppercase and numbers
      if (!passwordRegex.test(userPassword)) {
        passwordErrorMsg.innerHTML =
          "Weak Password! Include at least one lowercase, uppercase and a number";
        valid = false;
      } else {
        passwordErrorMsg.innerHTML = "Strong Password!";
        passwordErrorMsg.style.color = "green";
      }
    }
  } else {
    passwordErrorMsg.innerHTML = "Password cannot be left empty!";
    valid = false;
  }

  return valid;
};

// Function that will validate the age
const validateAge = (userAge) => {
  var valid = true;

  // Checking if user has input an age value
  if (userAge) {
    // Checking if the user has input a number or not
    if (isNaN(userAge)) {
      ageErrorMsg.innerHTML = "Invalid Age!";
      valid = false;
    } else {
      // Checking if the user is older than 12

      // Converting string to number
      var ageValue = Number(userAge);

      if (ageValue < 12) {
        ageErrorMsg.innerHTML = "You are too young to play this game!";
      } else {
        ageErrorMsg.innerHTML = "Valid Age!";
        ageErrorMsg.style.color = "green";
      }
    }
  } else {
    ageErrorMsg.innerHTML = "Age cannot be left empty!";
    valid = false;
  }

  return valid;
};

// Function to check if the phone number is valid
const validatePhoneNumber = (userPhoneNumber) => {
  var valid = true;

  // Checking if the user has input a phone number
  if (userPhoneNumber) {
    if (isNaN(userPhoneNumber)){
      phoneNumberErrorMsg.innerHTML = "Invalid Phone Number!";
      valid = false;
    }else{
      phoneNumberErrorMsg.innerHTML = "Valid Phone Number!";
      phoneNumberErrorMsg.style.color = "green";
    }
  } else {
    phoneNumberErrorMsg.innerHTML = "Phone Number cannot be left empty!";
    valid = false;
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

  var isUserNameValid = validateUsername(userName);
  var isEmailValid = validateEmail(email);
  var isPasswordValid = validatePassword(password);
  var isAgeValid = validateAge(age);
  var isPhoneNumber = validatePhoneNumber(phoneNumber);

};

signUpBtn.addEventListener("click", getEntryValue);
