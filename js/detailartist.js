let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idArtist = datos.get("id");

let proxy = "https://cors-anywhere.herokuapp.com/";
let urlArtist = proxy + "https://api.deezer.com/artist/" + idArtist;

fetch(urlArtist)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let h1 = document.querySelector('h1');
        let resultados = datos
        h1.innerHTML += datos.name
        let fotoArtista = document.querySelector('.fotoArtista');
        fotoArtista.src += datos.picture_big
        fotoArtista.alt = datos.name
        let fans = document.querySelector('.fans');
        fans.innerHTML += datos.nb_fan
        
    })
    .catch(function(error){
        console.log(error)
    })


