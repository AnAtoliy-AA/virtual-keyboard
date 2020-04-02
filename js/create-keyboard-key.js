import { KeyboardKey } from './keyboard-key.js';
export function createKeyboardKeys() {

    const keyArr = [
        new KeyboardKey('', '~', 1, 1),
        new KeyboardKey('1', '1', 1, 2),
        new KeyboardKey('2', '2', 1, 3),
        new KeyboardKey('3', '3', 1, 4),
        new KeyboardKey('4', '4', 1, 5),
        new KeyboardKey('5', '5', 1, 6),
        new KeyboardKey('6', '6', 1, 7),
        new KeyboardKey('7', '7', 1, 8),
        new KeyboardKey('8', '8', 1, 9),
        new KeyboardKey('9', '9', 1, 10),
        new KeyboardKey('0', '0', 1, 11),
        new KeyboardKey('-', '-', 1, 12),
        new KeyboardKey('=', '=', 1, 13),
        new KeyboardKey('', 'Backspace', 1, 14),


        new KeyboardKey('', 'Tab', 1, 1),
        new KeyboardKey('q', 'Q', 2, 2),
        new KeyboardKey('w', 'W', 2, 3),
        new KeyboardKey('e', 'E', 2, 4),
        new KeyboardKey('r', 'R', 2, 5),
        new KeyboardKey('t', 'T', 2, 6),
        new KeyboardKey('y', 'Y', 2, 7),
        new KeyboardKey('u', 'U', 2, 8),
        new KeyboardKey('i', 'I', 2, 9),
        new KeyboardKey('o', 'O', 2, 10),
        new KeyboardKey('p', 'P', 2, 11),
        new KeyboardKey('', '[', 2, 12),
        new KeyboardKey('', ']', 2, 13),
        new KeyboardKey('', '/', 2, 14),
        new KeyboardKey('', 'DEL', 2, 15)
    ];
    return keyArr;
}