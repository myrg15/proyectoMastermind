const colorSelect1 = document.getElementById('colorSelect1')
const palette1 = document.getElementById('palette1')
const colorSelect2 = document.getElementById('colorSelect2')
const palette2 = document.getElementById('palette2')
const colorSelect3 = document.getElementById('colorSelect3')
const palette3 = document.getElementById('palette3')
const colorSelect4 = document.getElementById('colorSelect4')
const palette4 = document.getElementById('palette4')
const reset = document.getElementById('reset')
const play = document.getElementById('play')
let selectedColor = [];



// PALETA DE COLORES
colorSelect1.addEventListener('input', () => {
    palette1.style.backgroundColor = colorSelect1.value;
    if (selectedColor[0] === undefined || selectedColor[0] === selectedColor[0]) {
        selectedColor.splice(0, 1, colorSelect1.value);
    } else {
        selectedColor.splice(0, 1, colorSelect1.value);
    }
})
colorSelect2.addEventListener('input', () => {
    palette2.style.backgroundColor = colorSelect2.value;
    if (selectedColor[1] === undefined || selectedColor[1] === selectedColor[0]) {
        selectedColor.splice(1, 1, colorSelect2.value);
    } else {
        selectedColor.splice(1, 1, colorSelect2.value);
    }
})
colorSelect3.addEventListener('input', () => {
    palette3.style.backgroundColor = colorSelect3.value;
    if (selectedColor[2] === undefined || selectedColor[2] === selectedColor[0]) {
        selectedColor.splice(2, 1, colorSelect3.value);
    } else {
        selectedColor.splice(2, 1, colorSelect3.value);
    }
})
colorSelect4.addEventListener('input', () => {
    palette4.style.backgroundColor = colorSelect4.value;
    if (selectedColor[3] === undefined || selectedColor[3] === selectedColor[0]) {
        selectedColor.splice(3, 1, colorSelect4.value);
    } else {
        selectedColor.splice(3, 1, colorSelect4.value);
    }
})
reset.addEventListener('click', () => {
    selectedColor = [];
    palette1.style.backgroundColor = "#000000";
    palette2.style.backgroundColor = "#000000";
    palette3.style.backgroundColor = "#000000";
    palette4.style.backgroundColor = "#000000";
    colorSelect1.value = "#000000";
    colorSelect2.value = "#000000";
    colorSelect3.value = "#000000";
    colorSelect4.value = "#000000";
    console.log(selectedPalette);
})
play.addEventListener('click', () => {
    localStorage.setItem('selectedColor', selectedColor);
    window.location.href = "/differentPages/startGame.html";
})
