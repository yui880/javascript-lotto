const CONSTANT = require('./Constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(CONSTANT.ERROR_NOT_SIX_NUMS);
    }
  }
}

module.exports = Lotto;
