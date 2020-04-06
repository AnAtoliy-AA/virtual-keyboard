
import createVirtualKeyboardKeys from './create-virtual-keyboard-keys';

const KEY_CODES = {
  SHIFT: '16',
  CAPSLOCK: '20',
  ALT: '18',
  CTRL: '17',
};

class VirtualKeyboard {
  constructor() {
    this.englishLanguage = sessionStorage.lastSelectedLanguage === 'true';
    this.cssClassNameConfig = {
      keyboardKeyActive: 'keyboard__key_active',
    };
    this.vKeys = createVirtualKeyboardKeys();

    this.domScreen = document.querySelector('.virtual-screen');
    this.domKeyboard = this.createDomKeyboard();
    this.domKeys = document.querySelectorAll('.keyboard__key');
    this.addActiveKeyboardKey();
    this.bindPhysicalKeyboardEvents();
    this.capsLockEnabled = false;
    this.shiftPressed = false;
    this.keepPressedButtonsArray = [];
  }

  createDomKeyboard() {
    const { body } = document;
    const keyboard = document.createElement('div');
    const keyArr = createVirtualKeyboardKeys();

    body.appendChild(keyboard);
    keyboard.classList.add('virtual-keyboard');

    for (let i = 1; i < 6; i += 1) {
      const domKeyboardRow = document.createElement('div');

      domKeyboardRow.id = `row_${i}`;
      domKeyboardRow.classList.add('keyboard__row');
      keyboard.appendChild(domKeyboardRow);
    }

    for (let i = 0; i < keyArr.length; i += 1) {
      const kKey = keyArr[i];
      const el = document.createElement('div');

      el.innerHTML = this.englishLanguage ? kKey.valueLabel : kKey.rusValueLabel;
      el.style.width = `${kKey.width}px`;
      el.classList.add('keyboard__key');
      el.id = kKey.id;
      document.getElementById(`row_${kKey.row}`).appendChild(el);
    }

    return document.querySelectorAll('.virtual-keyboard div');
  }

  addActiveKeyboardKey() {
    this.domKeys.forEach((e) => {
      e.addEventListener('mousedown', (event) => {
        // CAPS LOCK
        if (event.target.id !== KEY_CODES.CAPSLOCK) {
          event.target.classList.add(this.cssClassNameConfig.keyboardKeyActive);
        }
        this.pressKey(event);
      });
      e.addEventListener('mouseup', () => {
        this.domKeys.forEach((el) => this.removeClassKeyActive(el));
      });
    });
  }

  removeClassKeyActive(domKey) {
    domKey.classList.remove(this.cssClassNameConfig.keyboardKeyActive);
  }

  bindPhysicalKeyboardEvents() {
    const domKeys = [...this.domKeys];

    document.addEventListener('keydown', (event) => {
      const activeKey = domKeys.find((e) => +e.id === +event.keyCode);

      if (activeKey) {
        if (activeKey.id !== KEY_CODES.CAPSLOCK) {
          activeKey.classList.add(this.cssClassNameConfig.keyboardKeyActive);
        }
        this.addKeepPressedButtonsArray(activeKey.id);
        this.pressKey(event);
      }

      event.preventDefault();
    });

    document.addEventListener('keyup', (event) => {
      const activeKey = domKeys.find((e) => +e.id === +event.keyCode);

      if (activeKey) {
        domKeys.forEach((el) => this.removeClassKeyActive(el));
        this.removeKeepPressedButtonsArray(activeKey.id);
      }

      if (event.keyCode === KEY_CODES.SHIFT) {
        this.disableShift();
      }
      this.analysePressedKeys();
    });
  }

  addKeepPressedButtonsArray(id) {
    if (this.keepPressedButtonsArray.indexOf(id) === -1) {
      this.keepPressedButtonsArray.push(id);
    }
  }

  removeKeepPressedButtonsArray(id) {
    const index = this.keepPressedButtonsArray.indexOf(id);

    this.keepPressedButtonsArray.splice(index, 1);
  }

