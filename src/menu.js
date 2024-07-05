import { createElementWithText, setActiveButton } from "./utils/utils";
import { createElementWithClass } from "./utils/utils";

const menu = [
    [
        { name: 'Soup of the Day', description: 'Freshly made soup served with crusty bread.', price: '£4.95' },
        { name: 'Prawn Cocktail', description: 'Juicy prawns in a tangy Marie Rose sauce, served with crisp lettuce and brown bread.', price: '£6.50' },
        { name: 'Welsh Rarebit', description: 'Cheesy toast with a hint of mustard, served with a side salad.', price: '£5.50' },
        { name: 'Black Pudding and Apple Stack', description: 'Slices of black pudding layered with caramelized apple, drizzled with balsamic glaze.', price: '£5.95' }
    ],
    [
        { name: 'Roast Beef and Yorkshire Pudding', description: 'Tender roast beef served with homemade Yorkshire pudding, roast potatoes, seasonal vegetables, and rich gravy.', price: '£13.95' },
        { name: 'Fish and Chips', description: 'Freshly battered fish served with chunky chips, mushy peas, and tartar sauce.', price: '£11.95' },
        { name: "Shepherd's Pie", description: 'Hearty minced lamb topped with creamy mashed potatoes, served with seasonal vegetables.', price: '£12.50' },
        { name: 'Chicken and Leek Pie', description: 'Succulent chicken and leek in a creamy sauce, encased in golden pastry, served with mashed potatoes and gravy.', price: '£12.95' }
    ],
    [
        { name: 'Seasonal Vegetables', description: '', price: '£3.00' },
        { name: 'Chunky Chips', description: '', price: '£3.00' },
        { name: 'Mashed Potatoes', description: '', price: '£3.00' },
        { name: 'Side Salad', description: '', price: '£3.00' }
    ],
[
        { name: 'Sticky Toffee Pudding', description: 'Rich toffee sponge served with toffee sauce and vanilla ice cream.', price: '£5.50' },
        { name: 'Apple Crumble', description: 'Warm apple crumble served with custard or vanilla ice cream.', price: '£5.50' },
        { name: 'Eton Mess', description: 'A classic British dessert of strawberries, meringue, and cream.', price: '£5.50' },
        { name: 'Treacle Tart', description: 'Sweet treacle tart served with clotted cream.', price: '£5.50' }
    ],
    [
        { name: 'Tea and Coffee', description: 'A selection of teas and freshly brewed coffee.', price: '£2.50' },
        { name: 'Soft Drinks', description: 'A variety of soft drinks available.', price: '£2.00' },
        { name: 'Beers and Ales', description: 'A selection of local beers and ales.', price: '£3.50' },
        { name: 'House Wine', description: 'Red, white, or rosé, available by the glass or bottle.', price: '£4.50 per glass | £18.00 per bottle' }
    ]
];

const buttons = [
    { text: 'Starters', id: 'StartersBTN', arrayIndex: 0 },
    { text: 'Mains', id: 'mainsBTN', arrayIndex: 1},
    { text: 'Sides', id: 'sidesBTN', arrayIndex: 2},
    { text: 'Desserts', id: 'dessertsBTN', arrayIndex: 3},
    { text: 'Drinks', id: 'drinksBTN', arrayIndex: 4},
];


function createMenuItem(section){
    const itemDiv = document.createElement('div');
    
    section.forEach(item => {
        const items = document.createElement('div');
        items.innerHTML = `
        <br>
            <h3>${item.name}: ${item.description} ${item.price}</h3>
        <br>            
        `

        itemDiv.appendChild(items);
    })
    return itemDiv
}




export function loadMenu(){
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const menuDiv = createMenuDiv();
    content.appendChild(menuDiv);

    const menuBTN = document.getElementById('menuBTN');
    setActiveButton(menuBTN, 'clickedBTN', 'nav');

    const footer =  createElementWithText('footer', 'Copyright © 2024 bradlloy95');
    content.appendChild(footer)
}


function createMenuDiv() {
    

    //create div
    const menuDiv = createElementWithClass('div', 'menuDiv');
  

    //create nav 
    const menuNav = createElementWithClass('div', 'menuNav')

    const menuContent = createElementWithClass('div', 'menuContent')
    
    buttons.forEach(({ text, id, arrayIndex}) => {
        const button = createElementWithClass('button', id);
        button.textContent = text;
        button.addEventListener('click', () => {
            menuContent.innerHTML = ''
           const itemDiv = createMenuItem(menu[arrayIndex])
           menuContent.appendChild(itemDiv);

            
           
            setActiveButton(button, 'menuBTNClicked', '.menuNav')                        
        });
        menuNav.appendChild(button)

    });
    
    //set default
    
    const itemDiv = createMenuItem(menu[0]);
    menuContent.appendChild(itemDiv);

    
                 


    menuDiv.appendChild(menuNav);
    menuDiv.appendChild(menuContent)

    return menuDiv;
}