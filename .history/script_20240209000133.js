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
// array
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
        text.inn
    }
}
// buying weapon
function buyWeapon() {}
// going to town square
function goTown() {
    update(locations[0]);
}

// go to cave
function goCave() {
    update(locations[2]);
}

// fighting the dragon
function fightDragon() {
    console.log('Fighting draon.');
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

// fight slime method
function fightSlime() {

}

// fight beast method
function fightBeast() {

}