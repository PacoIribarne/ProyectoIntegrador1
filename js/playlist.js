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
        .then(function(track){
            playlistWrapper.innerHTML += '<li>'+ '<a class="cancion" href="detailtrack.html?id=' + track.id + '">' + track.title +'</a></li>'
        })
        .catch(function(error){
            console.log(error)
        })
}