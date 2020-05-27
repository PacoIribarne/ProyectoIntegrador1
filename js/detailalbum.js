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
let cancion = document.querySelector('.cancion')
let play = document.querySelector('#play')
let otroPlay = document.querySelector('.boton-play')
let audio = document.querySelector('.audioque')

otroPlay.onclick = function(){
    audio.src = '../audio/spinetta.mp3'
    otroPlay.onclick = function(){
    
    
    }
}

play.onclick = function(){
    if(song.paused){
        song.play();
        play.innerHTML = '<img src="../img/pause.png">';
    }else{
        song.pause();
        play.innerHTML = '<img src="../img/play.png">';
    }
}

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
