var sp1 = document.querySelector("#sp1disp");
var sp2 = document.querySelector("#sp2disp"); 

var bu1 = document.querySelector("#b1");
var bu2 = document.querySelector("button:nth-of-type(2)");

var numinput = document.querySelector("input[type=number]");
var tempval = document.getElementById("playto");

var win=5;
numinput.addEventListener("change",function(){
    tempval.textContent = numinput.value;
    win=Number(numinput.value);
    reset();
});

console.log(win);



var p1score=0,p2score=0;
var gameOver =false ;
bu1.addEventListener("click",function(){
    if(!gameOver){
        p1score++;
        sp1.textContent= p1score;
        if(p1score === win){
            gameOver=true;
            sp1.style.color = "green";
        }

    }
});
gameOver = false;
bu2.addEventListener("click",function(){
    if(!gameOver){
        p2score++;
        sp2.textContent= p2score;
        if(p2score === win){
            gameOver=true;
            sp2.style.color = "green";
        }
    }
});


rtype = document.querySelector("#reset");
rtype.addEventListener("click",function(){
    reset();
});

function reset(){
    p1score=0;
    p2score=0;
    sp1.textContent = 0;
    sp2.textContent = 0;
    sp1.style.color = "pink" ;
    sp2.style.color = "pink";
    gameOver = false;
}