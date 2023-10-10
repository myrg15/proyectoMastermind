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
 
});


