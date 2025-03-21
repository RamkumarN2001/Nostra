var popup_nav = document.getElementById("poup-nav")
var cancel = document.querySelector(".cancel")

cancel.addEventListener("click", function () {
    popup_nav.style.display = "none"
})


var menuicon = document.getElementById("menu-icon")
var closeicon = document.getElementById("nav-close")
var sidenav = document.getElementById("side-nav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})
closeicon.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})


var slider = document.querySelector(".slider");
var btns = document.querySelectorAll(".btn");
var imagelist = ["summer_outfit.png", "Women.png", "Kids.jpg"];

let index = 0;

// Function to update the background image
function updateSlider() {
    slider.style.backgroundImage = `url("Images/${imagelist[index]}")`;
    slider.style.backgroundSize = "cover";
    slider.style.backgroundPosition = "center";
    slider.style.transition = "background-image 0.5s ease-in-out"; // Smooth transition
}

// Initial image setup
updateSlider();

btns.forEach((button) => {
    button.addEventListener("click", function () {
        if (button.classList.contains("btn-left")) {
            index = (index - 1 + imagelist.length) % imagelist.length; // Loop back on left click
        } else {
            index = (index + 1) % imagelist.length; // Loop forward on right click
        }
        updateSlider();
    });
});
