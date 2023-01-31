const containerEl = document.querySelector(".container");
const buttonEl = document.getElementById("button");
for(let i = 0; i < 32; ++i) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("container-section");
    containerEl.appendChild(colorContainerEl);
}
const colorContainerEls = document.querySelectorAll(".container-section");

function generateColors() {
     colorContainerEls.forEach(colorContainerEl => { 
        let newRandomColor = randomColor();
        colorContainerEl.style.backgroundColor = `#${newRandomColor}`;
        colorContainerEl.innerHTML = `#${newRandomColor}`;
     })
}
function randomColor() {
    const chars = "0123456789abcdef";
    let newColor = [];    
    for(let i = 0; i < 6; ++i ) {
        const randomNum = Math.floor(Math.random()*chars.length);
       
       const colorCharacter = chars.substring(randomNum,randomNum+1);
       newColor += colorCharacter;
      
    }
    return newColor;
}
generateColors();
buttonEl.addEventListener("click", () => {
    window.location.reload();
})









