const hamburgerButton = document.getElementById("sidebar-button");
const sidebar = document.querySelector(".sidebar");
const closeButton = document.getElementById("sidebar-close-button");

// Function to show and hide the side bar
const toggleSideBar = () => {
  sidebar.classList.toggle("show");
};

hamburgerButton.addEventListener("click", toggleSideBar);
closeButton.addEventListener("click", toggleSideBar);

