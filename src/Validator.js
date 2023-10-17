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
}

module.exports = Validator;
