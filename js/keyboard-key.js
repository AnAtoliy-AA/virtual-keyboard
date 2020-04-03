export class KeyboardKey {

    constructor(value, valueLabel, keyCode, row, position, width, fontColor, backgroundColor) {
        this.value = value;
        this.valueLabel = valueLabel;
        this.keyCode = keyCode;
        this.row = row;
        this.position = position;
        this.width = width ? width : 40;
        this.id = keyCode;


        // this.width = width;
        // this.height = 40;
        // this.fontColor = fontColor;
        // this.backgroundColor = backgroundColor;
        // this.optionalValue = optionalValue;
        // this.optionalValueLabel = optionalValueLabel;
    }
}

