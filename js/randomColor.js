
// random color generator 
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
   return color;
}

const randomColors = document.getElementsByClassName("randomColors-div");
// console.log(randomColors);
for(const randomColor of randomColors) {
    randomColor.addEventListener("mouseover",function(){
        randomColor.style.backgroundColor = getRandomColor();
    })
    randomColor.addEventListener("mouseleave",function(){
        randomColor.style.backgroundColor = "white";
    })
}
