

export function loadHome() {
    
    const content = document.getElementById('content');   
    //add some text 
    const homeDiv = document.createElement('div');   
    content.appendChild(homeDiv);

    homeDiv.classList.add('homeDiv')
    // add title to page
    const homeTitle = document.createElement('h1');
    homeTitle.textContent = 'Home'
    const homeText = document.createElement('p');
    homeText.textContent = 'Welcome to my restaurant';
    homeDiv.appendChild(homeTitle)
    homeDiv.appendChild(homeText)
    const homeBTN = document.getElementById('homeBTN');
    homeBTN.classList.add('clickedBTN')
}
