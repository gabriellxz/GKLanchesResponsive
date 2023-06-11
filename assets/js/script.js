var slides = document.getElementsByClassName("slide");
var currentSlideIndex = 0;

function showSlide(index) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
}

setInterval(nextSlide, 2000);

showSlide(currentSlideIndex);

//animação de rolagem
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('nav a');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            var targetOffsetTop = targetElement.offsetTop;

            window.scrollTo({
                top: targetOffsetTop,
                behavior: 'smooth'
            });
        });
    });
});

//menu mobile
function menuShow(){
    let menuMobile = document.querySelector('.menu-list-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}