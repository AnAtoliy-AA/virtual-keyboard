
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
        this.englishLanguage = true;
        this.keepPressedButtonsArray = [];

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

        // document.addEventListener('keypress', (event) => {
        //    // console.log(event);
        //     if (event.id == '16') && (event.id == '18') {
        //     
        //         console.log('CHANGE LANG');
        //     }
        // });

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
         //   console.log('keepPressedButtonsArray', this.keepPressedButtonsArray);
            this.addKeepPressedButtonsArray(activeKey.id);
            this.pressKey(event);

        });

        document.addEventListener('keyup', (event) => {
            const activeKey = domKeys.find(e => {
                return e.id == event.keyCode;
            });
            domKeys.forEach(el => removeClassKeyActive(el));
            this.removeKeepPressedButtonsArray(activeKey.id);
        })

    }

    addKeepPressedButtonsArray(id) {
      if  (this.keepPressedButtonsArray.indexOf(id) === -1) {
        this.keepPressedButtonsArray.push(id);
      } 
     //   console.log('add keepPressedButtonsArray', this.keepPressedButtonsArray);
    }
    removeKeepPressedButtonsArray(id) {
    //    console.log('id',id);
        const index = this.keepPressedButtonsArray.indexOf(id);
     //   console.log('index',index);
        this.keepPressedButtonsArray.splice(index, 1);
     //   console.log('delete keepPressedButtonsArray', this.keepPressedButtonsArray);
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
    analysePressedKeys() {
       
       // console.log('delete keepPressedButtonsArray', this.keepPressedButtonsArray);
        if (this.keepPressedButtonsArray.filter(e => e == '18' || e == '16').length === 2) {
           
            
            console.log('Change Locale');
        }
    }
    pressKey(event) {
        this.analysePressedKeys();
        
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
