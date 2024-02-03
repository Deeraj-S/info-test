document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("screenOpener").style.display = "flex";
    setTimeout(function () {
        document.getElementById("screenOpener").style.display = "none";
        document.getElementById("home").style.display = "block";
    }, 3000);
});
