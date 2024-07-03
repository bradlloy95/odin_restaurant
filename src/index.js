import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";
const content = document.getElementById('content');
const header = document.getElementById('header')  


function init() {
    clearContent()

    loadHome()
}

function clearContent(){
    header.innerHTML = '';
    createNav()
    content.innerHTML = '';
}

function createNav() {

    const nav = document.createElement('nav')    

    const homeBTN = document.createElement('button');
    homeBTN.textContent = 'Home'
    homeBTN.setAttribute('id', 'homeBTN')
    homeBTN.addEventListener('click', () => {
        clearContent()
        loadHome()
    })

    const menuBTN = document.createElement('button');
    menuBTN.textContent = 'Menu';
    menuBTN.addEventListener('click', () => {
        clearContent()
        loadMenu()
    })

    const aboutBTN = document.createElement('button');
    aboutBTN.textContent = 'About';
    aboutBTN.addEventListener('click', () => {
        clearContent()
        loadAbout()
    })

    nav.appendChild(homeBTN)
    nav.appendChild(menuBTN)
    nav.appendChild(aboutBTN)
    header.appendChild(nav);    
    
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded')
    init()
})
