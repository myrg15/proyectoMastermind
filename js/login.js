const username = document.getElementById('username'); 

//LOGIN USUARIO//

username.addEventListener('input', () =>{
    localStorage.setItem('username',username.value)
    console.log(localStorage.getItem('username'));
});