import { createElementWithText, setActiveButton } from "./utils/utils";


export function loadAbout(){
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const aboutDiv = createAboutDiv();
    content.appendChild(aboutDiv);

    const aboutBTN = document.getElementById('aboutBTN');
    setActiveButton(aboutBTN, 'clickedBTN', 'nav');

    // const footer =  createElementWithText('footer', 'Copyright © 2024 bradlloy95');
    // content.appendChild(footer)
}

function createAboutDiv() {
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('aboutDiv');
    
    aboutDiv.innerHTML = `
        <h2>Welcome to The Olde Hearth</h2>
        <br>
        <h5>Location:</h5>
        <br>
        <p>Nestled in the heart of Woodland Heights, The Olde Hearth is conveniently located at:</p>
        <br>
        <ul>
            <li><strong>Address:</strong> 123 Oak Street, Woodland Heights, London, UK</li>
        <br>
            <li><strong>Phone:</strong> +44 1234 567890</li>
        <br>
            <li><strong>Email:</strong> info@oldehearth.co.uk</li>
        <br>
            <li><strong>Website:</strong> www.oldehearth.co.uk</li>
        </ul>
        <br>
        
        <h2>Our Cuisine</h2>
        <br>
        <p>At The Olde Hearth, we take pride in our authentic British dishes, prepared using time-honored 
        recipes passed down through generations. From succulent roast beef with Yorkshire pudding to rich 
        shepherd's pie and crispy fish and chips, each dish is crafted with care and showcases the comforting 
        flavors of classic British fare. We source the finest local ingredients to ensure freshness and quality
         in every bite.</p>
         <br>
        <h2>The Experience</h2>
        <br>
        <p>At The Olde Hearth, we take pride in our authentic British dishes, prepared using time-honored 
        recipes passed down through generations. From succulent roast beef with Yorkshire pudding to rich 
        shepherd's pie and crispy fish and chips, each dish is crafted with care and showcases the comforting 
        flavors of classic British fare. We source the finest local ingredients to ensure freshness and quality
         in every bite.</p>
         <br>
        <h2>Events and Catering:</h2>
        <br>
        <p>We also cater to private events and special occasions, ensuring that every gathering is memorable and 
        filled with delicious food and impeccable service. Contact us to discuss your event needs and how we can 
        make it extraordinary.
        </p>
         <br>
    `

    return aboutDiv;
}