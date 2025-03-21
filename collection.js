var menuicon = document.getElementById("menu-icon")
var closeicon = document.getElementById("nav-close")
var sidenav = document.getElementById("side-nav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})
closeicon.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

var productcont = document.getElementById("product-container")
var prodsearch = document.getElementById("product-search")
var Proddiv = productcont.querySelectorAll("div")


prodsearch.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()
    // console.log(enteredvalue)
    for (count = 0; count < Proddiv.length; count = count + 1) {
        var productname = Proddiv[count].querySelector("h1").textContent
        console.log(productname)
        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            Proddiv[count].style.display = "none"
        }
        else {
            Proddiv[count].style.display = "block"
        }


    }

})