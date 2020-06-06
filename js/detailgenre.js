// let queryString = location.search;
// let datos = new URLSearchParams(queryString);
// let idGenre = datos.get("id");

// let proxy = "https://cors-anywhere.herokuapp.com/";
// let urlGenre = proxy + "https://api.deezer.com/genre/" + idGenre;

// fetch(urlGenre)
//     .then(function(response){
//     return response.json();
// })
//     .then(function(datos){
//     console.log(datos);
//     let nombreGenero = document.querySelector(".NombreGenero");
//     nombreGenero.innerHTML += datos.genre_id;
// })
// .catch(function(error){
//     console.log(error)
// })


// let urlAlbum = proxy + "https://api.deezer.com/album/" + idGenre;

// fetch(urlAlbum)
//     .then(function(response){
//     return response.json();
// })
//     .then(function(datos){
//     console.log(datos);
//     let albumes = document.querySelector(".albumes");
//     albumes.innerHTML += datos.genre_id + datos.cover_small;
// })
// .catch(function(error){
//     console.log(error)
// })