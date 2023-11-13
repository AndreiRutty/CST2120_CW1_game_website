// Input Field
var userNameInput = document.getElementById("username");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var ageInput = document.getElementById("age");
var phoneNumberInput = document.getElementById("phone-number");

// Error Message Headers
var usernameErrorMsg = document.getElementById("username-error-message");
var emailErrorMsg = document.getElementById("email-error-message");
var passwordErrorMsg = document.getElementById("password-error-message");
var ageErrorMsg = document.getElementById("age-error-message");
var phoneNumberErrorMsg = document.getElementById("phone-number-error-message");

// Button
var signUpBtn = document.getElementById("sign-up-button");

// Function that will validate the username
const validateUsername = (userName) => {
  var valid = true;

  // Checking if user has input a username
  if (userName) {
    // Checking if the username already exists in local storage
    var alreadyExist = localStorage.getItem(userName);

    if (alreadyExist) {
      usernameErrorMsg.innerHTML = `${userName} is not available. Try a different user name`;
      usernameErrorMsg.style.color = "#b42b2b";
      valid = false;
      
    } else {
      usernameErrorMsg.innerHTML = "Valid Username";
      usernameErrorMsg.style.color = "green";
    }
  } else {
    usernameErrorMsg.innerHTML = "Username cannot be left empty!";
    usernameErrorMsg.style.color = "#b42b2b";
    valid = false;
  }

  return valid;
};

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
      emailErrorMsg.style.color = "#b42b2b";
      valid = false;
    } else {
      // Checking if the email is the correct format
      if (emailRegex.test(userEmail)) {
        emailErrorMsg.innerHTML = "Valid Email!";
        emailErrorMsg.style.color = "green";
      } else {
        emailErrorMsg.innerHTML = "Incomplete Email!";
        emailErrorMsg.style.color = "#b42b2b";
        valid = false;
      }
    }
  } else {
    emailErrorMsg.innerHTML = "Email cannot be left empty!";
    emailErrorMsg.style.color = "#b42b2b";
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
      passwordErrorMsg.style.color = "#b42b2b";
      valid = false;
    } else {
      // Checking for password strength -if it includes lowercase, uppercase and numbers
      if (!passwordRegex.test(userPassword)) {
        passwordErrorMsg.innerHTML =
          "Weak Password! Include at least one lowercase, uppercase and a number";
          passwordErrorMsg.style.color = "#b42b2b";
        valid = false;
      } else {
        passwordErrorMsg.innerHTML = "Strong Password!";
        passwordErrorMsg.style.color = "green";
      }
    }
  } else {
    passwordErrorMsg.innerHTML = "Password cannot be left empty!";
    passwordErrorMsg.style.color = "#b42b2b";
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
        ageErrorMsg.style.color = "#b42b2b";
        valid = false;
      } else {
        ageErrorMsg.innerHTML = "Valid Age!";
        ageErrorMsg.style.color = "green";
      }
    }
  } else {
    ageErrorMsg.innerHTML = "Age cannot be left empty!";
    ageErrorMsg.style.color = "#b42b2b";
    valid = false;
  }

  return valid;
};

// Function to check if the phone number is valid
const validatePhoneNumber = (userPhoneNumber) => {
  var valid = true;

  // Checking if the user has input a phone number
  if (userPhoneNumber) {
    if (isNaN(userPhoneNumber)) {
      phoneNumberErrorMsg.innerHTML = "Invalid Phone Number!";
      phoneNumberErrorMsg.style.color = "#b42b2b";
      valid = false;
    } else {
      phoneNumberErrorMsg.innerHTML = "Valid Phone Number!";
      phoneNumberErrorMsg.style.color = "green";
    }
  } else {
    phoneNumberErrorMsg.innerHTML = "Phone Number cannot be left empty!";
    phoneNumberErrorMsg.style.color = "#b42b2b";
    valid = false;
  }

  return valid;
};

// Function that will create the user
const createUser = (userName, email, password, age, phoneNumber) => {
  var key = userName;

  var value = {
    name: userName,
    email: email,
    password: password,
    age: age,
    phoneNumber: phoneNumber,
    score: 0,
    isLogIn: false,
  };

  // Sending object to local storage
  localStorage.setItem(key, JSON.stringify(value));

  // Checking if the object was sent to the local storage successfully
  if (localStorage.getItem(key)) {
    // Setting isLogin attribute to true
    var user = JSON.parse(localStorage.getItem(key));

    user.isLogIn = true;

    localStorage.setItem(key, JSON.stringify(user));

    // Redirecting user to home page
    window.location.href = "/index.html";
  }
};

// Function to get value of entry field
const signUp = () => {

  // Checking validity of the user input
  var isUserNameValid = validateUsername(userNameInput.value);
  var isEmailValid = validateEmail(emailInput.value);
  var isPasswordValid = validatePassword(passwordInput.value);
  var isAgeValid = validateAge(ageInput.value);
  var isPhoneNumber = validatePhoneNumber(phoneNumberInput.value);

  if (
    isUserNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isAgeValid &&
    isPhoneNumber
  ) {
    // Creating user and adding the user to the local storage
    createUser(
      userNameInput.value,
      emailInput.value,
      passwordInput.value,
      ageInput.value,
      phoneNumberInput.value
    );
  }
};

signUpBtn.addEventListener("click", signUp);

// Live verification
userNameInput.addEventListener("input", () =>
  validateUsername(userNameInput.value)
);
emailInput.addEventListener("input", () => validateEmail(emailInput.value));
passwordInput.addEventListener("input", () =>
  validatePassword(passwordInput.value)
);
ageInput.addEventListener("input", () => validateAge(ageInput.value));
phoneNumberInput.addEventListener("input", () =>
  validatePhoneNumber(phoneNumberInput.value)
);
