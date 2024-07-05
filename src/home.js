import { createElementWithText, setActiveButton } from "./utils/utils";

export function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const homeDiv = createHomeDiv();
    content.appendChild(homeDiv);

    const homeBTN = document.getElementById('homeBTN');
    setActiveButton(homeBTN);

    const footer =  createElementWithText('footer', 'Copyright © 2024 bradlloy95');
    content.appendChild(footer)


}

function createHomeDiv() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('contentDiv');

    const homeTitle = createElementWithText('h1', 'Home');
    const homeText = createElementWithText('p', 'Welcome to my restaurant');
    

    homeDiv.appendChild(homeTitle);
    homeDiv.appendChild(homeText);

    return homeDiv;
}



