/* hide a section by id */
function hideSectionById(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.add('hidden')
}

/* show a section by id */
function showSectionById(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.remove('hidden')
}

/* generating a random alphabet */
function generateARandomAlphabet() {
    const allAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = allAlphabet.split('')

    const index = Math.round(Math.random() * 25)
    const alphabet = alphabets[index]
    return alphabet
}

/* set background color by id */
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-[rgb(255,165,0)]')
}
function wrongBGColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-red-600')
}
function wrongBGColorRemovedById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('bg-red-600')
}

/* remove background color by id */
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('bg-[rgb(255,165,0)]')
}

/* set text value by id */
function setTextValueById(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value
}

/* get text value by id */
function getTextValueById(elementId) {
    const element = document.getElementById(elementId)
    const elementText = element.innerText
    const value = parseInt(elementText)
    return value
}

function gameOver() {
    hideSectionById('secondPage')
    showSectionById('thirdPage')
    // hideSectionById('firstPage')
}