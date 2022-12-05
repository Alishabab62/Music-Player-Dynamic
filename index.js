const backgroundImage=document.getElementById('animations');
const prev=document.getElementById('prev');
const play=document.getElementById('play');
const next=document.getElementById('next');
const songName=document.getElementById('song-name');


const songList=[
    {
        songUrl:"./songs/kaala jaadu.mp3",
        songName:"Kaala Jaadu",
        songImage:"('image/kaala jaadu.jpg')"
    },
    {
        songUrl:"./songs/kesariya.mp3",
        songName:"Kesariya",
        songImage:"('image/kesariya.jpg')"
    },
    {
        songUrl:"./songs/tu saamne aaye.mp3",
        songName:"Tu Saamne Aaye",
        songImage:"('image/tu saamne aaye.jpg')"
    }
]

let i=0;
let flag=false

    let audio = new Audio(songList[i].songUrl);
    backgroundImage.style.backgroundImage=`URL${songList[i].songImage}`
    songName.innerHTML=songList[i].songName;


play.addEventListener('click',playSong);
next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);

function playSong(){
    if(flag==false){
        audio.play();
        flag=true;
    }
    else{
        console.log('pause')
        audio.pause();
        flag=false;
    }
}


function nextSong(){
    audio.pause();
    flag=false;
    i=i+1;
    if(i>=songList.length){
        i=0;
    }
    audio = new Audio(songList[i].songUrl);
    backgroundImage.style.backgroundImage=`URL${songList[i].songImage}`
    songName.innerHTML=songList[i].songName;
    if(flag==false){
        audio.play();
        flag=true;
    }
}


function prevSong(){
    console.log(songList[i].songUrl)
    audio.pause();
    flag=false;
    i=i-1;
    if(i<=0){
        i=songList.length-1;
    }
    audio = new Audio(songList[i].songUrl);
    backgroundImage.style.backgroundImage=`URL${songList[i].songImage}`
    songName.innerHTML=songList[i].songName;
    if(flag==false){
        audio.play();
        flag=true;
    }
    console.log(songList[i].songUrl)

}


