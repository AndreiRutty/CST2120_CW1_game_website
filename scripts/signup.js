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
      // Printing error message for exisiting user
      usernameErrorMsg.innerHTML = `${userName} is not available. Try a different user name`;
      usernameErrorMsg.style.color = "#b42b2b";
      valid = false;
    } else {
      // Printing positive feedback
      usernameErrorMsg.innerHTML = "Valid Username";
      usernameErrorMsg.style.color = "green";
    }
  } else {
    // Print message for no username input
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
      // Print error message for not including @ in email
      emailErrorMsg.innerHTML = "Invalid Email!. Please include '@'";
      emailErrorMsg.style.color = "#b42b2b";
      valid = false;
    } else {
      // Checking if the email is the correct format
      if (emailRegex.test(userEmail)) {
        // Print positive feedback for valid email
        emailErrorMsg.innerHTML = "Valid Email!";
        emailErrorMsg.style.color = "green";
      } else {
        // Print error message for invalid email
        emailErrorMsg.innerHTML = "Incomplete Email!";
        emailErrorMsg.style.color = "#b42b2b";
        valid = false;
      }
    }
  } else {
    // Print error message for no email input
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
      // Print error message for short password
      passwordErrorMsg.innerHTML = "Password should be eight characters long!";
      passwordErrorMsg.style.color = "#b42b2b";
      valid = false;
    } else {
      // Checking for password strength -if it includes lowercase, uppercase and numbers
      if (!passwordRegex.test(userPassword)) {
        // Print error message for weak password
        passwordErrorMsg.innerHTML =
          "Weak Password! Include at least one lowercase, uppercase and a number";
        passwordErrorMsg.style.color = "#b42b2b";
        valid = false;
      } else {
        // Print positive feedback for strong password
        passwordErrorMsg.innerHTML = "Strong Password!";
        passwordErrorMsg.style.color = "green";
      }
    }
  } else {
    // Print error message for no password input
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
        // Print error message for age less than 12
        ageErrorMsg.innerHTML = "You are too young to play this game!";
        ageErrorMsg.style.color = "#b42b2b";
        valid = false;
      } else {
        // Print positive feedback for valid age
        ageErrorMsg.innerHTML = "Valid Age!";
        ageErrorMsg.style.color = "green";
      }
    }
  } else {
    // Print error message for no age input
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
    // Checking if phone number is a number
    if (isNaN(userPhoneNumber)) {
      // Print error message for wrong data type for phone number
      phoneNumberErrorMsg.innerHTML = "Invalid Phone Number!";
      phoneNumberErrorMsg.style.color = "#b42b2b";
      valid = false;
    } else {
      // Print positive feedback for valid phone number
      phoneNumberErrorMsg.innerHTML = "Valid Phone Number!";
      phoneNumberErrorMsg.style.color = "green";
    }
  } else {
    // Print error message for no phone number input
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

    alert(`Welcome ${user.name}`);
  }
};

// Function to perform validation check before signing user 
const signUpCheck = (username, email, password, age, phone) => {
  var valid = true;
  var alreadyExist = false;
  var i = 0;

  // Iterating through local storage
  while (valid && !alreadyExist && i < localStorage.length) {
    // Getting the keys
    var userKey = localStorage.key(i);

    if (userKey != "debug" && userKey != "loglevel") {
      // Converting from JSON to objects
      var user = JSON.parse(localStorage.getItem(userKey));

      // Checking if a user is login
      if (user.isLogIn) {
        valid = false;
      }

      // Checking if a user has already this email
      if (user.email == email) {
        alreadyExist = true;
      }
    }
    i++;
  }

  // Checking for validity - user logged in
  if (!valid) {
    // Print error message if user is already logged in
    alert("A user is already Logged In!");

    usernameErrorMsg.innerHTML = emailErrorMsg.innerHTML =
      "A user is already Logged In!";
    usernameErrorMsg.style.color = emailErrorMsg.style.color = "#b42b2b";
  } else {
    // Checking if user already exist
    if (!alreadyExist) {
      // Create user if not already exist
      createUser(username, email, password, age, phone);
    } else {
      // Print error message for already existing user
      alert("A user has already this email");
      emailErrorMsg.innerHTML = "A user has already this email";
      emailErrorMsg.style.color = "#b42b2b";
    }
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
    // Performing sign up check
    signUpCheck(
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
