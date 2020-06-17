let endpointSearch = "https://api.deezer.com/search?q=";

var queryString = location.search;

var queryStringObj = new URLSearchParams (queryString);

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
  });

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
            lista.innerHTML += '<a class="resultado" href="detailartist.html?id=' + resultados[i].artist.id + '"> <img src="' + resultados[i].artist.picture_medium + '"> <p>' + resultados[i].artist.name + ' - Artist </p> </a>'
        }
        for(let i = 0; i < 10; i++){
            lista.innerHTML += '<a class="resultado" href="detailtrack.html?id=' + resultados[i].id + '"> <img src="' + resultados[i].album.cover_medium + '"> <p>' + resultados[i].title + ' - Track</p> </a>'
        }
        for(let i = 0; i < 5; i++){
            lista.innerHTML += '<a class="resultado" href="detailalbum.html?id=' + resultados[i].album.id + '"> <img src="' + resultados[i].album.cover_medium + '"> <p>' + resultados[i].album.title + ' - Album </p> </a>'
        }
        //resultados.forEach(function(resultado){
            

        
        //})       
        
       
    })
    .catch(function(error){
        console.log(error)
    })


