
function handleKeyboardButtonPress(event) {
    const playerPressed = event.key
    const displayAlphabet = document.getElementById('displayAlphabet')
    const displayText = displayAlphabet.innerText
    const displayTextLowerCase = displayText.toLowerCase()
    if (playerPressed === displayTextLowerCase) {
        removeBackgroundColorById(displayTextLowerCase)
        gameRunning()

        const currentScore = getTextValueById('currentScore')
        const score = currentScore + 1
        setTextValueById('currentScore', score)
        setTextValueById('finalScore', score)
    }
    else {
        wrongBGColorById(playerPressed)
        setTimeout(() => {
            wrongBGColorRemovedById(playerPressed)
        }, 200);
        const currentLife = getTextValueById('currentLife')
        const life = currentLife - 1
        setTextValueById('currentLife', life)
        if (currentLife === 0) {
            gameOver()
            removeBackgroundColorById(displayTextLowerCase)
        }
    }
}

function gameRunning() {
    const alphabet = generateARandomAlphabet()
    const element = document.getElementById('displayAlphabet')
    element.innerText = alphabet
    setBackgroundColorById(alphabet)
}

document.addEventListener('keyup', handleKeyboardButtonPress)

// function setDisplayTextValue() {

// }

function play() {
    hideSectionById('firstPage')
    showSectionById('secondPage')
    hideSectionById('thirdPage')

    setTextValueById('currentScore', 0)
    setTextValueById('currentLife', 5)
    setTextValueById('finalScore', 0)
    gameRunning()
}

