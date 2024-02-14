
var audio = new Audio('075176_duck-quack-40345 (mp3cut.net).mp3');
var song = new Audio('Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3')

function addDavid(){
  document.getElementById("david-1").style["visibility"]="visible";
  document.getElementById("david-2").style["visibility"]="visible";
}

document.addEventListener('keydown', (event) => {
  audio.currentTime = 0  
  audio.play()
});

function f(){
  document.getElementById("duck").setAttribute("class","logo")
}

document.getElementById("btn").addEventListener('click',(event)=>{
    f()
    addDavid()
    song.play()
})



