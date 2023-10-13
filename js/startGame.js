document.addEventListener("DOMContentLoaded", function() {
const userColors = localStorage.getItem('selectedColors');
const selectedColors = userColors.split(",");
    if (selectedColors) {
        colorSelect1.value = selectedColors[0];
        colorSelect1.style.backgroundColor = selectedColors[0];
        colorSelect2.value = selectedColors[1];
        colorSelect2.style.backgroundColor = selectedColors[1];
        colorSelect3.value = selectedColors[2];
        colorSelect3.style.backgroundColor = selectedColors[2];
        colorSelect4.value = selectedColors[3];
        colorSelect4.style.backgroundColor = selectedColors[3];
    }
const status0 = document.getElementById("status0");
const status1 = document.getElementById("status1");
const status2 = document.getElementById("status2");
const status3 = document.getElementById("status3");
const maquinaColors = localStorage.getItem('maquinaColors');
const selectedMaquinaColors = maquinaColors.split(",");

    if(selectedColors[0] === selectedMaquinaColors[0]){
        status0.style.backgroundColor = "green"
    } else {
        status0.style.backgroundColor = "red"
    }
    if(selectedColors[1] === selectedMaquinaColors[1]){
        status1.style.backgroundColor = "green"
    } else {
        status1.style.backgroundColor = "red"
    }
    if(selectedColors[2] === selectedMaquinaColors[2]){
        status2.style.backgroundColor = "green"
    } else {
        status2.style.backgroundColor = "red"
    }
    if(selectedColors[3] === selectedMaquinaColors[3]){
        status3.style.backgroundColor = "green"
    } else {
        status3.style.backgroundColor = "red"
    }

const check = document.getElementById("check");
    check.addEventListener("click", (event) =>{ 
        event.preventDefault(); 

    /* COMPROBACIÓN DE COLORES Y PUESTA EN EL ESTADO */
const machineColors = localStorage.getItem('maquinaColors');
const coloresAutogenerados = machineColors.split(",");  
const colorAComprobar = [colorSelect1.value, colorSelect2.value, colorSelect3.value, colorSelect4.value];
const estados = [status0, status1, status2, status3];  

    for (let i = 0; i < colorAComprobar.length; i++) {       
        if(coloresAutogenerados[i] === colorAComprobar[i]){
            estados[i].style.backgroundColor = "green"
        } else {
            estados[i].style.backgroundColor = "red"
        }
    }
       
    if(status0.style.backgroundColor === "green" && status1.style.backgroundColor === "green" &&
        status2.style.backgroundColor === "green" && status3.style.backgroundColor === "green"){
                windows.location.href = "/pages/winner.html";
            } else {
            const divPadre = document.getElementsByClassName('row-select-colors');
                /* CREACIÓN DE DIVS */
            const square = createDivWithClass("square");
            const palette1 = createDivWithClass("shape-square1", {
                backgroundColor: colorSelect1.value
                }, "palette1");
            const palette2 = createDivWithClass("shape-square1", {
                backgroundColor: colorSelect2.value
                }, "palette2");
            const palette3 = createDivWithClass("shape-square1", {
                backgroundColor: colorSelect3.value
                }, "palette3");
            const palette4 = createDivWithClass("shape-square1", {
                backgroundColor: colorSelect4.value
                }, "palette4");
                square.appendChild(palette1);
                square.appendChild(palette2);
                square.appendChild(palette3);
                square.appendChild(palette4);
            const track = createDivWithClass("track", {
                marginLeft: "230px"
                }, "trackcombination");
            const divStatus0 = createDivWithClass("", {
                backgroundColor: status0.style.backgroundColor
                }, "status0");
            const divStatus1 = createDivWithClass("", {
                backgroundColor: status1.style.backgroundColor
                }, "status1");
            const divStatus2 = createDivWithClass("", {
                backgroundColor: status2.style.backgroundColor
                }, "status2");
            const divStatus3 = createDivWithClass("", {
                backgroundColor: status3.style.backgroundColor
                }, "status3");    
                track.appendChild(divStatus0);
                track.appendChild(divStatus1);
                track.appendChild(divStatus2);
                track.appendChild(divStatus3);
                divPadre[0].insertAdjacentElement('afterend',track);
                divPadre[0].insertAdjacentElement('afterend',square);           

                colorSelect1.value = null;
                colorSelect1.style.backgroundColor = "white";
                colorSelect2.value = null;
                colorSelect2.style.backgroundColor = "white";
                colorSelect3.value = null;
                colorSelect3.style.backgroundColor = "white";
                colorSelect4.value = null;
                colorSelect4.style.backgroundColor = "white";
                status0.style.backgroundColor = "white";
                status1.style.backgroundColor = "white";
                status2.style.backgroundColor = "white";
                status3.style.backgroundColor = "white";
    
            }
    });

});

function createDivWithClass(className, styles = {}, id = null) {
    const div = document.createElement('div');
    div.className = className;
    if(id){
        div.id = id;
    }
    Object.keys(styles).forEach(key => {
        div.style[key] = styles[key];
    });
    return div;
}
function colorChanged(selectElement) {
    const selectedColor = selectElement.value;
    selectElement.style.backgroundColor = selectedColor;
    console.log("Color seleccionado:", selectedColor);
}