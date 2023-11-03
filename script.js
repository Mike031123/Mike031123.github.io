

        let lightboxIndex = 0;
        const images = [
            "images/1.png",
            "images/2.png",
            "images/4.png",
            "images/5.png",
            "images/6.png",
            "images/7.png",
            "images/8.png",
            "images/9.png",
            "images/10.png",
            "images/11.png",
        ];

        function openLightbox(imageUrl) {
            lightboxIndex = images.indexOf(imageUrl);
            const lightbox = document.getElementById("lightbox");
            const lightboxImage = document.getElementById("lightbox-image");
            lightboxImage.src = imageUrl;
            lightbox.style.display = "block";
        }

        function changeLightboxImage(offset) {
            lightboxIndex += offset;
            if (lightboxIndex < 0) {
                lightboxIndex = images.length - 1;
            } else if (lightboxIndex >= images.length) {
                lightboxIndex = 0;
            }
            const lightboxImage = document.getElementById("lightbox-image");
            lightboxImage.src = images[lightboxIndex];
        }

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeLightbox();
            } else if (event.key === "ArrowLeft") {
                changeLightboxImage(-1);
            } else if (event.key === "ArrowRight") {
                changeLightboxImage(1);
            }
        });

        function closeLightbox() {
            const lightbox = document.getElementById("lightbox");
            lightbox.style.display = "none";
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
