var cards = document.querySelectorAll('.card');
var plyr1 = 0;
var plyr2 = 0;
var gamescore1 = 0;
var gamescore2 = 0;
var setscore1 = 0;
var setscore2 = 0;
var serveplyr = 2;
document.getElementById("plyr2serve").style.opacity = "0";
[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});
function player1(){
    if (plyr1 === 0){

        plyr1 = 15;
        document.getElementById("plyr1back").innerHTML = "15"
        document.getElementById("plyr1front").innerHTML = "15"
    }
    else if(plyr1 === 15){
        plyr1 = 30;
        document.getElementById("plyr1front").innerHTML = "30"
        document.getElementById("plyr1back").innerHTML = "30"
    }
    else if(plyr1 === 30){
        plyr1 = 40;
        document.getElementById("plyr1back").innerHTML = "40"
        document.getElementById("plyr1front").innerHTML = "40"
    }
    else if(plyr1 === 40){
        if (plyr2 < 40){
        plyr1 = 0;
        plyr2 = 0;
        plyr1game();
        serve()
        document.getElementById("plyr1front").innerHTML = "0"
        document.getElementById("plyr2front").innerHTML = "0"
        document.getElementById("plyr2back").innerHTML = "0"
        document.getElementById("plyr1back").innerHTML = "0"
        }
        else if(plyr2 === 40){
            plyr1 = 50;
            document.getElementById("plyr1front").innerHTML = "AD"
            document.getElementById("plyr1back").innerHTML = "AD"
        }
        else if(plyr2 === 50){
            plyr2 = 40;
            plyr1 = 40;
            document.getElementById("plyr1front").innerHTML = "40";
            document.getElementById("plyr2front").innerHTML = "40";
            document.getElementById("plyr1back").innerHTML = "40";
            document.getElementById("plyr2back").innerHTML = "40"
         }
    }
    else if(plyr2 === 50){
        plyr2 = 40;
        plyr1 = 40;
        document.getElementById("plyr1front").innerHTML = "40";
        document.getElementById("plyr2front").innerHTML = "40";
        document.getElementById("plyr1back").innerHTML = "40";
        document.getElementById("plyr2back").innerHTML = "40"
     }
    else if(plyr1 === 50){
        plyr2 = 0;
        plyr1 = 0;
        plyr1game()
        serve()
        document.getElementById("plyr1back").innerHTML = "0";
        document.getElementById("plyr2back").innerHTML = "0";
        document.getElementById("plyr1front").innerHTML = "0";
        document.getElementById("plyr2front").innerHTML = "0"
     }
}
function player2(){
    if (plyr2 === 0){

        plyr2 = 15;
        document.getElementById("plyr2back").innerHTML = "15"
        document.getElementById("plyr2front").innerHTML = "15"
    }
    else if(plyr2 === 15){
        plyr2 = 30;
        document.getElementById("plyr2front").innerHTML = "30"
        document.getElementById("plyr2back").innerHTML = "30"
    }
    else if(plyr2 === 30){
        plyr2 = 40;
        document.getElementById("plyr2back").innerHTML = "40"
        document.getElementById("plyr2front").innerHTML = "40"
    }
    else if(plyr2 === 40){
        if (plyr1 < 40){
        plyr1 = 0;
        plyr2 = 0;
        plyr2game()
        serve()
        document.getElementById("plyr1front").innerHTML = "0"
        document.getElementById("plyr2front").innerHTML = "0"
        document.getElementById("plyr2back").innerHTML = "0"
        document.getElementById("plyr1back").innerHTML = "0"
        }
        else if(plyr1 === 40){
            plyr2 = 50;
            document.getElementById("plyr2front").innerHTML = "AD"
            document.getElementById("plyr2back").innerHTML = "AD"
        }
        else if(plyr1 === 50){
            plyr2 = 40;
            plyr1 = 40;
            document.getElementById("plyr1front").innerHTML = "40";
            document.getElementById("plyr2front").innerHTML = "40";
            document.getElementById("plyr1back").innerHTML = "40";
            document.getElementById("plyr2back").innerHTML = "40"
         }
    }
    else if(plyr1 === 50){
        plyr2 = 40;
        plyr1 = 40;
        document.getElementById("plyr1front").innerHTML = "40";
        document.getElementById("plyr2front").innerHTML = "40";
        document.getElementById("plyr1back").innerHTML = "40";
        document.getElementById("plyr2back").innerHTML = "40"
     }
    else if(plyr2 === 50){
        plyr2 = 0;
        plyr1 = 0;
        plyr2game()
        serve()
        document.getElementById("plyr1back").innerHTML = "0";
        document.getElementById("plyr2back").innerHTML = "0";
        document.getElementById("plyr1front").innerHTML = "0";
        document.getElementById("plyr2front").innerHTML = "0"
     }
}
function plyr1game(){
    gamescore1 = gamescore1+1;
    if (gamescore1===7){
        if(setscore1 === 0){
        document.getElementById("set1plyr1").innerHTML = "6"
    }
        else if(setscore1 === 1){
        document.getElementById("set2plyr1").innerHTML = "6"
    }
        else if(setscore1 === 2){
        document.getElementById("set3plyr1").innerHTML = "6"
    }
        else if(setscore1 === 3){
        document.getElementById("set4plyr1").innerHTML = "6"
    }
        else if(setscore1 === 4){
        document.getElementById("set5plyr1").innerHTML = "6"
    }
        gamescore1 = 1;
        gamescore2 = 0;
        setscore1 = setscore1+1;
    }
    if(setscore1 === 0){
        document.getElementById("set1plyr1").innerHTML = gamescore1
    }
        else if(setscore1 === 1){
        document.getElementById("set2plyr1").innerHTML = gamescore1
    }
        else if(setscore1 === 2){
        document.getElementById("set3plyr1").innerHTML = gamescore1
    }
        else if(setscore1 === 3){
        document.getElementById("set4plyr1").innerHTML = gamescore1
    }
        else if(setscore1 === 4){
        document.getElementById("set5plyr1").innerHTML = gamescore1
    }
        else if(setscore1 === 5){
        console.log("plyr1")
    }
}
function plyr2game(){
    gamescore2 = gamescore2+1;
    if (gamescore2===6){
        if(setscore1 === 0){
            document.getElementById("set1plyr2").innerHTML = "6"
        }
        if(setscore1 === 1){
            document.getElementById("set2plyr2").innerHTML = "6"
        }
        if(setscore1 === 2){
            document.getElementById("set3plyr2").innerHTML = "6"
        }
        if(setscore1 === 3){
            document.getElementById("set4plyr2").innerHTML = "6"
        }
        if(setscore1 === 4){
            document.getElementById("set5plyr2").innerHTML = "6"
        }
        gamescore1 = 0;
        gamescore2 = 0;
        setscore1 = setscore1+1;
    }
    if(setscore1 === 0){
        document.getElementById("set1plyr2").innerHTML = gamescore2
    }
    else if(setscore1 === 1){
        document.getElementById("set2plyr2").innerHTML = gamescore2
    }
    else if(setscore1 === 2){
        document.getElementById("set3plyr2").innerHTML = gamescore2
    }
    else if(setscore1 === 3){
        document.getElementById("set4plyr2").innerHTML = gamescore2
    }
    else if(setscore1 === 4){
        document.getElementById("set5plyr2").innerHTML = gamescore2
    }
}
function serve(){
    if(serveplyr ===1){
        document.getElementById("plyr2serve").style.opacity = "0";
        document.getElementById("plyr1serve").style.opacity = "1";
        serveplyr = 2
    }
    else if(serveplyr === 2){
        document.getElementById("plyr1serve").style.opacity = "0";
        document.getElementById("plyr2serve").style.opacity = "1";
        serveplyr =1;
    }
}