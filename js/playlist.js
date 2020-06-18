let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);
let playlistWrapper = document.querySelector('.playlistWrapper');

playlist.forEach(function(idTrack){
    buscarYMostrarTrack(idTrack);
});

function buscarYMostrarTrack(idTrack){
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = proxy + 'https://api.deezer.com/track/' + idTrack;

    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            playlistWrapper.innerHTML += '<li>'+ '<a class="cancion" href="detailtrack.html?id=' + datos.id + '">' + datos.title +'</a> <iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=' + datos.id + '&app_id=1"></iframe></li>'
            console.log(datos);
        })
        .catch(function(error){
            console.log(error)
        })
}

if(recuperoStorage == null || recuperoStorage == "[]"){
    playlist = [];
    playlistWrapper.innerHTML += '<li> No hay canciones en tu playlist </li>'
    console.log(playlistWrapper);
    
} 