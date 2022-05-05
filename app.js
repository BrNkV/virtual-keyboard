
class Keyboard {
    constructor(lang) {
        this.lang = lang;
    }

    init() {
        this.favicon();
        console.log('KeyBoard init');
        console.log('Lang = ' + this.lang)
    }

    favicon() {
        let head = document.querySelector('head');
        this.lang == 'RU' || 'EN'
            ? head.innerHTML += `<link rel="shortcut icon" href="favicons/favicon-${this.lang}-32x32.png" type="image/x-icon">`
            : console.log('ERROR: lang not RU / EN');
    }

    generateKeys() {

    }
}

window.addEventListener("DOMContentLoaded", () => {
    new Keyboard('RU').init();
});

