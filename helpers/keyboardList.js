const keyboardList = {
    'RU': {
        'Backquote': '~',
        'Digit1': '1',
        'Digit2': '2',
        'Digit3': '3',
        'Digit4': '4',
        'Digit5': '5',
        'Digit6': '6',
        'Digit7': '7',
        'Digit8': '8',
        'Digit9': '9',
        'Digit0': '0',
        'Minus': '-',
        'Equal': '=',
        'Backspace': 'BSpace',
        'Tab': 'Tab',
        'KeyQ': 'й',
        'KeyW': 'ц',
        'KeyE': 'у',
        'KeyR': 'к',
        'KeyT': 'е',
        'KeyY': 'н',
        'KeyU': 'г',
        'KeyI': 'ш',
        'KeyO': 'щ',
        'KeyP': 'з',
        'BracketLeft': 'х',
        'BracketRight': 'ъ',
        'Backslash': "'\'",
        'CapsLock': 'Caps Lock',
        'KeyA': 'ф',
        'KeyS': 'ы',
        'KeyD': 'в',
        'KeyF': 'а',
        'KeyG': 'п',
        'KeyH': 'р',
        'KeyJ': 'о',
        'KeyK': 'л',
        'KeyL': 'д',
        'Semicolon': 'ж',
        'Quote': 'э',
        'Enter': 'Enter',
        'ShiftLeft': 'LShift',
        'KeyZ': 'я',
        'KeyX': 'ч',
        'KeyC': 'с',
        'KeyV': 'м',
        'KeyB': 'и',
        'KeyN': 'т',
        'KeyM': 'ь',
        'Comma': 'б',
        'Period': 'ю',
        'Slash': '.',
        'ShiftRight': 'RShift',
        'ControlLeft': 'LCtrl',
        'MetaLeft': 'win',
        'AltLeft': 'LAlt',
        'Space': 'Пробел',
        'AltRight': 'RAlt',
        'ControlRight': 'RCtrl'
    }
}

/**
 * 
 * @param {'RU' or 'EN'} lang 
 * @return key lang list
 */
export function getKeys(lang) {
    return keyboardList[lang];
}
