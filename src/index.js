import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";
const content = document.getElementById('content');

function init() {
    clearContent()
    loadHome()
}

function clearContent(){
    content.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const homeBTN = document.getElementById('homeBTN');
    const menuBTN = document.getElementById('menuBTN');
    const aboutBTN = document.getElementById('aboutBTN');

    homeBTN.addEventListener('click', () => {
        clearContent()
        loadHome()
    })
    menuBTN.addEventListener('click', () => {
        clearContent()
        loadMenu()
    })
    aboutBTN.addEventListener('click', () => {
        clearContent()
        loadAbout()
    })
    


})
init()