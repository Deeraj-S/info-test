const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");




const toggleNavbar = () => {
    nav_header.classList.toggle("active");
    if (nav_header.classList.contains("active")) {
        document.getElementsByClassName("container")[0].style.width = "0%";
        document.getElementsByClassName("loginsection")[0].style.width = "50%";

    }
    else {
        document.getElementsByClassName("container")[0].style.width = "100%";
        document.getElementsByClassName("loginsection")[1].style.width = "100%";

    }


};

mobile_nav.addEventListener("click", () => toggleNavbar());