export function loadMenu() {
    const content = document.getElementById('content');

    const menuDiv = document.createElement('div');
    menuDiv.textContent = 'Here is my menu'
    content.appendChild(menuDiv)
}