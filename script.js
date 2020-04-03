import { VirtualScreen } from './js/virtual-screen';
import { VirtualKeyboard } from './js/virtual-keyboard';

document.body.onload = runVirtualKeyboardApp;

function runVirtualKeyboardApp() {
    const screen = new VirtualScreen();
    const keyboard = new VirtualKeyboard();
    keyboard.setScreen(screen);
}