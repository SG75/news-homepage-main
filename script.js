const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  //   alert("clicked");
  navBarLinks.classList.toggle("active");
});

function changeImage() {
  var menuImage = document.getElementById("menuimage");
  // Check the current src attribute
  if (menuImage.src.includes("assets/images/icon-menu.svg")) {
    // Change to a different image on click
    menuImage.src = "assets/images/icon-menu-close.svg";
  } else {
    // Change back to the original image on another click
    menuImage.src = "assets/images/icon-menu.svg";
  }
}
