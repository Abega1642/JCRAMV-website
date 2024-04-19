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
            button.innerText = ". . . ."
            setTimeout(() => {
                button.innerText = 'Login Now'
                message.classList.remove('hidden')
                setTimeout(() => {
                    message.classList.add('nothing')
                }, 2000)
            }, 2000)    
        }   
    }
})
button.addEventListener('click', () => {
    if (input.value != password) {
        input.value = '';
        mail.value = '';
        button.innerText = ". . . ."
        setTimeout(() => {
            button.innerText = 'Login Now'
            message.classList.remove('hidden')
            setTimeout(() => {
                message.classList.add('nothing')
            }, 2000)
        }, 2000)    
    }
})
