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

    let urlArtistTop = proxy + "https://api.deezer.com/artist/" + idArtist + "/top";

    fetch(urlArtistTop)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let canciones = document.querySelector('.canciones');
        for(let i=0 ; i < 5 ; i++){
        canciones.innerHTML += '<li> <iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=' + datos.data[i].id + '&app_id=1"></iframe> <a href= "detailtrack.html?id='+ datos.data[i].id  + '"class="agregar"> Ir a track </a> </li>'
        }
        console.log(datos)
    })
    .catch(function(error){
        console.log(error)
    })

    let urlAlbums = proxy + "https://api.deezer.com/artist/" + idArtist + "/albums";
    
    fetch(urlAlbums)
     .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let albumes = document.querySelector(".albumes")
        let respuestas = datos.data
        for(let i=0 ; i < 5 ; i++){
            albumes.innerHTML += ' <a href = "../html/detailalbum.html?id= '+ datos.data[i].id +' " > <img class="album" src="'+ datos.data[i].cover_medium +'" alt="album" height="140vh">' + '<p class="nombreAlbum">'+ datos.data[i].title+ '</p></a>'
        }
        console.log(datos);

    })
    .catch(function(error){
        console.log(error)
    })
    
    // <li class="cancion">
    //             <img class="boton-play" src="../img/play.png" alt="">
    //             <p class="nombre">Canción 1</p>
    //         </li>
    //         <li class="cancion">
    //             <img class="boton-play" src="../img/play.png" alt="">
    //             <p class="nombre">Canción 2</p>
    //         </li>
    //         <li class="cancion">
    //             <img class="boton-play" src="../img/play.png" alt="">
    //             <p class="nombre">Canción 3</p>
    //         </li>
    //         <li class="cancion">
    //             <img class="boton-play" src="../img/play.png" alt="">
    //             <p class="nombre">Canción 4</p>
    //         </li>
    //         <li class="cancion">
    //             <img class="boton-play" src="../img/play.png" alt="">
    //             <p class="nombre">Canción 5</p>
    //         </li>