  toggleCapsLock() {
    this.capsLockEnabled = !this.capsLockEnabled;
    document.getElementById(KEY_CODES.CAPSLOCK).classList.toggle('keyboard__caps-lock_active');
  }

  prepareSymbolToShowInScreen(vKey) {
    let result = '';
    if (this.englishLanguage) {
      if (this.capsLockEnabled) {
        if (this.shiftPressed) {
          result = vKey.alternativeValue || vKey.value.toLowerCase();
        } else {
          result = vKey.value.toUpperCase();
        }
      } else if (this.shiftPressed) {
        result = vKey.alternativeValue || vKey.value.toUpperCase();
      } else {
        result = vKey.value.toLowerCase();
      }
    } else if (this.capsLockEnabled) {
      if (this.shiftPressed) {
        result = vKey.alternativeValue || vKey.rusValue.toLowerCase();
      } else {
        result = vKey.rusValue.toUpperCase();
      }
    } else if (this.shiftPressed) {
      result = vKey.rusAlternativeValue || vKey.rusValue.toUpperCase();
    } else {
      result = vKey.rusValue.toLowerCase();
    }

    return result;
  }

  analysePressedKeys() {
    // Alt+Shift
    if (this.keepPressedButtonsArray.filter((e) => e === KEY_CODES.ALT
      || e === KEY_CODES.SHIFT).length === 2) {
      this.toggleEnglishLanguage();
    }
    // Shift pressed
    if (this.keepPressedButtonsArray.filter((e) => e === KEY_CODES.SHIFT).length === 1) {
      this.enableShift();
    }
    // Shift unpressed
    if (this.keepPressedButtonsArray.filter((e) => e === KEY_CODES.SHIFT).length === 0) {
      this.disableShift();
    }
    this.setVirtualKeyboardKeyCase();
  }

  enableShift() {
    this.shiftPressed = true;
  }

  disableShift() {
    this.shiftPressed = false;
  }

  setVirtualKeyboardKeyCase() {
    const domKeys = [...this.domKeys];

    domKeys
      // filters only letters to change regiter
      .filter((el) => el.innerHTML && el.innerHTML.length === 1)
      .forEach((el) => {
        const domKey = el;

        if ((this.shiftPressed && this.capsLockEnabled)
          || (!this.shiftPressed && !this.capsLockEnabled)) {
          domKey.innerHTML = domKey.innerHTML.toLowerCase();
        } else {
          domKey.innerHTML = domKey.innerHTML.toUpperCase();
        }
      });
  }

  toggleEnglishLanguage() {
    this.englishLanguage = !this.englishLanguage;

    sessionStorage.setItem('lastSelectedLanguage', this.englishLanguage);

    this.domKeys.forEach((el) => {
      const domKey = el;
      const key = this.vKeys.find((e) => e.id === +domKey.id);
      const engVal = key.valueLabel;
      const rusVal = key.rusValueLabel;

      domKey.innerHTML = this.englishLanguage ? engVal : rusVal;
    });
  }

  pressKey(event) {
    this.analysePressedKeys();

    const vKey = this.vKeys.find((el) => el.id === +event.target.id || el.id === +event.keyCode);

    switch (vKey.value) {
      case 'capsLock':
        this.toggleCapsLock();
        break;
      case 'backspace':
        this.vScreen.removeLastSymbol();
        break;
      case 'del':
        this.vScreen.removeRightSymbol();
        break;
      case 'space':
        this.vScreen.addSpaceToScreen();
        break;
      case 'tab':
        this.vScreen.addTabToScreen();
        break;
      case 'enter':
        this.vScreen.addEnterToScreen();
        break;
      default:
        this.vScreen.addSymbolToScreen(this.prepareSymbolToShowInScreen(vKey));
    }
  }

  setScreen(screen) {
    this.vScreen = screen;
  }
}

export default VirtualKeyboard;
