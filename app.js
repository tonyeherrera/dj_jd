
var square = document.getElementById("square")
square.addEventListener( "mouseover", function blue(){
    this.style.backgroundColor = "blue";
});
square.addEventListener( "mousedown", function red(){
    this.style.backgroundColor = "red";
});
square.addEventListener( "mouseup", function yellow(){
    this.style.backgroundColor = "yellow";
});
square.addEventListener( "dblclick", function green(){
    this.style.backgroundColor = "green";
});
document.addEventListener( "scroll", function orange(){
    square.style.backgroundColor = "orange";
});

document.addEventListener('keyup', (event) => {
    if (event.key == 'r') {
        square.style.backgroundColor = "red";
        // square.style.borderColor = "red";
        
    }
    if (event.key == 'b') {
        square.style.backgroundColor = "blue";
        
    }
    if (event.key == 'y') {
        square.style.backgroundColor = "yellow";
        
    }
    if (event.key == 'g') {
        square.style.backgroundColor = "green";
        
    }
    if (event.key == 'o') {
        square.style.backgroundColor = "orange";
        
    }
 });