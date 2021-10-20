const container = document.querySelector('#container');
container.textContent = " ";
const initialGrid = () => {
    for(let i = 0; i < 256; i++) {
        const gridSquare = document.createElement('div')
        gridSquare.textContent = " "
        gridSquare.style.cssText = `width: ${600 / 16}px; height:${600 / 16}px`;
        gridSquare.classList.add(`grid-div`);
        gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = '#70221A';
    })
    container.appendChild(gridSquare);
    }
}
initialGrid()
const generateGrid = (size) => {
for(let i = 0; i < (size * size); i++) {
    const gridSquare = document.createElement('div');
    gridSquare.textContent = " ";
    gridSquare.style.cssText = `width: ${600 / size}px; height:${600 / size}px`;
    gridSquare.classList.add(`grid-div`);
   gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = '#70221A';
    })
    container.appendChild(gridSquare);
}
}
let squares = container.childNodes;
const clearGrid = () => {
    squares.forEach((square) => {
        console.log(square)
        square.style.backgroundColor = '#e2aba4';
    })
}
const emptyGrid = () => {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const generateRgb = () => {
    let r = Math.floor(Math.random() * 200);
    let g = Math.floor(Math.random() * 200);
    let b = Math.floor(Math.random() * 200);
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}
console.log(generateRgb())
const rainbowButton = document.getElementById('rainbowMode');
rainbowButton.addEventListener('click', () => {
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = generateRgb();
        })
    })
})

const slider = document.querySelector('.slider');
slider.oninput = function () {
    emptyGrid();
    generateGrid(this.value);
}
const eraseButton = document.getElementById('eraseButton');
eraseButton.addEventListener('click', () => {
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#e2aba4';
        })
    })
})

const drawButton = document.getElementById('drawButton');
drawButton.addEventListener('click', () => {
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#70221A';
        })
    })
})
const clearButton = document.getElementById('clearButton')
clearButton.addEventListener('click', () => {
    clearGrid();
})