// Sign Out Button
const signOutButtons = document.getElementsByClassName("sign-out-button");

// Function to sign user out
const signOut = () => {
  // Iterating through local storage
  for (var i = 0; i < localStorage.length; i++) {
    // Getting the keys
    var userKey = localStorage.key(i);

    if (userKey != "debug" && userKey != "loglevel") {
      // Converting from JSON to objects
      var user = JSON.parse(localStorage.getItem(userKey));

      // Checking if the user is log in
      if (user.isLogIn) {
        user.isLogIn = false;
        localStorage.setItem(user.name, JSON.stringify(user));
      }
    }
  }
};

// Adding the sign out function to the sign out buttons
for (var i = 0; i < signOutButtons.length; i++) {
  signOutButtons[i].addEventListener("click", signOut);
}
