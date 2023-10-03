const circles = document.querySelectorAll('.circle');
const squares = document.querySelectorAll('.square');
const colorPicker = document.getElementById('colorPicker');
const chooseButton = document.getElementById('chooseButton');
const starButton = document.getElementById('starButton');

chooseButton.addEventListener('click', () => {
    colorPicker.click();
});

colorPicker.addEventListener('input', () => {
    const color = colorPicker.value;
    squares.forEach((square) => {
        square.style.backgroundColor = color;
    });
});

starButton.addEventListener('click', () => {
    circles.forEach((circle) => {
        circle.style.backgroundColor = colorPicker.value;
    });
});