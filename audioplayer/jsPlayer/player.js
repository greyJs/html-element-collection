'use strict';
let btn_playstate = document.getElementsByClassName('playstate')[0];
let mediaplayer = document.getElementsByClassName('mediaplayer')[0];
let audio = document.getElementsByTagName('audio')[0];

//play pause

btn_playstate.onclick = function(){
    if (mediaplayer.classList.contains('play')) {
         mediaplayer.classList.remove('play');
        audio.pause();
        }else{
            mediaplayer.classList.add('play');
            audio.play();
        };
};

//stop

let stopBtn = document.getElementsByClassName('stop')[0];
stopBtn.onclick = function(){
    mediaplayer.classList.remove('play');
    audio.pause();
    audio.currentTime = 0;
};

//back next title

let sound = [
    "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Chill%20Tour.mp3",
    "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This%20is%20it%20band.mp3",
    "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Fusion%20Jam.mp3"];

let counterSound = 0;

let title = document.getElementsByClassName('title')[0];
let soundTitle = ["LA Chill Tour", 
                  "This is it band", 
                  "LA Fusion Jam"];

//back
let backBtn = document.getElementsByClassName('back')[0];
backBtn.onclick = function(){
    if(counterSound >= 1){
        counterSound--;
        } else {
        counterSound = sound.length - 1;
    };
    mediaplayer.classList.add('play');
    audio.src = sound[counterSound];
    title.title = soundTitle[counterSound];
    audio.play();
};
//next
let nextBtn = document.getElementsByClassName('next')[0];
nextBtn.onclick = function(){
    if(counterSound < sound.length -1){
        counterSound++;
        } else {
        counterSound = 0;
    };
    mediaplayer.classList.add('play');
    audio.src = sound[counterSound];
    title.title = soundTitle[counterSound];
    audio.play();
};

