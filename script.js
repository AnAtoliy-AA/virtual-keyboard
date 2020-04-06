import VirtualScreen from './js/virtual-screen';
import VirtualKeyboard from './js/virtual-keyboard';

function runVirtualKeyboardApp() {
  const screen = new VirtualScreen();
  const keyboard = new VirtualKeyboard();
  const addInfo = document.createElement('div');

  keyboard.setScreen(screen);

  addInfo.innerHTML = 'OS: Windows. To change language press: Alt + Shift';
  document.body.appendChild(addInfo);
}
document.body.onload = runVirtualKeyboardApp;
