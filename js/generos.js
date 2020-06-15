window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
  });
  
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
            generos.innerHTML += '<a class="portadagenero" href="detailgenre.html?id=' + genres.id + '">' +'<img class="individual" src="'+ genres.picture_medium  +  '"><p class="nombre">' + genres.name + '</p>';
        })
    })
    .catch(function(error){
        console.log(error);
    });