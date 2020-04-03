
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
        this.capsLockEnabled = false;
        
    }

    getDomKeys() {
        return document.querySelectorAll('.keyboard__key');
    }

    addActiveKeyboardKey() {

        this.domKeys.forEach(e => {

            e.addEventListener('mousedown', (event) => {
                //CAPS LOCK
                if (event.target.id !== '20') {
                    event.target.classList.add('keyboard__key_active');
                }
                this.pressKey(event);
            });
            e.addEventListener('mouseup', () => {
                this.domKeys.forEach(el => this.removeClassKeyActive(el));
            })
        })
    }

    removeClassKeyActive(domKey) {
        domKey.classList.remove('keyboard__key_active');
    }

    bindPhysicalKeyboardEvents() {

        const domKeys = [...this.domKeys];
        const removeClassKeyActive = this.removeClassKeyActive;

        document.addEventListener('keydown', (event) => {

            const activeKey = domKeys.find(e => {
                return e.id == event.keyCode;
            });

            if (!!activeKey) {
                if (activeKey.id !== '20') {
                    activeKey.classList.add('keyboard__key_active');
                }
            }
            event.preventDefault();

            this.pressKey(event);

        });

        document.addEventListener('keyup', () => {
            domKeys.forEach(el => removeClassKeyActive(el));
        })
    }

    toggleCapsLock() {
        this.capsLockEnabled = !this.capsLockEnabled;
        document.getElementById('20').classList.toggle('keyboard__caps-lock_active');
    }

    prepareSymbolToShowInScreen(value) {
        let result = '';
        result = this.capsLockEnabled ? value.toUpperCase() : value.toLowerCase();
        return result;
    }

    pressKey(event) {
        let vKey = this.vKeys.find(el => (el.id == event.target.id) || (el.id == event.keyCode));
        let value = vKey.value;
        switch (value) {
            case 'capsLock':
                this.toggleCapsLock();
                break;
            case 'backspace':
                this.vScreen.removeLastSymbol();
                break;
            case 'space':
                this.vScreen.addSpaceToScreen();
                break;
            case 'tab':
                this.vScreen.addTabToScreen();
                break;
            default:
                this.vScreen.addSymbolToScreen(this.prepareSymbolToShowInScreen(value));
        }
    }

    setScreen(screen) {
        this.vScreen = screen;
    }
}
