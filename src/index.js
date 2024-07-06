import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";
import { createElementWithText } from "./utils/utils";

import './styles/main.css'
//import './images/restaurant.jpeg'
const content = document.getElementById('content');
const header = document.getElementById('header');
const body = document.getElementById('body');

function init() {
    clearContent();
    loadHome();
    createFooter();
}

function clearContent() {
    header.innerHTML = '';
    createNav();    
    content.innerHTML = '';   
    removeFooter(); // Add this line to remove footer
}

function createNav() {
    const nav = document.createElement('nav');

    const title = document.createElement('h1');
    title.textContent = 'The Olde Hearth';
    title.classList.add('logo');
    header.appendChild(title);

    const buttons = [
        { text: 'Home', id: 'homeBTN', loadFunction: loadHome },
        { text: 'Menu', id: 'menuBTN', loadFunction: loadMenu },
        { text: 'About', id: 'aboutBTN', loadFunction: loadAbout }
    ];

    buttons.forEach(({ text, id, loadFunction }) => {
        const button = document.createElement('button');
        button.textContent = text;
        button.setAttribute('id', id);
        button.addEventListener('click', () => {
            clearContent();
            loadFunction();
            createFooter();
        });
        nav.appendChild(button);
    });

    header.appendChild(nav);

    const spacer = document.createElement('div');
    spacer.classList.add('logo');
    header.appendChild(spacer);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');
    init();
});

function createFooter() {
    const footer = document.createElement('footer');
    footer.textContent = 'Copyright © 2024 bradlloy95';
    body.appendChild(footer);
}

function removeFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.remove();
    }
}
