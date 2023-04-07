// TEXT CHANGING
const changingText = document.querySelector('#changing')
const changingWords = ['smart', 'effectively', 'on the team', 'independetlly', 'fast']

function changeText() {
    let i = 0;
    let interval = setInterval(() => {
        changingText.innerHTML = changingWords[i];
        i++;
        if (i >= changingWords.length) {
            i = 0;
        }
    }, 2000)
}
// changeText()

//MAP

function initMap() {
    let location = {
        lat: 37.774929,
        lng: -122.419418
    };
    let map = new google.maps.Map(document.querySelector('#map'), {
        zoom: 6,
        center: location
    });
};

// NAV BURGER
const headerNav = document.querySelector('.header__nav');
const burg = document.createElement('div');
burg.className = 'burg';

burg.innerHTML = `<div class="menu__btn-burger"></div>`

function resize() {
    if (window.screen.width <= 992) {
        if (!headerNav.contains(burg)) {
            headerNav.appendChild(burg);
        }
    } else {
        if (headerNav.contains(burg)) {
            headerNav.removeChild(burg);
        }
    }
}

window.addEventListener('resize', resize);
burg.addEventListener('click', () => {
    const headerMenu = document.querySelector('.header__menu')

    burg.classList.toggle('active');
    document.body.classList.toggle('lock');
    // document.querySelector('.header__logo').classList.toggle('open');
    headerMenu.classList.toggle('open');
    // document.querySelector('.header__button').classList.toggle('open');
})