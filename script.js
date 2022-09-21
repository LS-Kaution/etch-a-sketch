let clear = document.querySelector('#clear')
clear.addEventListener('click', reset)

function randomSelection(choices) {
    const RANDOM_NUMBER = Math.floor(Math.random() * choices.length);
  
    return choices[RANDOM_NUMBER];
}
  
const CONTAINER = document.querySelector('.container');
const COLORS = ['color-red', 'color-orange', 'color-yellow', 'color-green', 'color-blue', 'color-indigo', 'color-violet'];
  
for (let i = 1; i <= 16 * 16; i++) {
    const SQUARE_DIV = document.createElement('div');
    SQUARE_DIV.classList.add('color-black');
  
    CONTAINER.appendChild(SQUARE_DIV);
  
    SQUARE_DIV.addEventListener('mousedown', () => {
      SQUARE_DIV.classList.add(randomSelection(COLORS));
    });
}

function reset() {
    location.reload()
}