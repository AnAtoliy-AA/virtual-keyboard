import { createDomScreen } from './js/create-dom-screen';
import { VirtualKeyboard } from './js/virtual-keyboard';

document.body.onload = runVirtualKeyboardApp;

function runVirtualKeyboardApp() {
    createDomScreen();
    const keyboard = new VirtualKeyboard();
}
