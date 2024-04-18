const password = 'razafindratelo';
const button = document.querySelector('button');
const input = document.getElementById('pswd');
const email = 'a.razafindratelo@gmail.com';
const mail = document.getElementById('eMail');
const message = document.getElementById('alert')

input.addEventListener('keydown', function(e) {
    if(e.key === "Enter") {
        if (input.value != password) {
            input.value = '';
            mail.value = '';
            message.classList.toggle('hidden')
            button.innerText = ". . . ."
            setTimeout(() => {
                button.innerText = "Login Now"
                setTimeout(() => {
                    console.log('SQDF');
                })
                message.classList.toggle('hidden')
            },2000)
        }   
    }
})
button.addEventListener('click', () => {
    button.innerHTML = ". . . ."
    if (input.value != password) {
        input.value = '';
        mail.value = '';
        message.classList.toggle('hidden')
        setTimeout(() => {
            message.classList.toggle('hidden')
        },2000)
    }
})
