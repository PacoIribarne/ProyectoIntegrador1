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
        array.forEach(element => {
            
        });
       console.log (datos) 
    })
    .catch(function(error){
        console.log(error)
    })


