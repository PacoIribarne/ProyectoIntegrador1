let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idGenre = datos.get("id");

let proxy = "https://cors-anywhere.herokuapp.com/";
let urlGenre = proxy + "https://api.deezer.com/genre/" + idGenre;

fetch(urlGenre)
    .then(function(response){
    return response.json();
    })
        .then(function(datos){
        console.log(datos);
        let nombreGenero = document.querySelector(".NombreGenero");
        nombreGenero.innerHTML += datos.name;
    })
    .catch(function(error){
        console.log(error)
    })


let urlGenreArtist = proxy + "https://api.deezer.com/genre/" + idGenre + "/artists";

fetch(urlGenreArtist)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let resultados = datos.data;
        let artists = document.querySelector('.artists');
        resultados.forEach(function(artist){
        artists.innerHTML += '<a class="artist "href="'+'"> <img src="' + artist.picture_medium + '"> <p class="nombre">' + artist.name + '</p> </a>'
        })
    })
    .catch(function(error){
        console.log(error)
    })

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