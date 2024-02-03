const border = document.querySelector(".border");
window.addEventListener('scroll', () => {
    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
});