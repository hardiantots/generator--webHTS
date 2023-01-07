const button = document.querySelector(".color__button");
const colorView = document.querySelectorAll(".color__view");
const hexColor = document.querySelectorAll(".hex__color");

button.addEventListener("click", generateColors);

function generateColors(){
    for(let i=0; i<colorView.length; i++){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);

        colorView[i].style.background = "#" + randomColor;
        colorView[i].classList.add('fade-in');

        setTimeout(() => colorView[i].classList.remove('fade-in'), 400);
        
        hexColor[i].innerHTML = randomColor;
    }
}

window.onload = generateColors();