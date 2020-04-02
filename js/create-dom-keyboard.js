import { createVirtualKeyboardKeys } from './create-virtual-keyboard-keys';
 export function createDomKeyboard() {
    const body = document.body;
    let keyboard = document.createElement('div');
    body.appendChild(keyboard);
    keyboard.classList.add('virtual-keyboard');
    let keyArr = createVirtualKeyboardKeys();
    
    for (let i = 0; i < keyArr.length; i++) {
        let kKey = keyArr[i];
        let el = document.createElement('div');
        el.innerHTML = kKey.valueLabel;
        el.classList.add('keyboard__key');
        el.id = kKey.id;
        keyboard.appendChild(el);  
    }

    return  document.querySelectorAll('.virtual-keyboard div');
}