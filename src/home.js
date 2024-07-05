import { createElementWithText, setActiveButton } from "./utils/utils";

export function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const homeDiv = createHomeDiv();
    content.appendChild(homeDiv);

    const homeBTN = document.getElementById('homeBTN', );
    setActiveButton(homeBTN, 'clickedBTN', 'nav');

    const footer =  createElementWithText('footer', 'Copyright © 2024 bradlloy95');
    content.appendChild(footer)


}

function createHomeDiv() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('homeDiv')
    

    const homeText = document.createElement('p');
    homeText.innerHTML = `
        <h3>Welcome to "The Olde Hearth"</h3>
        <br>
        <br>
        <p>Nestled in the heart of our charming town, The Olde Hearth is a beloved family-run restaurant that has been serving traditional British family meals for over three generations. Our story began in the early 1950s, when the Smith family opened their doors to share their passion for hearty, home-cooked meals with the community. Today, we continue to uphold that legacy, offering a warm and welcoming atmosphere where everyone feels at home.</p>
        <br>
        <p>At The Olde Hearth, we pride ourselves on using time-honored recipes passed down through the generations. Each dish is crafted with love and care, bringing the comforting flavors of classic British cuisine to your table. Our menu features a delightful array of traditional favorites, including succulent roast beef with Yorkshire pudding, rich and savory shepherd's pie, and our famous fish and chips, fried to golden perfection.</p>
        <br>
        <p>Every meal is prepared with the finest locally-sourced ingredients, ensuring that each bite is fresh, flavorful, and true to our British roots. Our cozy, rustic dining room, with its wooden beams and roaring fireplace, creates the perfect setting for a family gathering, a special celebration, or a casual meal with friends.</p>
        <br>
        <p>The Olde Hearth is not just a restaurant; it’s a place where memories are made. Whether you’re enjoying a Sunday roast, indulging in a hearty breakfast, or savoring a sweet dessert, you'll be treated like family from the moment you walk through our doors. We believe in the power of good food to bring people together, and we look forward to welcoming you to our table.</p>
        <br>
        <p>Come and experience the taste of tradition at The Olde Hearth, where every meal is a cherished part of our family heritage.</p>
    `

    homeText.classList.add('homeText')
    

    homeDiv.appendChild(homeText);

    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('reviews')

    reviewDiv.innerHTML = `
        <h2>Customer reviews</h2>
        <br> 
        <h3>Emma Thompson:</h3>
        <br>
        <br>
        <p>
        "The Olde Hearth is a gem! From the moment we walked in, we felt like part of the family. T
        he atmosphere is cozy and welcoming, and the food is simply outstanding. 
        I had the roast beef with Yorkshire pudding, and it was cooked to perfection. 
        My kids loved the fish and chips. We'll definitely be coming back soon!"
        </p>
        <br>
        <br>
        <br>
        <h3>David Clark:</h3>
        <br>
        <br>
        <p>
        "I can't say enough good things about The Olde Hearth. The shepherd's pie was delicious, 
        with a rich and savory filling that reminded me of my grandma's cooking. The staff is incredibly friendly and attentive, 
        making sure we had everything we needed. It's the perfect spot for a family meal or a special occasion."
        </p>
    `

    homeDiv.appendChild(reviewDiv);


    return homeDiv;
}



