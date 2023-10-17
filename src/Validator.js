class Validator {
  static isNumber(input) {
    return !isNaN(input);
  }

  static checkIsNumber(input) {
    return this.isNumber(input);
  }

  static checkIsThousands(input) {
    return input % 1000 === 0;
  }

  static checkIsSixNums(inputs) {
    return inputs.length === 6;
  }
}

module.exports = Validator;
