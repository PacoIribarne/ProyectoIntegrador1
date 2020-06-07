let proxi = 'https://cors-anywhere.herokuapp.com/';
let url = proxi + 'https://api.deezer.com/genre';

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let generos = document.querySelector('.generos');
        console.log(datos);
        let resultados = datos.data;
        resultados.forEach(function(genres){
            generos.innerHTML += '<div class="portadagenero">' + '<a href="detailgenre.html?id=' + genres.id + '">' +'<img src="'+ genres.picture_medium  +  '">' + genres.name + '</div>';
        })
    })
    .catch(function(error){
        console.log(error);
    });