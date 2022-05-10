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
        this.createLS();
        this.keyDownListener();
        this.keyUpListener();
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
                // let data = e.getAttribute('data-key');
                // this.inputArea.dispatchEvent(new KeyboardEvent("keydown", { code: data }));
            })
        })
    }


    keyDownListener() {
        window.addEventListener('keydown', (e) => {
            this.inputFocus();
            e.preventDefault();
            console.log(e.code);
            console.log(e);
            // let btn = document.querySelector(`.key__${e.code}`);
            let btn = this.keyClassActiveToggle(e.code);
            this.keyClickCheck(btn);
            btn.classList.add('active-btn');
        })
    }
    keyUpListener() {
        window.addEventListener('keyup', (e) => {
            this.inputFocus();
            console.dir(e.code);
            this.keyClassActiveToggle(e.code).classList.remove('active-btn');
        })
    }
    keyClassActiveToggle(btnClass) {
        let btn = document.querySelector(`.key__${btnClass}`);
        // btn.classList.toggle('active-btn')
        return btn;
    }

    //FIXME
    addInput(symbol) {
        this.inputArea.value += `${symbol}`;
        // let evt = new KeyboardEvent('keydown', )
    }

    capsLock() {
        // let caps = document.querySelector('.key__CapsLock');
        // caps.addEventListener('click', () => {

        //         console.log('active-btn');


        // })
    }

    //FIXME
    inputListener() {
        this.inputArea.addEventListener('change', () => {
            console.log('input change');
        })
    }

    backSpace() {
        let tmp = [...this.inputArea.value];
        tmp.pop();
        this.inputArea.value = tmp.join('');
    }

    delKey() {
        let tmp = [...this.inputArea.value];
        tmp.shift();
        this.inputArea.value = tmp.join('');
    }


    createLS() {
        if (localStorage.getItem('lang') == null || localStorage.getItem('lang') !== 'RU') {
            localStorage.setItem('lang', 'RU');
        }
    }

    changeLang() {
        if (localStorage.getItem('lang') == 'RU') {
            this.lang = 'EN';
            this.keysLang = getKeys(this.lang);
            this.generateKeyboard(this.appMount);
            this.keyClickListener();
            console.log(this.lang);
            localStorage.setItem('lang', 'EN');
            return;
        } else if (localStorage.getItem('lang') == 'EN') {
            this.lang = 'RU';
            this.keysLang = getKeys(this.lang);
            this.generateKeyboard(this.appMount);
            this.keyClickListener();
            console.log(this.lang);
            localStorage.setItem('lang', 'RU');
            return;
        }
    }

    langSwitcher() {
        // let lShift = document.querySelector('.key__ShiftLeft');
        // let lAlt = document.querySelector('.key key__AltLeft');


        // window.addEventListener("keydown", (e) => {
        // if (e.key == 'Shift' && e.key == 'Alt') {
        //     this.changeLang();
        // }
        // if (e.key == 'Shift') {
        //     if (e.key == 'Alt') {
        //         this.changeLang();
        //     }
        // }

        // });

        // window.addEventListener("keyup", (e) => {
        //     if (e.key == 'Shift') {
        //         if (e.key == 'Alt') {
        //             this.changeLang();
        //         }
        //     }
        // });

    }

    keyClickCheck(key) {
        let data = key.getAttribute('data-key');

        switch (data) {
            case 'Tab':
                this.inputFocus();
                this.addInput('\t');
                break;
            case 'CapsLock':
                this.inputFocus();
                this.capsLock();
                break;
            case 'ShiftLeft':
                this.inputFocus();
                break;
            case 'ShiftRight':
                this.inputFocus();
                break;
            case 'ControlLeft':
                this.inputFocus();
                break;
            case 'ControlRight':
                this.inputFocus();
                break;
            case 'AltLeft':
                this.inputFocus();
                break;
            case 'AltRight':
                this.inputFocus();
                break;
            case 'MetaLeft':
                this.inputFocus();
                break;
            case 'Backspace':
                this.inputFocus();
                this.backSpace();
                break;
            case 'Space':
                this.inputFocus();
                this.addInput(' ');
                break;
            case 'Enter':
                this.inputFocus();
                this.addInput('\n');
                break;
            case 'Lang':
                this.inputFocus();
                this.changeLang();
                break;
            case 'Delete':
                this.inputFocus();
                this.delKey();
                break;

            default:
                this.addInput(key.innerHTML);
                break;
        }

    }

}

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector('body').innerHTML = (`
    <!-- <textarea placeholder="Введите текст..." class="keyboard__input" cols="30" rows="10" autofocus></textarea> -->
    <textarea
        placeholder="Введите текст... (КЛАВИАТУРА ГОТОВА НЕ ПОЛНОСТЬЮ! просьба по возможности проверить еще раз позже...)"
        class="keyboard__input" cols="30" rows="10" autofocus></textarea>
    <div class="app"></div>
    <div class="desc">
        <p>Клавиатура создана в операционной системе Windows</p>
        <p>Для переключения языка комбинация: левыe shift + alt</p>
    </div>
    `)
    new Keyboard('RU', '.app', '.keyboard__input').init();
    // new Keyboard('EN', '.app', '.keyboard__input').init();
});

