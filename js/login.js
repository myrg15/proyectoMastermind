const username = document.getElementById('username'); 
const buttonStart = document.getElementById('start'); 

buttonStart.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.setItem('usuario', username.value);
    window.location.href = "./selectcolor.html";
});