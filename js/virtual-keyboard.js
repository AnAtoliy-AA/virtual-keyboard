
import { createVirtualKeyboardKeys } from './create-virtual-keyboard-keys';
import { createDomKeyboard } from './create-dom-keyboard';

export class VirtualKeyboard {
    constructor() {
        this.vKeys = createVirtualKeyboardKeys();
        
        this.domScreen = document.querySelector('.virtual-screen');
        this.domKeyboard = createDomKeyboard();
        this.addActiveKeyboardKey();
    }

    addActiveKeyboardKey() {
      
      this.domKeyboard.forEach(e => {

            e.addEventListener('click', (event) => {

                this.domKeyboard.forEach(el => el.classList.remove('keyboard__key_active'));
                event.target.classList.add('keyboard__key_active');
                this.pressKey(event);

            });
        })
    }

    pressKey(event) {
       let vKey  = this.vKeys.find(el => el.id === event.target.id);
        console.log('Press Key: ', vKey);
        this.domScreen.textContent += vKey.value;
    }
}
