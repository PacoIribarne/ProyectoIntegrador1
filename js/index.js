
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

let proxy = 'https://cors-anywhere.herokuapp.com/'
let urlChart = proxy + 'https://api.deezer.com/chart'

fetch(urlChart)
  .then(function(response){
    return response.json()
  })
  .then(function(datos){
      console.log(datos);
      let portadaAlbum = document.querySelector('.portadaAlbum');
      let albums = datos.albums.data;
      console.log(albums)
      albums.forEach(function(album){
        portadaAlbum.src += album.cover
        portadaAlbum.alt += album.title
      })
  })
  .catch(function(error){
    console.log(error)
})


