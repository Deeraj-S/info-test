document.addEventListener("DOMContentLoaded", function () {
    // Show screen opener for a few seconds
    document.getElementById("screenOpener").style.display = "flex";
    setTimeout(function () {
        document.getElementById("screenOpener").style.display = "none";
        // Show the home content
        document.getElementById("home").style.display = "block";
    }, 3000); // Adjust the time as needed
});
