const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("Play");
   const artist = document.getElementById("artist");
    const title = document.getElementById("title");
    let progress = document.getElementById("progress");

   const prev = document.getElementById("prev");
   const Next = document.getElementById("next");

   const songs = [{
       name:"song1",
       title: "IGNITE",
       artist: "Alan Walker",
   },
   {
       name:"song2",
       title: "HASTA LUEGO",
       artist: "HRVY",
   },
   {
       name:"song3",
       title: "TALK",
       artist: "Salvatore Ganacci",
   },
   
   {
       name:"song4",
       title: "ME ENAMORE",
       artist: "Shakira",
   },
   {
       name:"song5",
       title: "ALL NIGHT",
       artist: "Icona Pop",
   },
   {
       name:"song6",
       title: "REALITY",
       artist: "Lost Frequencies",
   },
   {
       name:"song7",
       title: "LIMBO",
       artist: "Daddy Yankee",
   },
   {
       name:"song8",
       title: "JUST A DREAM",
       artist: "Nelly",
   },
   {
       name:"song9",
       title: "APOLLO",
       artist: "Nightcore",
   },
   {
       name:"song10",
       title: "CRIMINAL",
       artist: "Britney Spears",
   },
   {
       name:"song11",
       title: "ASTRONAUT IN THE OCEAN ",
       artist: "Masked Wolf",
   },
];

   let isPlaying = "true";

const  playMusic = () =>{
  isPlaying = true;
  music.play(); 
  play.classList.replace('fa-play',"fa-pause"); 
  img.classList.add("anime");
};

const pauseMusic = () =>{
  isPlaying = false;
  music.pause(); 
  play.classList.replace("fa-pause","fa-play"); 
  img.classList.remove("anime");
};

play.addEventListener('click',() => {
    isPlaying ?  pauseMusic() :  playMusic();
    
});

music.onloadedmetadata = function(){
    progress.max = music.duration;
    progress.value = music.currentTime;
}

if(music.play()){
    setInterval(()=>{
        progress.value = music.currentTime;
    },500)
}
progress.onchange= function(){
    music.play();
    music.currentTime=progress.value;
    
}

//  //changing the music data//

 const loadsong = (songs) =>{
     title.textContent = songs.title;
     artist.textContent = songs.artist;
     music.src = "song/"+songs.name+".mp3";
     img.src ="images/" +songs.name+".jpg";
  };
  songindex = 0;
 loadsong(songs[songindex]);
 const nextSong = () => {
    songindex = (songindex + 1) % songs.length;
    loadsong(songs[songindex]);
    playMusic();
 };

const prevSong = () => {
   songindex = (songindex - 1 + songs.length) % songs.length;
   loadsong(songs[songindex]);
    playMusic();
 };

 next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);