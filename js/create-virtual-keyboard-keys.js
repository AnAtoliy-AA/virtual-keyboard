import { KeyboardKey } from './keyboard-key.js';
export function createVirtualKeyboardKeys() {

    const keyArr = [
        new KeyboardKey('`', '~', 192, 1, 1),
        new KeyboardKey('1', '1', 49, 1, 2),
        new KeyboardKey('2', '2', 50, 1, 3),
        new KeyboardKey('3', '3', 51, 1, 4),
        new KeyboardKey('4', '4', 52, 1, 5),
        new KeyboardKey('5', '5', 53, 1, 6),
        new KeyboardKey('6', '6', 54, 1, 7),
        new KeyboardKey('7', '7', 55, 1, 8),
        new KeyboardKey('8', '8', 56, 1, 9),
        new KeyboardKey('9', '9', 57, 1, 10),
        new KeyboardKey('0', '0', 48, 1, 11),
        new KeyboardKey('-', '-', 189, 1, 12),
        new KeyboardKey('=', '=', 187, 1, 13),
        new KeyboardKey('backspace', 'Backspace', 8, 1, 14, 110),


        new KeyboardKey('tab', 'Tab', 9, 2, 1, 60),
        new KeyboardKey('q', 'Q', 81, 2, 2),
        new KeyboardKey('w', 'W', 87, 2, 3),
        new KeyboardKey('e', 'E', 69, 2, 4),
        new KeyboardKey('r', 'R', 82, 2, 5),
        new KeyboardKey('t', 'T', 84, 2, 6),
        new KeyboardKey('y', 'Y', 89, 2, 7),
        new KeyboardKey('u', 'U', 85, 2, 8),
        new KeyboardKey('i', 'I', 73, 2, 9),
        new KeyboardKey('o', 'O', 79, 2, 10),
        new KeyboardKey('p', 'P', 80, 2, 11),
        new KeyboardKey('[', '[', 219, 2, 12),
        new KeyboardKey(']', ']', 221, 2, 13),
        new KeyboardKey('\\', '\\', 220, 2, 14),
        new KeyboardKey('', 'DEL', 46, 2, 15),

        new KeyboardKey('capsLock', 'Caps Lock', 20, 3, 1, 90),
        new KeyboardKey('a', 'A', 65, 3, 2),
        new KeyboardKey('s', 'S', 83, 3, 3),
        new KeyboardKey('d', 'D', 68, 3, 4),
        new KeyboardKey('f', 'F', 70, 3, 5),
        new KeyboardKey('g', 'G', 71, 3, 6),
        new KeyboardKey('h', 'H', 72, 3, 7),
        new KeyboardKey('j', 'J', 74, 3, 8),
        new KeyboardKey('k', 'K', 75, 3, 9),
        new KeyboardKey('l', 'L', 76, 3, 10),
        new KeyboardKey(';', ';', 186, 3, 11),
        new KeyboardKey('', '\'', 222, 3, 12),
        new KeyboardKey('', 'Enter', 13, 3, 13, 105),

        new KeyboardKey('', 'Shift', 16, 4, 1, 110),
        new KeyboardKey('z', 'Z', 90, 4, 2),
        new KeyboardKey('x', 'X', 88, 4, 3),
        new KeyboardKey('c', 'C', 67, 4, 4),
        new KeyboardKey('v', 'V', 86, 4, 5),
        new KeyboardKey('b', 'B', 66, 4, 6),
        new KeyboardKey('n', 'N', 78, 4, 7),
        new KeyboardKey('m', 'M', 77, 4, 8),
        new KeyboardKey(',', ',', 188, 4, 9),
        new KeyboardKey('.', '.', 190, 4, 10),
        new KeyboardKey('/', '/', 191, 4, 11),
        new KeyboardKey('', '&uarr;', 38, 4, 12),
        new KeyboardKey('', 'Shift', 16, 4, 13, 85),

        new KeyboardKey('', 'Ctrl', 17, 5, 1),
        new KeyboardKey('', 'Win', 91, 5, 2),
        new KeyboardKey('', 'Alt', 18, 5, 3),
        new KeyboardKey('space', 'Space', 32, 5, 4, 345),
        new KeyboardKey('', 'Alt', 18, 5, 5),
        new KeyboardKey('', '&larr;', 37, 5, 7),
        new KeyboardKey('', '&darr;', 40, 5, 8),
        new KeyboardKey('', '&rarr;', 39, 5, 9),
        new KeyboardKey('', 'Ctrl', 17, 5, 6),
    ];
    return keyArr;
}