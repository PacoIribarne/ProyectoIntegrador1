let proxi = 'https://cors-anywhere.herokuapp.com/'
let endpointGenres = 'https://api.deezer.com/genres'


fetch(proxi+endpointGenres)
    .then(function(dataJson){
        return dataJson.json();
    })
    .then(function(dataGenres){
        let total = document.querySelector('.total');
        console.log(dataGenres)
    })