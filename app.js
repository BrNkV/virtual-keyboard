import { getKeys } from './helpers/keyboardList.js';

// function switchLang() { }


class Keyboard {
    constructor(lang = 'RU', div = '.app', input = '.keyboard__input') {
        this.lang = lang;
        this.keysLang = getKeys(this.lang);
        this.appMount = document.querySelector(div);
        this.inputArea = document.querySelector(input);
    }

    /**
     * main method init keyboard
     */
    init() {
        this.favicon();
        this.generateKeyboard(this.appMount);
        this.keyClickListener();
        this.keyDownListener();
        this.inputListener();


        // console.log('KeyBoard init');
        // console.log('Lang = ' + this.lang);
        // console.log(this.keysLang);
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
        this.generateKeys(this.keysLang);
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
    //FIXME maybe need switch to spec btn
    keyClickListener() {
        let keys = document.querySelectorAll('.key');
        keys.forEach(e => {
            e.addEventListener('click', () => {
                this.inputFocus();
                console.log(e)
                // this.addInput(e.innerHTML);
                this.keyClickCheck(e);
            })
        })
    }

    //FIXME
    keyDownListener() {
        this.inputArea.addEventListener('keydown', (e) => {
            this.inputFocus();
            // console.dir(e.target);
        })
    }
    //FIXME
    addInput(symbol) {
        this.inputArea.value += `${symbol}`;
    }
    //FIXME
    inputListener() {
        this.inputArea.addEventListener('change', () => {
            console.log('input change');
        })
    }

    keyClickCheck(key) {
        let data = key.getAttribute('data-key');

        switch (data) {
            case 'Tab':

                break;
            case 'CapsLock':

                break;
            case 'ShiftLeft':

                break;
            case 'ShiftRight':

                break;
            case 'ControlLeft':

                break;
            case 'ControlRight':

                break;
            case 'AltLeft':

                break;
            case 'AltRight':

                break;
            case 'MetaLeft':

                break;
            case 'Backspace':

                break;
            case 'Space':

                break;
            case 'Enter':

                break;
            case 'Lang':

                break;
            case 'Delete':

                break;

            default:
                this.addInput(key.innerHTML);
                break;
        }

    }

}

window.addEventListener("DOMContentLoaded", () => {
    new Keyboard('RU', '.app', '.keyboard__input').init();
    // new Keyboard('EN', '.app', '.keyboard__input').init();
});

