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

// query selectors for constants
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

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// funtions and methods

// go to store - and store following methods
function goStore() {
    // changing the text of elements
    button1.innerText = 'Buy 10 health (10 gold)';
    button2.innerText = 'Buy weapon (30 gold)';
    button3.innerText = 'Go to town square';
    text.innerText = 'You enter the store.';

    // initializing the buttons on the next page
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;

}
// buying health
function buyHealth() {}
// buying weapon
function buyWeapon() {}
// going to town square
function goTown() {
    // changing the text of elements
    button1.innerText = 'Go to store';
    button2.innerText = 'Go to cave';
    button3.innerText = 'Fight dragon';
    text.innerText = 'You enter the store.';

    // initializing the buttons on the next page
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
}

// go to cave
function goCave() {
    console.log('Going to cave.');
}

// fighting the dragon
function fightDragon() {
    console.log('Fighting draon.');
}