document.addEventListener("DOMContentLoaded", function () {
    // Get references to the screen opener, home content, and images
    const screenOpener = document.getElementById("screenOpener");
    const home = document.getElementById("home");
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");

    // Show the screen opener for a few seconds
    setTimeout(function () {
        // Hide the screen opener
        screenOpener.style.display = "none";

        // Show the home content
        home.style.display = "flex";

        // Fade in images
        image1.style.opacity = "1";
        image2.style.opacity = "1";
    }, 3000); // Adjust the time as needed
});
