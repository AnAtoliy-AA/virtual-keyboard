import { createVirtualKeyboard } from './js/create-virtual-keyboard';
import { createScreen } from './js/create-screen';
import { addActiveKeyboardKey } from './js/add-active-keyboard-key';

document.body.onload = runVirtualKeyboardApp;

function runVirtualKeyboardApp() {
    createScreen();
    createVirtualKeyboard();
    addActiveKeyboardKey();
}
