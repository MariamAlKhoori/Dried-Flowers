var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("first-slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var secondSlideIndex = 0;
showSecondSlides();

function showSecondSlides() {
  var i;
  var slides = document.getElementsByClassName("second-slides");
  var dots = document.getElementsByClassName("second-dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  secondSlideIndex++;
  if (secondSlideIndex > slides.length) {secondSlideIndex = 1}    
  slides[secondSlideIndex-1].style.display = "block";  
  setTimeout(showSecondSlides, 2000); // Change image every 2 seconds
}

