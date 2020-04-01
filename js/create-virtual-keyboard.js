import { createKeyboardKeys } from './create-keyboard-key';
 export function createVirtualKeyboard() {
    const body = document.body;
    let keyboard = document.createElement('div');
    body.appendChild(keyboard);
   // keyboard.style.display = 'flex';
    keyboard.classList.add('virtualKeyboard');
    let keyArr = createKeyboardKeys();
    
    for (let i = 0; i < keyArr.length; i++) {
        let kKey = keyArr[i];
        let el = document.createElement('div');
        el.innerHTML = kKey.valueLabel;

        el.style.width = kKey.width + 'px';
        el.style.height = kKey.height + 'px';
        el.style.color = kKey.fontColor;
        el.style.background = kKey.backgroundColor;

        keyboard.appendChild(el);
    }
}