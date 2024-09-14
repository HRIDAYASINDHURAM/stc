// parallax
let listBg = document.querySelectorAll(".bg");
let listTab = document.querySelectorAll(".tab");
let titleBanner = document.querySelector(".banner h1");
window.addEventListener("scroll", (event) => {

  let top = this.scrollY;

  listBg.forEach((bg, index) => {
    if (index != 0 && index != 8) {
      bg.style.transform = `translateY(${(top * index) / 2}px)`;
    } else if (index == 0) {
      bg.style.transform = `translateY(${top / 3}px)`;
    }
  });
  titleBanner.style.transform = `translateY(${(top * 4) / 2}px)`;

  listTab.forEach((tab) => {
    if (tab.offsetTop - top < 550) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
});

// navbar
window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// loading
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('main-content');

  const minimumLoadingTime = 2000;

  const startTime = Date.now();

  function showContent() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    if (elapsedTime < minimumLoadingTime) {
        setTimeout(() => {
          preloader.style.display = 'none';
          mainContent.style.display = 'block';
        }, minimumLoadingTime - elapsedTime);
    } else {
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
    }
  }
  showContent();
});