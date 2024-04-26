const navbar = document.querySelector('nav');
const firstSection = document.getElementById('first-section');
const secondSection = document.getElementById('second-section');
const frequency = document.getElementById('satisfactionNumber');
const countryNumber = document.getElementById('countriesNumber');
const experiences = document.getElementById('experiencesYear');


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

window.addEventListener('scroll', () => {
    navbarMotion();
    if (document.documentElement.scrollTop >= 240 && first == false) {
        appear(firstSection);
        counter(first);
        first = true;
    } else {
        frequency.innerText = '99%';
        countryNumber.innerText = '220';
        experiences.innerText = '50';
    }
    if (document.documentElement.scrollTop >= 750 && second == false) {
        secondSection.classList.add('show');
        second = true;
    }
})
