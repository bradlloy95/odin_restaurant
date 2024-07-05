export function createElementWithText(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}

export function setActiveButton(button) {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(btn => btn.classList.remove('clickedBTN'));
    button.classList.add('clickedBTN');
}