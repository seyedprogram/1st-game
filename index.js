var min = 0, sec = 0, csec = 0;
var timer = 0;
var i = 0;
var numOfChar;
const chars = ["a", "b", "c","d", "e", "f", "g", "h","i", "j", "k", "l", "m","n", "o", "p", "q", "r","s", "t", "u", "v", "w","x", "y", "z"]
function ClickButton() {
    i += 1;
    if (i % 2 == 1) {
        start();
    } else {
        reset();
    }
}
function TimerText(number){
    if(number<10){
        number="0"+number;
    }
    return number;
}
function start() {
    timer = setInterval(function () {
        csec += 1;
        if (csec >= 100) {
            csec = 0;
            sec += 1;
        }
        if (sec >= 60) {
            sec = 0;
            min += 1
        }
        document.getElementById('timer').innerHTML = TimerText(min) + ":" + TimerText(sec) + ":" + TimerText(csec);

        document.getElementById('button').innerHTML = "reset"

    }, 10)

}

function reset() {
    var reset = document.getElementById('button').innerHTML;
    document.getElementById('button').innerHTML = "start";
    min = 0;
    sec = 0;
    csec = 0;
    document.getElementById('timer').innerHTML = TimerText(min) + ":" + TimerText(sec) + ":" + TimerText(csec);
    clearInterval(timer);
}
var randChar;
function random(){
    numOfChar = Math.floor(Math.random()*26)
    randChar=chars [numOfChar];
    document.getElementById('char').innerHTML= randChar;
}
function key(value){
    console.log(value);
}
var pressed='';
var tedad =0;
document.onkeydown = function (e) {
    pressed=e.key;
    if(pressed==randChar){
        random();
        tedad +=1;
        if(tedad%10==0){
            clearInterval(timer);
        }
    }
    else{
        alert( "please enter the correct letter");
    }
    
  }