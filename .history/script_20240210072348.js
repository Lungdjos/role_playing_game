/**
 * Main JavaScript
 */

'use strict';

// variables
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ['stick'];

// constants
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterHealthText = document.querySelector('#monsterHealth');

// arrays and objects
const weapons = [{
    name: 'stick',
    power: 5
}, {
    name: 'dagger',
    power: 30
}, {
    name: 'claw hammer',
    power: 50
}, {
    name: 'sword',
    power: 100
}];
const monsters = [
    { name: 'slime', level: 2, health: 15 },
    { name: 'fanged beast', level: 60, health: 8 },
    { name: 'dragon', health: 20, level: 300 }
];
const locations = [{
    name: "town square",
    "button text": ['Go to store', 'Go to cave', 'Fight dragon'],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
}, {
    name: "store",
    "button text": ['Buy 10 health (10 gold)', 'Buy weapon (30 gold)', 'Go to town square'],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
}, {
    name: "cave",
    "button text": ['Fight slime', 'Fight fanged beast', 'Go to town square'],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
}];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// funtions and methods

// go to store - and store following methods
function goStore() {
    update(locations[1]);
}
// buying health
function buyHealth() {
    if (gold >= 10) {
        gold: gold = gold - 10;
        // health
        health: health += 10;

        // updating the values on the UI
        goldText.innerText = gold;
        healthText.innerText = health;
    }
    else {
        text.innerText = 'You do not have enough gold to buy health.';
    }
}
// buying weapon
function buyWeapon() {
    // checking if the player has space for a weapon
    if (currentWeapon < (weapons.length - 1)) {
        // checking if the player has enough gold.
        if (gold >= 30) {
            gold -= 30;
            currentWeapon++;
            // updating the texts
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
            text.innerText = 'You now have a ' + newWeapon + '.';

            // adding to the inventory
            inventory.push(newWeapon);

            text.innerText += ' In your inventory you now have: ' + inventory;
        } else {
            text.innerText = 'You do not have enough gold to buy a weapon.';
        }
    } else {
        text.innerText = 'You already have the most powerful weapon.';

        // selling a weapon
        button2.innerText = 'Sell weapon for 15 gold';

        button2.onclick = sellWeapon;
    }
}

// sell weapon
function sellWeapon() {
    if (inventory.length > 1) {
        // updating the gold
        gold += 15;
        goldText.innerText = gold;

        // removing the weapon from inventory
        let currentWeapon = inventory.shift();

        text.innerText = 'You sold a ' + currentWeapon + '.';

        text.innerText += ' In your inventory you have: ' + inventory + '.';
    } else {
        text.innerText = 'Don\'t sell your only weapon!';
    }
}
// going to town square
function goTown() {
    update(locations[0]);
}

// go to cave
function goCave() {
    update(locations[2]);
}

/**
 * update method
 * @param {*} location 
 */

function update(location) {
    // changing the text of elements
    button1.innerText = location['button text'][0];
    button2.innerText = location['button text'][1];
    button3.innerText = location['button text'][2];
    text.innerText = location['text']; //or location.text

    // initializing the buttons on the next page
    button1.onclick = location['button functions'][0];
    button2.onclick = location['button functions'][1];
    button3.onclick = location['button functions'][2];
}

// fighting the dragon
function fightDragon() {
    console.log('Fighting draon.');
}

// fight slime method
function fightSlime() {

}

// fight beast method
function fightBeast() {

}