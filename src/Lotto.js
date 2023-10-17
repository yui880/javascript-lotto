const CONSTANT = require('./Constant');
const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.sortLotto();
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(CONSTANT.ERROR_NOT_SIX_NUMS);
    }
    if (!Validator.checkIsAllNumber(numbers)) {
      throw new Error(CONSTANT.ERROR_NOT_ALL_NUMBERS);
    }
    if (!Validator.checkIsInRange(numbers)) {
      throw new Error(CONSTANT.ERROR_IS_NOT_IN_RANGE);
    }
    if (!Validator.checkHasDuplicate(numbers)) {
      throw new Error(CONSTANT.ERROR_HAS_DUPLICATE);
    }
  }

  getLotto() {
    return this.#numbers;
  }

  sortLotto() {
    this.#numbers.sort((a, b) => a - b);
  }
}

module.exports = Lotto;
