



var name1 = localStorage.getItem("player1");


var name2 = localStorage.getItem("player2");

var p1 = document.querySelectorAll("p")[0];
var p2 = document.querySelectorAll("p")[1];

if(name1 == undefined) {
    name1 = prompt("Enter player 1 name");
    localStorage.setItem("player1", name1); 
    p1.innerText = name1;
}

else {
    p1.innerText = localStorage.getItem("player1");
}

if(name2 == undefined) {
    name2 = prompt("Enter player 2 name");
    localStorage.setItem("player2", name2); 
    p2.innerText = name2;
}

else {
    p2.innerText = localStorage.getItem("player2");
}

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDice1 = "images/dice" + randomNumber1 + ".png";

var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src",randomDice1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDice2 = "images/dice" + randomNumber2 + ".png";
var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src",randomDice2);




if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = (" 🚩" + name1 +" wins");
    var audio1 = new Audio( '/tak-47008.mp3');
    audio1.play()   
}
else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = ("🚩 Draw! 🚩");
    
}
else{
    document.querySelector("h1").innerHTML = ( name2 + "  wins"+" 🚩" );
    var audio2 = new Audio('/tak-47008.mp3');
    audio2.play() 
}

document.querySelector(".reload").addEventListener("click",reloadPage);
document.querySelector(".new").addEventListener("click",newPlayers);



function reloadPage() {
    location.reload();
    
    
    
}



function newPlayers(){
    localStorage.clear();
    
    location.reload();

}