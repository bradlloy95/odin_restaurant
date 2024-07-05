export function createElementWithText(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}

export function setActiveButton(button, Class, currentTag) {
    const buttons = document.querySelectorAll(`${currentTag} button`);
    buttons.forEach(btn => btn.classList.remove(Class));
    
    button.classList.add(Class);
}

export function createElementWithClass(tag, Class) {
    const element = document.createElement(tag);
    element.classList.add(Class);
    return element
}