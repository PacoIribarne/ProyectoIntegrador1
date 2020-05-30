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

        resultados.forEach(function(resultado){
            lista.innerHTML+= "<li>"  + "<img src='" + resultado.album.cover_medium  +  "'>"  + resultado.title +  "</li>" })
       console.log (datos) 
       
    })

    .catch(function(error){
        console.log(error)
    })


