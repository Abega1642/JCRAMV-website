const navbar = document.querySelector('nav');
const home = document.getElementById('home');
const about = document.getElementById('about');
const dest = document.getElementById('dest');
const hotel = document.getElementById('hotl');
const reserv = document.getElementById('resrv');
const navLinks = document.getElementById('nav-links');
const menu = document.getElementById('burgerMenu')
const firstSection = document.getElementById('first-section');
const secondSection = document.getElementById('second-section');
const thirdSection = document.getElementById('third-section');
const lastSection = document.getElementById('last-section');
const frequency = document.getElementById('satisfactionNumber');
const countryNumber = document.getElementById('countriesNumber');
const experiences = document.getElementById('experiencesYear');
const sentMessage = document.getElementById('snt');
const sentBtn = document.getElementById('snd');
const inputSent = document.getElementById('inpt-sent');
const locations = document.getElementById('location');
const tlocation = document.getElementById('toolTip-location');
const checkIn = document.getElementById('check-in');
const tcheckIn = document.getElementById('toolTip-check-in');
const checkOut = document.getElementById('check-out');
const tcheckOut = document.getElementById('toolTip-check-out');
const temail = document.getElementById('toolTip-mail');
const emailinput = document.getElementById('emailinpt');
const reservationBtn = document.getElementById('reservation-btn');
const succesReservationMessage = document.getElementById('successMessage-rsv');
const signOut = document.getElementById('sign-out');
const out = document.getElementById('out');

function appear(section) {
    section.classList.remove('initial-scale');
    section.classList.add('show');
}
function counter(first) {
    if (first == false) {
        let incr = 0;
        let country = 0;
        let experiencesYear = 0;
        let frequencyInterval = setInterval(() => {
            frequency.innerText = `${incr}%`
            if (incr == 99) {
                clearInterval(frequencyInterval);
            }
            incr += 1;
        }, 90);

        let countryInterval = setInterval(() => {
            countryNumber.innerText = `${country}`;
            if (country == 220) {
                clearInterval(countryInterval)
            }
            country += 1;
        }, 40);

        let experiencesYearInterval = setInterval(() => {
            experiences.innerText = `${experiencesYear}`;
            if (experiencesYear == 52) {
                clearInterval(experiencesYearInterval)
            }
            experiencesYear += 2;
        }, 190)
    }
}
function navbarMotion() {
    if (document.documentElement.scrollTop > 15) {
        navbar.className = 'navbar-moove'
    } else {
        navbar.className = 'navbar-moove-back';
    }
}

let first = false;
let second = false;
let third = false;
let last = false;


