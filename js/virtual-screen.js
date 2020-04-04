

export class VirtualScreen {
    constructor() {
        this.domScreen = this.createDomScreen();
    }
    createDomScreen() {
        let screen = document.createElement('textarea');
        screen.classList.add('virtual-screen');
        let domScreen = document.body.appendChild(screen);
        domScreen.textContent = '';
        return domScreen;
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