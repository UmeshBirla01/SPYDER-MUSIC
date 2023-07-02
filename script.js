//variable intializing
let songIndex =0
let audioElement =new Audio('m1.mp3');
let gif =document.getElementById('gif')
let masterSongName =document.getElementById('masterSongName')
let masterPlay = document.getElementById('masterPlay') 
let myProgressBar = document.getElementById('myProgressBar')
let songItems = Array.from(document.getElementsByTagName("songItem"))
let songs =[
    {songName:"Let me love you",filepath:"m1.mp3",coverPath:"1.jpg"},
    {songName:"demo songs",filepath:"m2.mp3",coverPath:"2.jpg"},
    {songName:"jaane de",filepath:"m3.mp3",coverPath:"3.jpg"},
    {songName:"sona re",filepath:"m4.mp3",coverPath:"4.jpg"},
    {songName:"Stitches",filepath:"m5.mp3",coverPath:"5.jpg"},
    {songName:"Stitches",filepath:"m6.mp3",coverPath:"6.jpg"},
]
console.log(songs)

songItems.forEach((element,i)=>{
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName

})

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
       gif.style.opacity=1;
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity=0;
     }   
})

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
  //updAte seekbar
  progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =myProgressBar.value *audioElement.duration/100;
})

const makeAllplays=()=>
{Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>  {
     element.classList.remove('fa-pause-circle')
     element.classList.add('fa-play-circle')
       
    })}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
      element.addEventListener('click',(e)=>{
   
        makeAllplays();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src=`m${songIndex+1}.mp3`
        

       //audioElement.play()
       masterSongName.innerHTML=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play()
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
      })


document.getElementById("next").addEventListener('click',()=>{
   if(songIndex>=5){
    songIndex=0;
   }
   else{
    songIndex +=1
   
   }
   audioElement.src=`m${songIndex+1}.mp3`
       //audioElement.play()
       masterSongName.innerHTML=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play()
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})

document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
     songIndex=5;
    }
    else{
     songIndex -=1
    
    }
    audioElement.src=`m${songIndex+1}.mp3`
        //audioElement.play()
        masterSongName.innerHTML=songs[songIndex].songName;
         audioElement.currentTime=0;
         audioElement.play()
         gif.style.opacity=1;
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
 
 })
