const CONSTANT = require('./Constant');

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
  }

  getLotto() {
    return this.#numbers;
  }

  sortLotto() {
    this.#numbers.sort((a, b) => a - b);
  }
}

module.exports = Lotto;
