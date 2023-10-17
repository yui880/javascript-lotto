class Validator {
  static isNumber(input) {
    return !Number.isNaN(input);
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

  static checkIsAllNumber(inputs) {
    return inputs.filter((item) => !this.isNumber(item)).length <= 0;
  }

  static checkIsNumsInRange(inputs) {
    for (let i = 0; i < inputs.length; i++) {
      if (!this.checkIsInRange(inputs[i])) return false;
    }
    return true;
  }

  static checkIsInRange(input) {
    if (input < 1 || input > 45) return false;
    return true;
  }

  static checkHasDuplicate(inputs) {
    return inputs.length === new Set(inputs).size;
  }
}

module.exports = Validator;
