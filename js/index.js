
let endpointArtist = 'https://api.deezer.com/artist'
let proxi = 'https://cors-anywhere.herokuapp.com/'

fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/')
    .then(function(dataJson){
        return dataJson.json();
    })
    .then(function(dataArtist){
        console.log(dataArtist);
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