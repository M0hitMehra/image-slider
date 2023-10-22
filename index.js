let images = document.getElementsByTagName("img");
let rightArrow = document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");
let currentIndex = 0;

function showImage() {
  for (let i = 0; i < images.length; i++) {
    if (i === currentIndex) {
      images[i].style.opacity = "1";
      images[i].style.zIndex = "1";
      images[i].style.transform = "translateY(0)";
    } else {
      images[i].style.opacity = "0";
      images[i].style.transform = "translateY(-100%)";
    }
  }
}

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

showImage();
