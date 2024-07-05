import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";

import './styles/main.css'
//import './images/restaurant.jpeg'
const content = document.getElementById('content');
const header = document.getElementById('header');

function init() {
    clearContent();
    loadHome();
}

function clearContent() {
    header.innerHTML = '';
    createNav();
    
    content.innerHTML = '';
    
}

function createNav() {
    const nav = document.createElement('nav');

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
        });
        nav.appendChild(button);
    });

    header.appendChild(nav);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');
    init();
});

function createFooter() {
    const footer = document.createElement('footer');
    footer.textContent = 'Copyright © 2024 bradlloy95'
    content.appendChild(footer)
}