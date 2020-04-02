
export function addActiveKeyboardKey() {
    let keyboard = document.querySelectorAll('.virtual-keyboard div');
    let screen = document.querySelector('.virtual-screen');
    keyboard.forEach(e => {

        e.addEventListener('click', (event) => {

            keyboard.forEach(el => el.classList.remove('keyboard__key_active'));

            console.log(event);

            event.target.classList.add('keyboard__key_active');

            screen.textContent += event.target.id;


        });
    })
}

