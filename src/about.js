import { createElementWithText, setActiveButton } from "./utils/utils";


export function loadAbout(){
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const aboutDiv = createAboutDiv();
    content.appendChild(aboutDiv);

    const aboutBTN = document.getElementById('aboutBTN');
    setActiveButton(aboutBTN, 'clickedBTN', 'nav');

    const footer =  createElementWithText('footer', 'Copyright © 2024 bradlloy95');
    content.appendChild(footer)
}

function createAboutDiv() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('contentDiv');

    const homeTitle = createElementWithText('h1', 'About');
    const homeText = createElementWithText('p', 'About my restaurant');

    homeDiv.appendChild(homeTitle);
    homeDiv.appendChild(homeText);

    return homeDiv;
}