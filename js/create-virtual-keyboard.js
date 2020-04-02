import { createKeyboardKeys } from './create-keyboard-key';
 export function createVirtualKeyboard() {
    const body = document.body;
    let keyboard = document.createElement('div');
    body.appendChild(keyboard);
    keyboard.classList.add('virtual-keyboard');
    let keyArr = createKeyboardKeys();
    
    for (let i = 0; i < keyArr.length; i++) {
        let kKey = keyArr[i];
        let el = document.createElement('div');
        el.innerHTML = kKey.valueLabel;
        el.classList.add('keyboard__key');
        el.id = kKey.valueLabel;
        keyboard.appendChild(el);  
    }
}