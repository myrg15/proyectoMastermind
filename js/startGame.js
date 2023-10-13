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
        /* GUARDO LOS ESTADOS DE LA PRUEBA ACTUAL */
        /* const bgStatus0 = status0.style.backgroundColor;
        const bgStatus1 = status1.style.backgroundColor;
        const bgStatus2 = status2.style.backgroundColor;
        const bgStatus3 = status3.style.backgroundColor;
 */

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

   



   /*  if(coloresAutogenerados[idColorSelect] === colorAComprobar[idColorSelect]){
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
    } */
        
        if(status0.style.backgroundColor === "green" && status1.style.backgroundColor === "green" &&
        status2.style.backgroundColor === "green" && status3.style.backgroundColor === "green"){
                /* alert("has ganado"); */
                /* TODO: ENVIARLO A LA OTRA PAGINA  */
                windows.location.href = "winner.html";
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




                
/*                 const nuevoContenido = `
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
                divPadre[0].insertAdjacentHTML("afterend", nuevoContenido); */

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





/* function colorChanged(selectElement) {
    const selectedColor = selectElement.value;
    selectElement.style.backgroundColor = selectedColor;
    console.log("Color seleccionado:", selectedColor);

} */


/* const selectedColorsLocal = localStorage.getItem('selectedColor');
const selectedColors = selectedColorsLocal.split(","); */
/* const coloresAutogeneradosLOCAL = localStorage.getItem('coloresGeneradosMaquina');
const coloresAutogenerados = coloresAutogeneradosLOCAL.split(","); */
/* const status0 = document.getElementById("status0");
const status1 = document.getElementById("status1");
const status2 = document.getElementById("status2");
const status3 = document.getElementById("status3"); */

/* const colorSelect1 = document.getElementById('colorSelect1'); */
/* colorSelect1.value = selectedColors[0]; */
/* const palette1 = document.getElementById('palette1');
const colorSelect2 = document.getElementById('colorSelect2'); */
/* colorSelect2.value = selectedColors[1]; */
/* const palette2 = document.getElementById('palette2');
const colorSelect3 = document.getElementById('colorSelect3'); */
/* colorSelect3.value = selectedColors[2]; */
/* const palette3 = document.getElementById('palette3');
const colorSelect4 = document.getElementById('colorSelect4'); */
/* colorSelect4.value = selectedColors[3]; */
/* const palette4 = document.getElementById('palette4');
let selectedColor = []; */

/* const userColors = localStorage.getItem('selectedColors');
const selectedColors = userColors.split(",");
if(selectedColors){
    colorSelect1.value = selectedColors[0];
    colorSelect2.value = selectedColors[1];
    colorSelect3.value = selectedColors[2];
    colorSelect4.value = selectedColors[3];
}
const machineColors = localStorage.getItem('machineColors');
const coloresAutogenerados = machineColors.split(","); */
// PALETA DE COLORES
/* colorSelect1.addEventListener('input', () => {
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
}) */
                                                      
/* function comprobarEstado(idColorSelect){ */ // con el idColorSelect hacemos referencia al id del input? y con coloraComprobar al que selecciona el jugador
/* console.log(idColorSelect);  */
/* console.log(colorAComprobar); */
/* const colorAComprobar = [colorSelect1.value, colorSelect2.value, colorSelect3.value, colorSelect4.value]; */

/* if(coloresAutogenerados[idColorSelect] === colorAComprobar[idColorSelect]){ */
    // el estado de idColorSelect lo ponemos en verde
   /*  switch(idColorSelect){
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
} else { */
    // el estado de idColorSelect lo ponemos en rojo
    /* switch(idColorSelect){
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
}; */

/* const check = document.getEleme *//* ntById("check"); */
/*  */
/* check.addEventListener("click", */ /* (event) =>{ */
/*     event.preventDefault();  */

    // ¿CUAL ES EL ESTADO DE
    // trackcombination ?
  /*   const bgStatus0 = status0.style.backgroundColor;
    const bgStatus1 = status1.style.backgroundColor;
    const bgStatus2 = status2.style.backgroundColor;
    const bgStatus3 = status3.style.backgroundColor;

    if(bgStatus0 === "green" && bgStatus1 === "green" &&
    bgStatus2 === "green" && bgStatus3 === "green"){
        alert("has ganado");
    } else { */

       /*  document.getElementById() */
        /* const divPadre = document.getElementsByClassName('row-select-colors');
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
comprobarEstado(3); */


