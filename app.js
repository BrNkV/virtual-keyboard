import { getKeys } from './helpers/keyboardList.js';

class Keyboard {
    constructor(lang) {
        this.lang = lang;
    }

    /**
     * main method init keyboard
     */
    init() {
        this.favicon();
        this.keys = getKeys(this.lang);
        console.log('KeyBoard init');
        console.log('Lang = ' + this.lang);
        console.log(this.keys);
    }

    //change favicon (RU / EN)
    favicon() {
        let head = document.querySelector('head');
        // eslint-disable-next-line no-constant-condition
        this.lang === 'RU' || 'EN'
            ? head.innerHTML += `<link rel="shortcut icon" href="favicons/favicon-${this.lang}-32x32.png" type="image/x-icon">`
            : console.log('ERROR: lang not RU / EN');
    }

    generateKeyboard() {

    }

    generateKeys() {

    }
}

window.addEventListener("DOMContentLoaded", () => {
    new Keyboard('RU').init();
});

