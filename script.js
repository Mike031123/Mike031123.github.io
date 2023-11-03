function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    var toggleButton = document.querySelector(".navbar-toggle");

    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
}

window.addEventListener("resize", function () {
    var navbar = document.getElementById("navbar");
    var toggleButton = document.querySelector(".navbar-toggle");

    if (window.innerWidth > 768) {
        navbar.style.display = "block";
        toggleButton.style.display = "none";
    } else {
        navbar.style.display = "none";
        toggleButton.style.display = "block";
    }
});

window.addEventListener("load", function () {
    var navbar = document.getElementById("navbar");
    var toggleButton = document.querySelector(".navbar-toggle");

    if (window.innerWidth <= 768) {
        navbar.style.display = "none";
        toggleButton.style.display = "block";
    }
});
