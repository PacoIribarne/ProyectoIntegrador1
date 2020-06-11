let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idAlbum = datos.get("id");

let proxy = "https://cors-anywhere.herokuapp.com/";
let urlGenre = proxy + "https://api.deezer.com/album/" + idAlbum;

fetch(urlGenre)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos)
        let infoAlbum = document.querySelector('.infoAlbum');
        infoAlbum.innerHTML += '<h1>' + datos.title + '</h1>';
        infoAlbum.innerHTML += '<a href="detailartist.html?id=' + datos.artist.id + '"> <h2>' + datos.artist.name + '</h2> </a>';
        infoAlbum.innerHTML += '<p class="lanzamiento">' + datos.release_date + '</p>';
        infoAlbum.innerHTML += '<img class="imagenAlbum" src="' + datos.cover_big + '" alt="' + datos.title + '">'

        let listado = document.querySelector('.listado');
        for(let i=0 ; i < length ; i++){
            listado.innerHTML += '<li> <iframe scrolling="no" frameborder="0" allowTransparency="true" width="700" height="350" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=' + datos.tracks.data[i].id + '&app_id=1"></iframe> </li>'
        }
    })
    .catch(function(error){
        console.log(error);
    })




    
    // <li class="cancion">
                    
    // </li>
    // <li class="cancion">
    //     <img class="boton-play" src="../img/play.png" alt="">
    //     <p class="nombre">Canción 2</p>
    // </li>
    // <li class="cancion">
    //     <img class="boton-play" src="../img/play.png" alt="">
    //     <p class="nombre">Canción 3</p>
    // </li>
    // <li class="cancion">
    //     <img class="boton-play" src="../img/play.png" alt="">
    //     <p class="nombre">Canción 4</p>
    // </li>
    // <li class="cancion">
    //     <img class="boton-play" src="../img/play.png" alt="">
    //     <p class="nombre">Canción 5</p>
    // </li>
    // <li class="cancion">
    //     <img class="boton-play" src="../img/play.png" alt="">
    //     <p class="nombre">Canción 6</p>
    // </li>
    // <li class="cancion">
    //     <img class="boton-play" src="../img/play.png" alt="">
    //     <p class="nombre">Canción 7</p>
    // </li>











// let songs = ['../audio/spinetta.mp3'];
// let poster = ['../img/album4spinetta.jpg'];

// let songTitle = document.querySelector('.nombreTema');
// let fillBar = document.querySelector('.fill');

// let song = new Audio();
// let currentSong = 0;

// window.autoplay = playSong;

// function playSong(){
//     song.src = songs[currentSong];
//     songTitle.textContent = songs[currentSong];
//     song.play();
// }
// let play = document.querySelector('.play');
// play.onclick = function(){
//     if(song.paused){
//         song.play(); 
//         play.innerHTML = '<img src="../img/pause.png">'
//     }else{
//         song.pause();
//     }
// }

//--------
// let cancion = document.querySelector('.cancion')
// let play = document.querySelector('#play')
// let otroPlay = document.querySelector('.boton-play')
// let audio = document.querySelector('.audioque')

// otroPlay.onclick = function(){
//     audio.src = '../audio/spinetta.mp3'
//     otroPlay.onclick = function(){
    
    
//     }
// }

// play.onclick = function(){
//     if(song.paused){
//         song.play();
//         play.innerHTML = '<img src="../img/pause.png">';
//     }else{
//         song.pause();
//         play.innerHTML = '<img src="../img/play.png">';
//     }
// }

// ----------
// function createAudioPlayer() {
//     let audioPlayer = document.querySelector('.reproduccion');
//     let trackList = ['../audio/spinetta.mp3']
//     let trackListLen;
//     let currentTrack = 0;
//     let informationDiv;
//     let progressbar = document.querySelector('.seekbar');
//     let progressbarWidth = document.querySelector('.fill')
//     let progressmeter;
//     let tiempito = document.querySelector('.tiempito')

//     function play(){
//         audioPlayer.play();
//     }
//     function pause(){
//         audioPlayer.pause()
//     }
//     function seeking(e){
//         var percent = e.offsetX / progressbarWidth;
//         audioPlayer.currentTime = percent * audioPlayer.duration;
//     }
//     function displayTime(seconds){
//         var minutes = parseInt(seconds / 60);
//         var seconds = parseInt(seconds - minutes * 60);
//         return minutes + ':' + seconds;
//     }
//     function updateTime() {
//         tiempito.innerHTML =
//           displayTime(audioPlayer.currentTime) + ' / ' +
//           displayTime(audioPlayer.duration);
//         var percent = audioPlayer.currentTime / audioPlayer.duration;
//         progressmeter.style.width = (percent * progressbarWidth) + 'px';
//       }
//       function playCurrentTrack() {
//         audioPlayer.pause();
//         audioPlayer.src = trackList[currentTrack].src;
//         audioPlayer.load();
//         audioPlayer.play();
//         updateTime();
//     }

// }
// ----
// <div class="sonar">
//         <div class="infoTema">
//             <div class="nombreTema">Spinetta</div>
//             <div class="nombreArista">Spinetta</div>
//         </div>
//         <div class="reproduccion">
//             <div class="botones">
//                 <img  id="pre" src="../img/pre.png" alt="">
//                 <img id="play" src="../img/play.png" alt="">
//                 <img id="next" src="../img/next.png" alt="">
//             </div>
//             <div class="tiempo">
//                 <div class="seekbar">
//                     <div id="fill" ></div>
//                     <div id="handle" ></div>
//                 </div>
//                 <div class="numeros">
//                     <p class="tiempito"></p>
//                 </div>
//             </div>
//             <audio class="audioque" src=""></audio>
//         </div>
//     </div>
