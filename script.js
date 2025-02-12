console.log("welcome")
// initialize the variables : 
let songIndex = 0 
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')
let songs = [
    {songName : "Salem-e-ishq",filePath : "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName : "Salem-e-ishq",filePath : "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName : "Salem-e-ishq",filePath : "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName : "Salem-e-ishq",filePath : "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName : "Salem-e-ishq",filePath : "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName : "Salem-e-ishq",filePath : "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName : "Salem-e-ishq",filePath : "songs/1.mp3",coverPath:"covers/1.jpg"},
]


// Handle play/pause click :
masterPlay.addEventListener('click' , function (){
    if(audioElement.paused || audioElement.currentTime <= 0 ){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1 ;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }  
}
)

// listening events :
audioElement.addEventListener('timeupdate',()=>{
    console.log("timeupdate");
    // updating seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;
    
    


})
