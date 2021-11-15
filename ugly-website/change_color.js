document.getElementById("refill").addEventListener("click", changeColor);
var melon = document.getElementById("refill");

// Click on the melon to change the color of it!
function changeColor(){
     if (melon.style.fill === "red"){
     melon.setAttribute("style", "fill: rgb(255,240,70)");
     }else{
     melon.setAttribute("style", "fill: red");
     }
}