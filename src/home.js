export function loadHome() {
    const content = document.getElementById('content');
    
    const homeDiv = document.createElement('div');
    homeDiv.textContent = "Welcome to the Restaurant";
    content.appendChild(homeDiv);
}