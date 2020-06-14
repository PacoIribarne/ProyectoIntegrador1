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

        for(let i = 0; i < 10 ; i++){
            lista.innerHTML += '<li> <a class="li" href="detailartist.html?id=' + resultados[i].artist.id + '"> <img src="' + resultados[i].artist.picture_medium + '"> <p>' + resultados[i].artist.name + ' - Artist </p> </a> </li>'
        }
        for(let i = 0; i < 10; i++){
            lista.innerHTML += '<li> <a class="li" href="detailtrack.html?id=' + resultados[i].id + '"> <img src="' + resultados[i].album.cover_medium + '"> <p>' + resultados[i].title + ' - Track</p> </a> </li>'
        }
        for(let i = 0; i < 5; i++){
            lista.innerHTML += '<li> <a class="li" href="detailalbum.html?id=' + resultados[i].album.id + '"> <img src="' + resultados[i].album.cover_medium + '"> <p>' + resultados[i].album.title + ' - Album </p> </a> </li>'
        }
        //resultados.forEach(function(resultado){
            

        
        //})       
        
       
    })
    .catch(function(error){
        console.log(error)
    })


