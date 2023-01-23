let vid=document.getElementById("video");
let speedRange=document.getElementById("speedRange");
let volumeRange=document.getElementById("volumeRange");
let mutted=document.getElementById("mutted");
function play()
{
    vid.play();
}
function stop()
{
  
    vid.pause();
}
function alwaysStart()
 { 
    vid.currentTime=0;
    vid.play();
 } 
 function alwaysEnd()
 { 
    vid.currentTime=110;
 } 
 function backTenSec()
 {
    vid.currentTime=vid.currentTime - 10;
 }
 function forwardTenSec()
 {
    vid.currentTime=vid.currentTime +10;
 }
 
 vid.addEventListener("timeupdate",function(){
   let range=document.getElementById("range");
   range.value=vid.currentTime;
 })
 mutted.onclick=()=>
 {
    vid.muted=!vid.muted;
    if(vid.muted)
    {
      volumeRange.value=0;
    }
    else{
      volumeRange.value=vid.volume*100;
    }
    
 }

 speedRange.onchange=function()
 {
    vid.playbackRate=Math.floor(this.value)/10;
 }
 volumeRange.onchange=function()
 {    
    vid.volume=Math.floor(this.value)/100;
 }

 