import { getKeys } from './helpers/keyboardList.js';

class Keyboard {
    constructor(lang = 'RU', div = '.app', input = '.keyboard__input') {
        this.lang = lang;
        this.keys = getKeys(this.lang);
        this.appMount = document.querySelector(div);
        this.inputArea = document.querySelector(input);

    }

    /**
     * main method init keyboard
     */
    init() {
        this.favicon();
        this.generateKeyboard(this.appMount);
        this.keyListener();


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

    generateKeyboard(div) {
        div.innerHTML = `<div class="keyboard"></div>`;
        this.generateKeys(this.keys);
    }

    generateKeys(keys) {
        let keyboardArea = document.querySelector('.keyboard');
        for (const key in keys) {
            keyboardArea.innerHTML += `<button class="key key__${key}" data-key="${key}">${keys[key]}</button>`
        }
    }

    inputFocus() {
        this.inputArea.focus();
    }
    //FIXME
    keyListener() {
        let keys = document.querySelectorAll('.key');
        keys.forEach(e => {
            e.addEventListener('click', () => {
                this.inputFocus();
                console.log(e.innerHTML)
            })
        })
    }
}

window.addEventListener("DOMContentLoaded", () => {
    new Keyboard('RU', '.app', '.keyboard__input').init();
    // new Keyboard('EN', '.app', '.keyboard__input').init();
});

