
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
      let abajo = document.querySelector('.abajo');
      let abajo2 = document.querySelector('.abajo2');
      let abajo3 = document.querySelector('.abajo3');
      // albums.forEach(function(album){
      //   albumblock.innerHTML += '<a href= class="portadaAlbum" <img src="' + album.cover + '"> <p>' + album.title + '-' + album.artist.name + '</p> </a>'
      // })
      for (let i = 0; i < 4; i++){
        abajo.innerHTML += '<a class="albumblock" href=""> <img class="portadaTrack src="' + datos.tracks.data[i].album.cover + '"> <p>' + datos.tracks.data[i].title + ' - ' + datos.tracks.data[i].artist.name + '</p> </a>'
      }
      for (let i = 0; i < 4; i++){
        abajo2.innerHTML += '<a class="albumblock" href=""> <img class="portadaAlbum src="' + datos.albums.data[i].cover_medium + '"> <p>' + datos.albums.data[i].title + ' - ' + datos.albums.data[i].artist.name + '</p> </a>'
      }
      for (let i = 0; i < 4; i++){
        abajo3.innerHTML += '<a class="albumblock" href="detailalbum.html?id=' + datos.artists.data[i].id + '"> <img class="portadaAlbum src="' + datos.artists.data[i].picture + '"> <p>' + datos.artists.data[i].name + '</p> </a>'
      }
  })
  .catch(function(error){
    console.log(error)
})


// <a href="detailalbum.html"><div class="albumblock">
//                 <img class="portadaAlbum" height="100px" >
//                 <p class="nombrecancion">The Getaway | Red Hot Chilli Peppers </p>
//             </div></a>
//             <a href="detailalbum.html"><div class="albumblock">
//                 <img class="portadaAlbum" height="100px" >
//                 <p class="nombrecancion">The Getaway | Red Hot Chilli Peppers </p>
//             </div></a>
//             <a href="detailalbum.html"><div class="albumblock">
//                 <img class="portadaAlbum" height="100px" >
//                 <p class="nombrecancion">The Getaway | Red Hot Chilli Peppers </p>
//             </div></a>
//             <a href="detailalbum.html"><div class="albumblock">
//                 <img class="portadaAlbum" height="100px" >
//                 <p class="nombrecancion">The Getaway | Red Hot Chilli Peppers </p>
//             </div></a>

