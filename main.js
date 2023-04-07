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

//
