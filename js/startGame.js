const selectedColorsLocal = localStorage.getItem('selectedColor');
const selectedColors = selectedColorsLocal.split(",");
const coloresAutogeneradosLOCAL = localStorage.getItem('coloresGeneradosMaquina');
const coloresAutogenerados = coloresAutogeneradosLOCAL.split(",");
const status0 = document.getElementById("status0");
const status1 = document.getElementById("status1");
const status2 = document.getElementById("status2");
const status3 = document.getElementById("status3");

const colorSelect1 = document.getElementById('colorSelect1');
colorSelect1.value = selectedColors[0];
const palette1 = document.getElementById('palette1');
const colorSelect2 = document.getElementById('colorSelect2');
colorSelect2.value = selectedColors[1];
const palette2 = document.getElementById('palette2');
const colorSelect3 = document.getElementById('colorSelect3');
colorSelect3.value = selectedColors[2];
const palette3 = document.getElementById('palette3');
const colorSelect4 = document.getElementById('colorSelect4');
colorSelect4.value = selectedColors[3];
const palette4 = document.getElementById('palette4');
let selectedColor = [];

// PALETA DE COLORES
colorSelect1.addEventListener('input', () => {
    palette1.style.backgroundColor = colorSelect1.value;
    if (selectedColor[0] === undefined || selectedColor[0] === selectedColor[0]) {
        selectedColor.splice(0, 1, colorSelect1.value);
        comprobarEstado(0, colorSelect1.value)
    } else {
        selectedColor.splice(0, 1, colorSelect1.value);
        comprobarEstado(0, colorSelect1.value)
    }
})
colorSelect2.addEventListener('input', () => {
    palette2.style.backgroundColor = colorSelect2.value;
    if (selectedColor[1] === undefined || selectedColor[1] === selectedColor[0]) {
        selectedColor.splice(1, 1, colorSelect2.value);
        comprobarEstado(1, colorSelect2.value)
    } else {
        selectedColor.splice(1, 1, colorSelect2.value);
        comprobarEstado(1, colorSelect2.value)
    }
})
colorSelect3.addEventListener('input', () => {
    palette3.style.backgroundColor = colorSelect3.value;
    if (selectedColor[2] === undefined || selectedColor[2] === selectedColor[0]) {
        selectedColor.splice(2, 1, colorSelect3.value);
        comprobarEstado(2, colorSelect3.value)
    } else {
        selectedColor.splice(2, 1, colorSelect3.value);
        comprobarEstado(2, colorSelect3.value)
    }
})
colorSelect4.addEventListener('input', () => {
    palette4.style.backgroundColor = colorSelect4.value;
    if (selectedColor[3] === undefined || selectedColor[3] === selectedColor[0]) {
        selectedColor.splice(3, 1, colorSelect4.value);
        comprobarEstado(3, colorSelect3.value)
    } else {
        selectedColor.splice(3, 1, colorSelect4.value);
        comprobarEstado(3, colorSelect3.value)
    }
})
                                                      
function comprobarEstado(idColorSelect){ // con el idColorSelect hacemos referencia al id del input? y con coloraComprobar al que selecciona el jugador
console.log(idColorSelect); 
/* console.log(colorAComprobar); */
const colorAComprobar = [colorSelect1.value, colorSelect2.value, colorSelect3.value, colorSelect4.value];

if(coloresAutogenerados[idColorSelect] === colorAComprobar[idColorSelect]){
    // el estado de idColorSelect lo ponemos en verde
    switch(idColorSelect){
        case 0:
            status0.style.backgroundColor = "green"
        break; 
        case 1:
            status1.style.backgroundColor = "green"
        break; 
        case 2:
            status2.style.backgroundColor = "green"
        break; 
        case 3:
            status3.style.backgroundColor = "green"
        break;    
    }
} else {
    // el estado de idColorSelect lo ponemos en rojo
    switch(idColorSelect){
        case 0:
            status0.style.backgroundColor = "red"
        break; 
        case 1:
            status1.style.backgroundColor = "red"
        break; 
        case 2:
            status2.style.backgroundColor = "red"
        break; 
        case 3:
            status3.style.backgroundColor = "red"
        break;    
    }
}
};

const check = document.getElementById("check");

check.addEventListener("click", (event) =>{
    event.preventDefault(); 

    // ¿CUAL ES EL ESTADO DE
    // trackcombination ?
    const bgStatus0 = status0.style.backgroundColor;
    const bgStatus1 = status1.style.backgroundColor;
    const bgStatus2 = status2.style.backgroundColor;
    const bgStatus3 = status3.style.backgroundColor;

    if(bgStatus0 === "green" && bgStatus1 === "green" &&
    bgStatus2 === "green" && bgStatus3 === "green"){
        alert("has ganado");
    } else {

       /*  document.getElementById() */
        const divPadre = document.getElementsByClassName('row-select-colors');
        const nuevoContenido = `
        <div class="square">
            <div class="shape-square1" id="palette1" style="background-color: ${colorSelect1.value};"></div>
            <div class="shape-square2" id="palette2" style="background-color: ${colorSelect2.value}"></div>
            <div class="shape-square3" id="palette3" style="background-color: ${colorSelect3.value}"></div>
            <div class="shape-square4" id="palette4" style="background-color: ${colorSelect4.value}"></div>
        </div>
        <div class="track" id="trackcombination" style="margin-left: 230px;">
            <div id="status0" style="background-color: ${bgStatus0};">
            </div>
            <div id="status1" style="background-color: ${bgStatus1};">
            </div>
            <div id="status2" style="background-color: ${bgStatus2};">
            </div>
            <div id="status3" style="background-color: ${bgStatus3};">
            </div>        
        </div>
        `;
        divPadre[0].insertAdjacentHTML("afterend", nuevoContenido);
    }
})
comprobarEstado(0);
comprobarEstado(1);
comprobarEstado(2);
comprobarEstado(3);


