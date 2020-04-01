import { KeyboardKey } from './keyboard-key.js';
export function createKeyboardKeys() {

    const keyArr = [
        new KeyboardKey('', '~', 1, 1, 40, '#fff', '#7a8684'),
        new KeyboardKey('1', '1', 1, 2, 40, '#fff', '#7a8684'),
        new KeyboardKey('2', '2', 1, 3, 40, '#fff', '#7a8684'),
        new KeyboardKey('3', '3', 1, 4, 40, '#fff', '#7a8684'),
        new KeyboardKey('4', '4', 1, 5, 40, '#fff', '#7a8684'),
        new KeyboardKey('5', '5', 1, 6, 40, '#fff', '#7a8684'),
        new KeyboardKey('6', '6', 1, 7, 40, '#fff', '#7a8684'),
        new KeyboardKey('7', '7', 1, 8, 40, '#fff', '#7a8684'),
        new KeyboardKey('8', '8', 1, 9, 40, '#fff', '#7a8684'),
        new KeyboardKey('9', '9', 1, 10, 40, '#fff', '#7a8684'),
        new KeyboardKey('0', '0', 1, 11, 40, '#fff', '#7a8684'),
        new KeyboardKey('-', '-', 1, 12, 40, '#fff', '#7a8684'),
        new KeyboardKey('=', '=', 1, 13, 40, '#fff', '#7a8684'),
        new KeyboardKey('', 'Backspace', 1, 14, 100, '#7a8684', '#3c3a40'),


        new KeyboardKey('', 'Tab', 1, 1, 50, '#7a8684', '#3c3a40'),
        new KeyboardKey('q', 'Q', 2, 2, 40, '#fff', '#7a8684'),
        new KeyboardKey('w', 'W', 2, 3, 40, '#fff', '#7a8684'),
        new KeyboardKey('e', 'E', 2, 4, 40, '#fff', '#7a8684'),
        new KeyboardKey('r', 'R', 2, 5, 40, '#fff', '#7a8684'),
        new KeyboardKey('t', 'T', 2, 6, 40, '#fff', '#7a8684'),
        new KeyboardKey('y', 'Y', 2, 7, 40, '#fff', '#7a8684'),
        new KeyboardKey('u', 'U', 2, 8, 40, '#fff', '#7a8684'),
        new KeyboardKey('i', 'I', 2, 9, 40, '#fff', '#7a8684'),
        new KeyboardKey('o', 'O', 2, 10, 40, '#fff', '#7a8684'),
        new KeyboardKey('p', 'P', 2, 11, 40, '#fff', '#7a8684'),
        new KeyboardKey('', '[', 2, 12, 40, '#fff', '#7a8684'),
        new KeyboardKey('', ']', 2, 13, 40, '#fff', '#7a8684'),
        new KeyboardKey('', '/', 2, 14, 40, '#fff', '#7a8684'),
        new KeyboardKey('', 'DEL', 2, 15, 40, '#fff', '#7a8684')
    ];
    return keyArr;
}