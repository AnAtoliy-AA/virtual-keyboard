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
    this.domScreen.focus();
  }

  addSymbolToScreen(value) {
    this.domScreen.setRangeText(value);
    this.rightArrowMove();
  }

  removeLastSymbol() {
    this.domScreen.selectionEnd -= 1;
    this.domScreen.selectionEnd += 1;
    this.domScreen.setRangeText('');
  }

  removeRightSymbol() {
    this.domScreen.selectionEnd += 1;
    this.domScreen.setRangeText('');
  }

  addSpaceToScreen() {
    this.domScreen.setRangeText('\u{0020}');
    this.rightArrowMove();
  }

  addEnterToScreen() {
    this.domScreen.setRangeText('\n');
    this.rightArrowMove();
  }

  leftArrowMove() {
    this.domScreen.selectionEnd -= 1;
    this.domScreen.selectionStart = this.domScreen.selectionEnd;
  }

  rightArrowMove() {
    this.domScreen.selectionEnd += 1;
    this.domScreen.selectionStart = this.domScreen.selectionEnd;
  }

  addTabToScreen() {
    this.domScreen.setRangeText('\u{0009}');
    this.rightArrowMove();
  }
}

export default VirtualScreen;
