const username = document.getElementById('username'); 
const buttonStart = document.getElementById('start'); 

/* username.addEventListener('input', () =>{
    localStorage.setItem('username',username.value)
    console.log(localStorage.getItem('username'));
}); */

buttonStart.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.setItem('usuario', username.value);
    window.location.href = "./selectcolor.html";
});