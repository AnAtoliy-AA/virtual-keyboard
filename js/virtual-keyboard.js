
import { createVirtualKeyboardKeys } from './create-virtual-keyboard-keys';
import { createDomKeyboard } from './create-dom-keyboard';

export class VirtualKeyboard {
    constructor() {
        this.vKeys = createVirtualKeyboardKeys();

        this.domScreen = document.querySelector('.virtual-screen');
        this.domKeyboard = createDomKeyboard();
        this.domKeys = this.getDomKeys();
        this.addActiveKeyboardKey();
        this.bindPhysicalKeyboardEvents();
    }

    getDomKeys() {
        return document.querySelectorAll('.keyboard__key');
    }

    addActiveKeyboardKey() {

        this.domKeys.forEach(e => {
            e.addEventListener('click', (event) => {
                this.domKeys.forEach(el => this.removeClassKeyActive(el));
                event.target.classList.add('keyboard__key_active');
                this.pressKey(event);

            });
        })
    }

    removeClassKeyActive(domKey) {
        domKey.classList.remove('keyboard__key_active');
    }

    bindPhysicalKeyboardEvents() {

        const domKeys = [...this.domKeys];
        const removeClassKeyActive = this.removeClassKeyActive;

        document.addEventListener('keydown',(event) => {

            const activeKey = domKeys.find(e => {
                return e.id == event.keyCode;
            });

            if (!!activeKey) {
                domKeys.forEach(el => removeClassKeyActive(el));
                activeKey.classList.add('keyboard__key_active');
           }
          event.preventDefault();
       
         this.pressKey(event);

        });
    }


    pressKey(event) {
        let vKey = this.vKeys.find(el => (el.id == event.target.id)||(el.id == event.keyCode));
        let value = vKey.value;
        switch (value) {
            case 'backspace':
                this.vScreen.removeLastSymbol();
                break;
            default:
                this.vScreen.addSymbolToScreen(value);
        }
    }

    setScreen(screen) {
        this.vScreen = screen;
    }
}
