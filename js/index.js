
let urltrack = 'https://developers.deezer.com/api/artist '

fetch (urltrack)
    .then(function(response){
        return response.json();
    })
    .then(function(datatrack){
        console.log(datatrack.name[0]);
    })

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("FotosCarrusel");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}