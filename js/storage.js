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
const colores = ["red", "green", "yellow", "pink"];


//otra funcion para guardar colores y redireccionar a la pagina de seleccionar 
/*function gwtRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];     
    }

    return color;
}*/


/* function generateRandomCOlorsArray(numColors){
    const colors = [];

    for (let i = 0; i < numColors; i++) {
       colors.push(gwtRandomHexColor());   
    }

    return colors;
} */
/* coloresAutogenerados = generateRandomCOlorsArray(4); */
/* console.log("LA MAQUINA HA CREADO:" + coloresAutogenerados); */
/* localStorage.setItem('coloresGeneradosMaquina', coloresAutogenerados); */

// PALETA DE COLORES

colorSelect1.addEventListener('input', () => {
   
    palette1.style.backgroundColor = colorSelect1.value;
    if (selectedColor[0] === undefined || selectedColor[0] === selectedColor[0]) {
        selectedColor.splice(0, 1, colorSelect1.value);
    }
})
colorSelect2.addEventListener('input', () => {
    palette2.style.backgroundColor = colorSelect2.value;
    if (selectedColor[1] === undefined || selectedColor[1] === selectedColor[0]) {
        selectedColor.splice(1, 1, colorSelect2.value);
    }
})
colorSelect3.addEventListener('input', () => {
    palette3.style.backgroundColor = colorSelect3.value;
    if (selectedColor[2] === undefined || selectedColor[2] === selectedColor[0]) {
        selectedColor.splice(2, 1, colorSelect3.value);
    }
})
colorSelect4.addEventListener('input', () => {
    palette4.style.backgroundColor = colorSelect4.value;
    if (selectedColor[3] === undefined || selectedColor[3] === selectedColor[0]) {
        selectedColor.splice(3, 1, colorSelect4.value);
    }
})
//reset limpia input regresando color blanco
reset.addEventListener('click', () => {
    selectedColor = [];
    palette1.style.backgroundColor = "#ffffff";
    palette2.style.backgroundColor = "#ffffff";
    palette3.style.backgroundColor = "#ffffff";
    palette4.style.backgroundColor = "#ffffff";
    colorSelect1.value = "#ffffff";
    colorSelect2.value = "#ffffff";
    colorSelect3.value = "#ffffff";
    colorSelect4.value = "#ffffff";
    console.log(selectedColor);
})
play.addEventListener('click', () => {
   /*  localStorage.setItem('selectedColor', selectedColor); */
   /*  window.location.href = "/pages/startGame.html"; */
   getSelectedColors();
})


function colorChanged(selectElement) {
    const selectedColor = selectElement.value;
    selectElement.style.backgroundColor = selectedColor;
    console.log("Color seleccionado:", selectedColor);

}

/* NEW */
function getSelectedColors() {
    /* USER */
    const colorSelect1 = document.getElementById("colorSelect1").value;
    const colorSelect2 = document.getElementById("colorSelect2").value;
    const colorSelect3 = document.getElementById("colorSelect3").value;
    const colorSelect4 = document.getElementById("colorSelect4").value;

    const selectedColors = [colorSelect1, colorSelect2, colorSelect3, colorSelect4];

    localStorage.setItem('selectedColors', selectedColors);
    

    /* MAQUINA */
    const maquinaColors = [getRandomColors(),getRandomColors(),getRandomColors(),getRandomColors() ]

    localStorage.setItem('maquinaColors', maquinaColors);
    window.location.href = "/pages/startGame.html";
}

function getRandomColors() {
    
    const randomIndex = Math.floor(Math.random() * colores.length);
    return colores[randomIndex];
}

