const hamburgerButton = document.getElementById("sidebar-button");
const sidebar = document.querySelector(".sidebar");
const closeButton = document.getElementById("sidebar-close-button");
const userNameTags = document.getElementsByClassName("username");

// Function to show and hide the side bar
const toggleSideBar = () => {
  sidebar.classList.toggle("show");
};

hamburgerButton.addEventListener("click", toggleSideBar);
closeButton.addEventListener("click", toggleSideBar);


// Function to change the guest tag to the user's username in sidebar and navbar
const changeUserTag = () => {
  // Iterating through local storage
  for (var i = 0; i < localStorage.length; i++) {
    // Getting the keys
    var userKey = localStorage.key(i);

    if (userKey != "debug" && userKey != "loglevel") {
      // Converting from JSON to objects
      var user = JSON.parse(localStorage.getItem(userKey));

      // Checking if the user is log in
      if (user.isLogIn) {

        // Adjusting the username tag
        for (var j = 0; j < userNameTags.length; j++) {
          userNameTags[j].innerHTML = `${user.name}`;
        }
      }
    }
  }
};

changeUserTag();
