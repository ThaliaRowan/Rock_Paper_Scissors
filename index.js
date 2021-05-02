let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let playerImg1 = document.getElementById('SecImg1');
let playerImg2 = document.getElementById('SecImg2');
let playerImg3 = document.getElementById('SecImg3');
let row3 = document.getElementById("row3");
let group1 = new Array(img1, img2, img3);
let random = group1[Math.floor(Math.random() * group1.length)];
let starter = "Rock! Paper! Scissors! Shoot!";
let words = starter.split(" ")
let mainEl = document.getElementById("startEl");
let bodyEl = document.createElement("div");
let replay = document.getElementById("playAgain");

let newPlay;

let i = 0;

function myPlay1(){

    newPlay = document.getElementById("SecImg1");
    
    newPlay.style.border = "2px solid blue";
    speedRead();
    
}


function myPlay2(){
    newPlay = document.getElementById("SecImg2");
    
    newPlay.style.border = "2px solid blue";
    speedRead()
}

function myPlay3(){
    newPlay = document.getElementById("SecImg3");
    
    newPlay.style.border = "2px solid blue";
    speedRead()
    
}

function speedRead() {
    mainEl.append(bodyEl);
  
     setInterval(function() {
        if (words[i] === undefined) {
            clearInterval();
            random.style.border = "2px solid red";
            setInterval(function(){
                Results();
                replay.style.visibility="visible";
            }, 1000)
            
          } else {
                   
        mainEl.textContent = words[i];
        i++;
          } 
       
  
    }, 1000);
  }
  
  
function Results(){
    if(random === img1 && newPlay == playerImg2){
        mainEl.textContent = "Wow you won!"
    } else if 
        (random == img1 && newPlay == playerImg3){
            mainEl.textContent = "lol you Lost!"
        } else if ( random == img1 && newPlay == playerImg1 ){
            mainEl.textContent = "It's a draw!"
        } else if(random == img2 && newPlay == playerImg1){
            mainEl.textContent = "lol you Lost!"
        }else if(random == img2 && newPlay == playerImg2){
            mainEl.textContent = "It's a draw!"
        }else if(random == img2 && newPlay == playerImg3){
            mainEl.textContent = "Wow you won!"
        }else if(random == img3 && newPlay == playerImg1){
            mainEl.textContent = "Wow you won!"
        }else if(random == img3 && newPlay == playerImg2){
            mainEl.textContent = "lol you Lost!"
        } else if(random == img2 && newPlay == playerImg3){
            mainEl.textContent = "It's a draw!"
        } else {
            mainEl.textContent = "Not Working :("
        }
    }

    