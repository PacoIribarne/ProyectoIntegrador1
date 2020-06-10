let endpointSearch = "https://api.deezer.com/search?q=";

var queryString = location.search;

var queryStringObj = new URLSearchParams (queryString);

let search = queryStringObj.get ("search");

let proxy = "https://cors-anywhere.herokuapp.com/";


let url = proxy + "https://api.deezer.com/search?q=" + search;

fetch(url)
    .then (function (response){
        return response.json()
    })
    .then (function (datos){
        let lista = document.querySelector(".lista")
        let resultados = datos.data;
        console.log (datos) 
        resultados.forEach(function(resultado){
            lista.innerHTML += '<li> <a class="li" href="detailartist.html?id=' + resultado.artist.id + '"> <img src="' + resultado.artist.picture_medium + '"> <p>' + resultado.artist.name + '</p> </a> </li>'
            lista.innerHTML += '<li> <a class="li" href="detailtrack.html?id=' + resultado.id + '"> <img src="' + resultado.album.cover_medium + '"> <p>' + resultado.title + '</p> </a> </li>'
            lista.innerHTML += '<li> <a class="li" href="detailalbum.html?id=' + resultado.album.id + '"> <img src="' + resultado.album.cover_medium + '"> <p>' + resultado.album.title + '</p> </a> </li>'
        })       
        
       
    })
    .catch(function(error){
        console.log(error)
    })


