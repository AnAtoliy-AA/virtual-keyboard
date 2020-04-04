class VirtualScreen {
  constructor() {
    this.domScreen = '';
    this.createDomScreen();
  }

  createDomScreen() {
    const screen = document.createElement('textarea');
    screen.classList.add('virtual-screen');
    this.domScreen = document.body.appendChild(screen);
    this.domScreen.textContent = '';
  }

  addSymbolToScreen(value) {
    this.domScreen.textContent += value;
  }

  removeLastSymbol() {
    this.domScreen.textContent = this.domScreen.textContent.slice(0, -1);
  }

  addSpaceToScreen() {
    this.domScreen.textContent += '\u{0020}';
  }

  addTabToScreen() {
    this.domScreen.textContent += '\u{0009}';
  }
}

export default VirtualScreen;
