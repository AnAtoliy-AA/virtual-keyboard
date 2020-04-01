import { createVirtualKeyboard } from './js/create-virtual-keyboard';
import { createScreen } from './js/create-screen';

document.body.onload = runVirtualKeyboardApp;

function runVirtualKeyboardApp() {
    createScreen();
    createVirtualKeyboard();
}




