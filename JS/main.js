const navbar = document.querySelector('nav');
const firstSection = document.getElementById('first-section')
const frequency = document.getElementById('satisfactionNumber');
const countryNumber = document.getElementById('countriesNumber');
const experiences = document.getElementById('experiencesYear');


window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 15) {
        navbar.className = 'navbar-moove'
    } else {
        navbar.className = 'navbar-moove-back';
    }
    if(document.documentElement.scrollTop > 160) {
        let incr = 0;
        let country = 0;
        let experiencesYear = 0;

        firstSection.classList.remove('first-section');
        firstSection.classList.add('show');
        let frequencyInterval = setInterval(() => {
            frequency.innerText = `${incr}%`
            incr++;
            if (incr === 100) {
                clearInterval(frequencyInterval);
            }
        }, 90);

        let countryInterval = setInterval(() => {
            countryNumber.innerText = `${country}`;
            country++;
            if(country == 221) {
                clearInterval(countryInterval)
            }
        }, 40);

        let experiencesYearInterval = setInterval(() => {
            experiences.innerText = `${experiencesYear}`;
            experiencesYear++;
            if (experiencesYear == 51) {
                clearInterval(experiencesYearInterval)
            }
        }, 190)
        
    }
})