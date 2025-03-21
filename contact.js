var menuicon = document.getElementById("menu-icon")
var closeicon = document.getElementById("nav-close")
var sidenav = document.getElementById("side-nav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})
closeicon.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})