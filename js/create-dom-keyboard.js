import { createVirtualKeyboardKeys } from './create-virtual-keyboard-keys';
export function createDomKeyboard() {
    const body = document.body;
    let keyboard = document.createElement('div');
    body.appendChild(keyboard);
    keyboard.classList.add('virtual-keyboard');
    let keyArr = createVirtualKeyboardKeys();

    for (let i = 1; i < 6; i++) {
        let domKeyboardRow = document.createElement('div');
        domKeyboardRow.id = `row_${i}`;
        domKeyboardRow.classList.add('keyboard__row');
        keyboard.appendChild(domKeyboardRow);

    }

    for (let i = 0; i < keyArr.length; i++) {
        let kKey = keyArr[i];
        let el = document.createElement('div');
        el.innerHTML = kKey.valueLabel;
        el.style.width = kKey.width + 'px';
        el.classList.add('keyboard__key');
        el.id = kKey.id;
        document.getElementById(`row_${kKey.row}`).appendChild(el);
    }

    return document.querySelectorAll('.virtual-keyboard div');
}