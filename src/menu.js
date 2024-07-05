import { createElementWithText, setActiveButton } from "./utils/utils";


export function loadMenu(){
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const aboutDiv = createMenuDiv();
    content.appendChild(aboutDiv);

    const menuBTN = document.getElementById('menuBTN');
    setActiveButton(menuBTN);

    const footer =  createElementWithText('footer', 'Copyright © 2024 bradlloy95');
    content.appendChild(footer)
}

function createMenuDiv() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('contentDiv');

    const homeTitle = createElementWithText('h1', 'Menu');
    const homeText = createElementWithText('p', 'MY menu');

    menuDiv.appendChild(homeTitle);
    menuDiv.appendChild(homeText);

    return menuDiv;
}