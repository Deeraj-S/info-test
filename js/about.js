const about_border = document.querySelector(".about_border");
window.addEventListener('scroll', () => {
    about_border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
});