console.log("welcome")
// initialize the variables : 
let songIndex = 0
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById('masterSongName');


let songs = [
    { songName: "None copy righted songs 1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "None copy righted songs 2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "None copy righted songs 3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "None copy righted songs 4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "None copy righted songs 5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "None copy righted songs 6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "None copy righted songs 7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
]


// Handle play/pause click :
masterPlay.addEventListener('click', function () {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
}
)

// listening events :
audioElement.addEventListener('timeupdate', () => {
    // updating seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress;
})
// changing the seekbar : maza aagyaa . 
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

songItems.forEach((elem, i) => {

    elem.getElementsByTagName('img')[0].src = songs[i].coverPath;
    elem.getElementsByClassName('songName')[0].innerText = songs[i].songName;

})

function makeAllPlays() {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((ele) => {
    ele.addEventListener('click', (e) => {
        songIndex = parseInt(e.target.id);
        makeAllPlays()
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        gif.style.opacity = 1;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        masterSongName.innerText=songs[songIndex-1].songName


    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex < 7) {
        songIndex += 1

    }
    else {
        songIndex = 1

    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex > 1) {
        songIndex -= 1

    }
    else {
        songIndex = 7

    }
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})