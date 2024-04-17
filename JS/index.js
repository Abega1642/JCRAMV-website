const password = 'razafindrateloAbegà';
const button = document.querySelector('button');
const input = document.getElementById('pswd');
const email = 'a.razafindratelo@gmail.com';
const mail = document.getElementById('eMail');

input.addEventListener('keydown', function(e) {
    if(e.key === "Enter") {
        button.innerHTML = ". . . ."
    }
})
button.addEventListener('click', () => {
    button.innerHTML = ". . . ."
})