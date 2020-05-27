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

let cancion = document.querySelector('.cancion')
let play = document.querySelector('#play')
let otroPlay = document.querySelector('.boton-play')
var isPlaying = false;

addEventListener.otroPlay('click', function(){
    var reproduciendo = document.querySelector('.botones');
    let song = reproduciendo.innerHTML += '<audio autoplay src="../audio/spinetta.mp3"></audio>';
    if(song.paused){
        song.play();
        otroPlay.innerHTML = '<img src"../img/pause.png">';
    }else{
        song.pause();
        otroPlay.innerHTML = '<img src"../img/play.png">';
    }
})
play.onclick = function(){
    if(song.paused){
        song.play();
        play.innerHTML = '<img src"../img/pause.png">';
    }else{
        song.pause();
        play.innerHTML = '<img src"../img/play.png">';
    }
}
