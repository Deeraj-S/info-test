let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');
let countItem = items.length;
let itemActive = 0;
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
};
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
};
function showSlider() {
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

}
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});

//popup box
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#open-popup").addEventListener("click", function() {
        document.body.classList.add("active-popup");
        document.querySelectorAll('.thumbnail .item').forEach(item => {
            item.classList.add('blurred');
        });
    });
    document.querySelector(".popup .close-btn").addEventListener("click", function() {
        document.body.classList.remove("active-popup");
        document.querySelectorAll('.thumbnail .item').forEach(item => {
            item.classList.remove('blurred');
        });
    });
});

//information
document.addEventListener("DOMContentLoaded", function() {
    const popupTitleElement = document.getElementById("popupTitle");
    const popupContentElement = document.getElementById("popupContent");
    document.querySelector("#open-popup").addEventListener("click", function() {
        // Set new content for popup
        popupTitleElement.innerText = "Popup Title";
        popupContentElement.innerText = "This is content for the zero button click.";
        openPopup();
    });
    document.querySelector("#open-popup1").addEventListener("click", function() {
        // Set new content for popup
        popupTitleElement.innerText = "Popup Title 1";
        popupContentElement.innerText = "This is content for the first button click.";
        openPopup();
    });
    document.querySelector("#open-popup2").addEventListener("click", function() {
        // Set new content for popup
        popupTitleElement.innerText = "Popup Title 2";
        popupContentElement.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odio nostrum. Non ratione natus iste eos quia odio repudiandae animi pariatur saepe perferendis hic ullam earum dolor, minima accusantium velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odio nostrum. Non ratione natus iste eos quia odio repudiandae animi pariatur saepe perferendis hic ullam earum dolor, minima accusantium velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odio nostrum. Non ratione natus iste eos quia odio repudiandae animi pariatur saepe perferendis hic ullam earum dolor, minima accusantium velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odio nostrum. Non ratione natus iste eos quia odio repudiandae animi pariatur saepe perferendis hic ullam earum dolor, minima accusantium velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odio nostrum. Non ratione natus iste eos quia odio repudiandae animi pariatur saepe perferendis hic ullam earum dolor, minima accusantium velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odio nostrum. Non ratione natus iste eos quia odio repudiandae animi pariatur saepe perferendis hic ullam earum dolor, minima accusantium velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odio nostrum. Non ratione natus iste eos quia odio repudiandae animi pariatur saepe perferendis hic ullam earum dolor, minima accusantium velit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odio nostrum. Non ratione natus iste eos quia odio repudiandae animi pariatur saepe perferendis hic ullam earum dolor, minima accusantium velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odio nostrum. Non ratione natus iste eos quia odio repudiandae animi pariatur saepe perferendis hic ullam earum dolor, minima accusantium velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odio nostrum. Non ratione natus iste eos quia odio repudiandae animi pariatur saepe perferendis hic ullam earum dolor, minima accusantium velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odio nostrum. Non ratione natus iste eos quia odio repudiandae animi pariatur saepe perferendis hic ullam earum dolor, minima accusantium velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odio nostrum. Non ratione natus iste eos quia odio repudiandae animi pariatur saepe perferendis hic ullam earum dolor, minima accusantium velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odio nostrum. Non ratione natus iste eos quia odio repudiandae animi pariatur saepe perferendis hic ullam earum dolor, minima accusantium velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odio nostrum. Non ratione natus iste eos quia odio repudiandae animi pariatur saepe perferendis hic ullam earum dolor, minima accusantium velit?";
        openPopup();
    });
    document.querySelector("#open-popup3").addEventListener("click", function() {
        // Set new content for popup
        popupTitleElement.innerText = "Popup Title 3";
        popupContentElement.innerText = "This is content for the third button click.";
        openPopup();
    });
    document.querySelector("#open-popup4").addEventListener("click", function() {
        // Set new content for popup
        popupTitleElement.innerText = "Popup Title 4";
        popupContentElement.innerText = "This is content for the fourth button click.";
        openPopup();
    });
    document.querySelector("#open-popup5").addEventListener("click", function() {
        // Set new content for popup
        popupTitleElement.innerText = "Popup Title 5";
        popupContentElement.innerText = "This is content for the fifth button click.";
        openPopup();
    });
    document.querySelector(".popup .close-btn").addEventListener("click", function() {
        closePopup();
    });
    function openPopup() {
        document.body.classList.add("active-popup");
        document.querySelector('.popup').style.top = "50%";
        document.querySelector('.popup').style.opacity = 1;
        document.body.style.marginTop = 0;
    }
    function closePopup() {
        document.body.classList.remove("active-popup");
        document.querySelector('.popup').style.top = "-100%";
        document.querySelector('.popup').style.opacity = 0;
        document.body.style.marginTop = "0";
    }
});



// Get the thumbnail container
const thumbnailContainer = document.querySelector('.thumbnail');

// Get all thumbnail items
const thumbnailItems = document.querySelectorAll('.thumbnail .item');

// Add click event listener to each thumbnail item
thumbnailItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Blur the entire thumbnail container
        thumbnailContainer.classList.add('blurred');

        // Remove blur from all thumbnail items
        thumbnailItems.forEach(thumbnailItem => {
            thumbnailItem.classList.remove('blurred');
        });

        // Add blur class to the clicked item
        item.classList.add('blurred');
    });
});


