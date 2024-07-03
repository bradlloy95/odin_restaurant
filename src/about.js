export function loadAbout(){
    const content = document.getElementById('content');
    const aboutDiv = document.createElement('div');
    aboutDiv.textContent = 'this is the about page'
    content.appendChild(aboutDiv)
}