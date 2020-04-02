export function createDomScreen() {
    let screen = document.createElement('textarea');
    screen.classList.add('virtual-screen')
    document.body.appendChild(screen);
}
