const circles = document.querySelectorAll('.shape');
const squares = document.querySelectorAll('.square');
const colorPicker = document.getElementById('colorPicker');
const chooseButton = document.getElementById('chooseButton');
const starButton = document.getElementById('starButton');

let selectedShapeSquare = 0;
const shapeSquares = document.querySelectorAll('.shape-square');




chooseButton.addEventListener('click', () => {
    colorPicker.click();
});

shapeSquares.forEach((elem,i)=>{
    elem.addEventListener('click',()=>{
    selectedShapeSquare=i;
    })
})

colorPicker.addEventListener('input', () => {
    const color = colorPicker.value;
    shapeSquares.item(selectedShapeSquare).style.backgroundColor = color;
    return;
    squares.forEach((square) => {
        square.style.backgroundColor = color;
    });
});

starButton.addEventListener('click', () => {
    circles.forEach((shape) => {
        shape.style.backgroundColor = colorPicker.value;
    });
});