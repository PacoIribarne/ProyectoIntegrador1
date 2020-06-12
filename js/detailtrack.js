let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idTrack = datos.get("id");

let proxy = "https://cors-anywhere.herokuapp.com/";
let urlTrack = proxy + "https://api.deezer.com/track/" + idTrack;

fetch(urlTrack)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let h1 = document.querySelector('h1');
        h1.innerHTML = datos.title
        let h2 = document.querySelector('h2');
        h2.innerHTML += '<a class="h2" href="../html/detailartist.html?id=' + datos.artist.id + '">' + datos.artist.name + '</a>'
        let parteAlbum = document.querySelector('.album');
        parteAlbum.innerHTML += '<a href="../html/detailalbum.html?id=' + datos.album.id + '"><img class="fotoAlbum" src="' + datos.album.cover_big + '" alt=""></a>'
        parteAlbum.innerHTML += '<a href="../html/detailalbum.html?id=' + datos.album.id + '"><p class="nombreAlbum">Álbum: ' + datos.album.title + '</p></a>'
        let agregados = document.querySelector('.agregados');
        
        agregados.innerHTML += '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=' + datos.id + '&app_id=1"></iframe>'
        agregados.innerHTML += '<p class="duracion">Duración:' +  datos.duration + 's </p>'
        
        agregados.innerHTML += '<button class="agregar">Agregar a tu playlist</button>'
        // <a href="../html/detailalbum.html"><img class="fotoAlbum" src="../img/album4spinetta.jpg" alt=""></a>
        //         <a href="../html/detailalbum.html"><p class="nombreAlbum">Nombre del álbum</p></a>
    })
    .catch(function(error){
        console.log(error);
    })
