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
changeText()

// 