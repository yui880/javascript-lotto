const CONSTANT = require('./Constant');
const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    const tempNumbers = this.#changeToNumber(numbers);
    this.#validate(tempNumbers);
    this.#numbers = tempNumbers;
    this.#sortLotto();
  }

  #changeToNumber(numbers) {
    return numbers.map(Number);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(CONSTANT.ERROR_NOT_SIX_NUMS);
    }
    if (!Validator.checkIsAllNumber(numbers)) {
      throw new Error(CONSTANT.ERROR_NOT_ALL_NUMBERS);
    }
    if (!Validator.checkIsNumsInRange(numbers)) {
      throw new Error(CONSTANT.ERROR_IS_NOT_IN_RANGE);
    }
    if (!Validator.checkHasDuplicate(numbers)) {
      throw new Error(CONSTANT.ERROR_HAS_DUPLICATE);
    }
  }

  getLotto() {
    return this.#numbers;
  }

  #sortLotto() {
    this.#numbers.sort((a, b) => a - b);
  }
}

module.exports = Lotto;
