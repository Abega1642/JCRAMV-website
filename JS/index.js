const password = 'razafindratelo';
const button = document.querySelector('button');
const input = document.getElementById('pswd');
const email = 'a.razafindratelo@gmail.com';
const mail = document.getElementById('eMail');
const message = document.getElementById('alert')

input.addEventListener('keydown', function(e) {
    if(e.key === "Enter") {
        if (input.value != password  || mail.value != email) {
            button.innerText = ". . . ."
            setTimeout(() => {
                button.innerText = 'Login Now'
                message.classList.remove('hidden')
                message.classList.remove('nothing')
                setTimeout(() => {
                    message.classList.add('nothing')
                    input.value = '';
                    mail.value = '';
                }, 2000)
            }, 2000)    
        } else {
            button.innerText = ". . . .";
            setTimeout(() => {
                window.location.href = "main.html";
            }, 2000)
        } 
    }
})
mail.addEventListener('keydown', function(e) {
    if(e.key === "Enter") {
        if (input.value != password  || mail.value != email) {
            button.innerText = ". . . ."
            setTimeout(() => {
                button.innerText = 'Login Now'
                message.classList.remove('hidden')
                message.classList.remove('nothing')
                setTimeout(() => {
                    message.classList.add('nothing')
                    input.value = '';
                    mail.value = '';
                }, 2000)
            }, 2000)    
        } else {
            button.innerText = ". . . .";
            setTimeout(() => {
                window.location.href = "main.html";
            }, 2000)
        } 
    }
})
button.addEventListener('click', () => {
    if (input.value != password  || mail.value != email) {
        button.innerText = ". . . ."
        setTimeout(() => {
            button.innerText = 'Login Now'
            message.classList.remove('hidden')
            message.classList.remove('nothing')
            setTimeout(() => {
                message.classList.add('nothing')
                input.value = '';
                mail.value = '';
            }, 2000)
        }, 2000)    
    } else {
        button.innerText = ". . . .";
        setTimeout(() => {
            window.location.href = "main.html";
        }, 2000)
    }
})
