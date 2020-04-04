class KeyboardKey {
  constructor(value, valueLabel, rusValue, rusValueLabel, keyCode, row, position, width) {
    this.value = value;
    this.valueLabel = valueLabel;
    this.rusValue = rusValue;
    this.rusValueLabel = rusValueLabel;
    this.keyCode = keyCode;
    this.row = row;
    this.position = position;
    this.width = width || 40;
    this.id = keyCode;


    // this.width = width;
    // this.height = 40;
    // this.fontColor = fontColor;
    // this.backgroundColor = backgroundColor;
    // this.optionalValue = optionalValue;
    // this.optionalValueLabel = optionalValueLabel;
  }
}
export default KeyboardKey;
