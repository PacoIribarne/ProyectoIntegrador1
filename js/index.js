let urltrack = 'https://developers.deezer.com/api/artist '

fetch (urltrack)
    .then(function(response){
        return response.json();
    })
    .then(function(datatrack){
        console.log(datatrack.name[0]);
    })