signOut.addEventListener('click', () => {
    window.location.href = "index.html"
})
out.addEventListener('click', () => {
    navLinks.classList.remove('showMenu')
    navLinks.classList.add('Menu-off');
})
home.addEventListener('click', () => {
    navLinks.classList.remove('showMenu')
    navLinks.classList.add('Menu-off')
})
about.addEventListener('click', () => {
    navLinks.classList.remove('showMenu')
    navLinks.classList.add('Menu-off')
})
dest.addEventListener('click', () => {
    navLinks.classList.remove('showMenu')
    navLinks.classList.add('Menu-off')
})
hotel.addEventListener('click', () => {
    navLinks.classList.remove('showMenu')
    navLinks.classList.add('Menu-off')
})
reserv.addEventListener('click', () => {
    navLinks.classList.remove('showMenu')
    navLinks.classList.add('Menu-off')
})
menu.addEventListener('click', () => {
    navLinks.classList.add('showMenu')
})
window.addEventListener('scroll', () => {
    console.log(document.documentElement.scrollTop);
    navbarMotion();
    if (document.documentElement.scrollTop >= 200 && first == false) {
        appear(firstSection);
        counter(first);
        first = true;
    } else {
        frequency.innerText = '99%';
        countryNumber.innerText = '220';
        experiences.innerText = '50';
    }
    if (document.documentElement.scrollTop >= 820 && second == false) {
        appear(secondSection);
        second = true;
    }
    if(document.documentElement.scrollTop >= 1500 && third == false) {
        appear(thirdSection);
        third = true;
    } 
    if(document.documentElement.scrollTop >= 1800 && last == false) {
        appear(lastSection);
        last= true;
    }
})
sentBtn.addEventListener('click', () => {
    if (inputSent.split('').includes("@") == true) {
        sentMessage.classList.remove('snt-hd');
        sentMessage.classList.add('sent');
        inputSent.innerText = ''
    }
})
reservationBtn.addEventListener('click', () => {
    //  Location
    if (locations.value != "" && checkIn.value == '' && checkOut.value == '' && emailinput.value == '') {
        setTimeout(() => {
            tcheckIn.classList.remove('d-none');
            tcheckIn.classList.add('d-block');
            tcheckOut.classList.remove('d-none');
            tcheckOut.classList.add('d-block');
            temail.classList.remove('d-none');
            temail.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tcheckIn.classList.remove('d-block');
            tcheckIn.classList.add('d-none');
            tcheckOut.classList.remove('d-block');
            tcheckOut.classList.add('d-none');
            temail.classList.remove('d-block');
            temail.classList.add('d-none');
        }, 2000);
        
    }
    if (locations.value != "" && checkIn.value != '' && checkOut.value == '' && emailinput.value == '') {
        setTimeout(() => {
            tcheckOut.classList.remove('d-none');
            tcheckOut.classList.add('d-block');
            temail.classList.remove('d-none');
            temail.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tcheckOut.classList.remove('d-block');
            tcheckOut.classList.add('d-none');
            temail.classList.remove('d-block');
            temail.classList.add('d-none');
        }, 2000);
        
    }
    if (locations.value != "" && checkIn.value == '' && checkOut.value != '' && emailinput.value == '') {
        setTimeout(() => {
            tcheckIn.classList.remove('d-none');
            tcheckIn.classList.add('d-block');
            temail.classList.remove('d-none');
            temail.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            checkIn.classList.remove('d-block');
            tcheckIn.classList.add('d-none');
            temail.classList.remove('d-block');
            temail.classList.add('d-none');
        }, 2000);
        
    }
    if (locations.value != "" && checkIn.value == '' && checkOut.value == '' && emailinput.value != '') {
        setTimeout(() => {
            tcheckIn.classList.remove('d-none');
            tcheckIn.classList.add('d-block');
            tcheckOut.classList.remove('d-none');
            tcheckOut.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tcheckOut.classList.remove('d-block');
            tcheckOut.classList.add('d-none');
            checkIn.classList.remove('d-block');
            tcheckIn.classList.add('d-none');

        }, 2000);
        
    }
    if (locations.value == "" && checkIn.value != '' && checkOut.value != '' && emailinput.value != '') {
        setTimeout(() => {
            tlocation.classList.remove('d-none');
            tlocation.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tlocation.classList.remove('d-block');
            tlocation.classList.add('d-none');
        }, 2000);
        
    }
    //  Check-In
    if (checkIn.value != "" && locations.value == '' && checkOut.value == '' && emailinput.value == '') {
        setTimeout(() => {
            tlocation.classList.remove('d-none');
            tlocation.classList.add('d-block');
            tcheckOut.classList.remove('d-none');
            tcheckOut.classList.add('d-block');
            temail.classList.remove('d-none');
            temail.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tlocation.classList.remove('d-block');
            tlocation.classList.add('d-none');
            tcheckOut.classList.remove('d-block');
            tcheckOut.classList.add('d-none');
            temail.classList.remove('d-block');
            temail.classList.add('d-none');
        }, 2000);
        
    }
    if (checkIn.value != "" && locations.value != '' && checkOut.value == '' && emailinput.value == '') {
        setTimeout(() => {
            tcheckOut.classList.remove('d-none');
            tcheckOut.classList.add('d-block');
            temail.classList.remove('d-none');
            temail.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tcheckOut.classList.remove('d-block');
            tcheckOut.classList.add('d-none');
            temail.classList.remove('d-block');
            temail.classList.add('d-none');
        }, 2000);
        
    }
    if (checkIn.value != "" && locations.value == '' && checkOut.value != '' && emailinput.value == '') {
        setTimeout(() => {
            tlocation.classList.remove('d-none');
            tlocation.classList.add('d-block');
            temail.classList.remove('d-none');
            temail.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tlocation.classList.remove('d-block');
            tlocation.classList.add('d-none');
            tlocation.classList.remove('d-block');
            tlocation.classList.add('d-none');
        }, 2000);
        
    }
    if (checkIn.value != "" && locations.value == '' && checkOut.value == '' && emailinput.value != '') {
        setTimeout(() => {
            tlocation.classList.remove('d-none');
            tlocation.classList.add('d-block');
            tcheckOut.classList.remove('d-none');
            tcheckOut.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tlocation.classList.remove('d-block');
            tlocation.classList.add('d-none');
            tcheckOut.classList.remove('d-block');
            tcheckOut.classList.add('d-none');
        }, 2000);
        
    }
    if (checkIn.value == "" && locations.value != '' && checkOut.value != '' && emailinput.value != '') {
        setTimeout(() => {
            tcheckIn.classList.remove('d-none');
            tcheckIn.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tcheckIn.classList.remove('d-block');
            tcheckIn.classList.add('d-none');
        }, 2000);
        
    }
    //  Check-out
    if (checkOut.value != "" && locations.value == '' && checkIn.value == '' && emailinput.value == '') {
        setTimeout(() => {
            tlocation.classList.remove('d-none');
            tlocation.classList.add('d-block');
            tcheckIn.classList.remove('d-none');
            tcheckIn.classList.add('d-block');
            temail.classList.remove('d-none');
            temail.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tlocation.classList.remove('d-block');
            tlocation.classList.add('d-none');
            tcheckIn.classList.remove('d-block');
            tcheckIn.classList.add('d-none');
            temail.classList.remove('d-block');
            temail.classList.add('d-none');
        }, 2000);
        
    }
    if (checkOut.value != "" && locations.value != '' && checkIn.value == '' && emailinput.value == '') {
        setTimeout(() => {
            tcheckIn.classList.remove('d-none');
            tcheckIn.classList.add('d-block');
            temail.classList.remove('d-none');
            temail.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tcheckIn.classList.remove('d-block');
            tcheckIn.classList.add('d-none');
            temail.classList.remove('d-block');
            temail.classList.add('d-none');
        }, 2000);
        
    }
    if (checkOut.value != "" && locations.value == '' && checkIn.value != '' && emailinput.value == '') {
        setTimeout(() => {
            tlocation.classList.remove('d-none');
            tlocation.classList.add('d-block');
            temail.classList.remove('d-none');
            temail.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tlocation.classList.remove('d-block');
            tlocation.classList.add('d-none');
            temail.classList.remove('d-block');
            temail.classList.add('d-none');
        }, 2000);
        
    }
    if (checkOut.value != "" && locations.value == '' && checkIn.value == '' && emailinput.value != '') {
        setTimeout(() => {
            tlocation.classList.remove('d-none');
            tlocation.classList.add('d-block');
            tcheckIn.classList.remove('d-none');
            tcheckIn.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tlocation.classList.remove('d-block');
            tlocation.classList.add('d-none');
            tcheckIn.classList.remove('d-block');
            tcheckIn.classList.add('d-none');
        }, 2000);
        
    }
    if (checkOut.value == "" && locations.value != '' && checkIn.value != '' && emailinput.value != '') {
        setTimeout(() => {
            tcheckOut.classList.remove('d-none');
            tcheckOut.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tcheckOut.classList.remove('d-block');
            tcheckOut.classList.add('d-none');
        }, 2000);
        
    }
    //  E-mail
    if (emailinput.value != "" && checkIn.value == '' && checkOut.value == '' && locations.value == '') {
        setTimeout(() => {
            tlocation.classList.remove('d-none');
            tlocation.classList.add('d-block');
            tcheckIn.classList.remove('d-none');
            tcheckIn.classList.add('d-block');
            tcheckOut.classList.remove('d-none');
            tcheckOut.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tlocation.classList.remove('d-block');
            tlocation.classList.add('d-none');
            tcheckIn.classList.remove('d-block');
            tcheckIn.classList.add('d-none');
            tcheckOut.classList.remove('d-block');
            tcheckOut.classList.add('d-none');
        }, 2000);
        
    }
    if (emailinput.value != "" && checkIn.value != '' && checkOut.value == '' && locations.value == '') {
        setTimeout(() => {
            tlocation.classList.remove('d-none');
            tlocation.classList.add('d-block');
            tcheckOut.classList.remove('d-none');
            tcheckOut.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tlocation.classList.remove('d-block');
            tlocation.classList.add('d-none');
            tcheckOut.classList.remove('d-block');
            tcheckOut.classList.add('d-none');
        }, 2000);
        
    }
    if (emailinput.value != "" && checkIn.value == '' && checkOut.value != '' && locations.value == '') {
        setTimeout(() => {
            tlocation.classList.remove('d-none');
            tlocation.classList.add('d-block');
            tcheckIn.classList.remove('d-none');
            tcheckIn.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tlocation.classList.remove('d-block');
            tlocation.classList.add('d-none');
            tcheckIn.classList.remove('d-block');
            tcheckIn.classList.add('d-none');
        }, 2000);
        
    }
    if (emailinput.value != "" && checkIn.value == '' && checkOut.value == '' && locations.value != '') {
        setTimeout(() => {
            tcheckOut.classList.remove('d-none');
            tcheckOut.classList.add('d-block');
            tcheckIn.classList.remove('d-none');
            tcheckIn.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tcheckOut.classList.remove('d-block');
            tcheckOut.classList.add('d-none');
            tcheckIn.classList.remove('d-block');
            tcheckIn.classList.add('d-none');
        }, 2000);
        
    }
    if (emailinput.value == "" && checkIn.value != '' && checkOut.value != '' && locations.value != '') {
        setTimeout(() => {
            temail.classList.remove('d-none');
            temail.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            temail.classList.remove('d-block');
            temail.classList.add('d-none');
        }, 2000);
        
    }
    // general
    if (locations.value == '' && checkIn.value == '' && checkOut.value == '' && emailinput.value == '') {
        setTimeout(() => {
            tlocation.classList.remove('d-none');
            tlocation.classList.add('d-block');
            tcheckIn.classList.remove('d-none');
            tcheckIn.classList.add('d-block');
            tcheckOut.classList.remove('d-none');
            tcheckOut.classList.add('d-block');
            temail.classList.remove('d-none');
            temail.classList.add('d-block');
        }, 100);
        setTimeout(() => {
            tlocation.classList.remove('d-block');
            tlocation.classList.add('d-none');
            tcheckIn.classList.remove('d-block');
            tcheckIn.classList.add('d-none');
            tcheckOut.classList.remove('d-block');
            tcheckOut.classList.add('d-none');
            temail.classList.remove('d-block');
            temail.classList.add('d-none');
        }, 2000);
    }
    // success
    if (locations.value != '' && checkIn.value != '' && checkOut.value != '' && emailinput.value != '') {
        setTimeout(() => {
            succesReservationMessage.classList.remove('initial-scale');
            succesReservationMessage.classList.add('Rsrv-succes')
        }, 100);
        setTimeout(() => {
            succesReservationMessage.classList.remove('Rsrv-succes');
            succesReservationMessage.classList.add('initial-scale')
            locations.value = '';
            checkIn.value = '';
            checkOut.value = '';
            emailinput.value = '';
        },2000)
    }
})
