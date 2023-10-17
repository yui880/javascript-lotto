const Validator = require('./Validator');
const CONSTANT = require('./Constant');

class LottoGame {
  #winningNumbers;

  #bonusNumber;

  #lottoList;

  setWinningNumbers(numbers) {
    this.#winningNumbers = numbers;
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  setBonusNumber(number) {
    this.#validateBonusNumber(number);
    this.#bonusNumber = number;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  setLottoList(lotto) {
    this.#lottoList = lotto;
  }

  getLottoList() {
    return this.#lottoList;
  }

  #validateBonusNumber(input) {
    if (!Number.isNaN(input)) {
      throw new Error(CONSTANT.ERROR_NOT_ALL_NUMBERS);
    }
    if (!Validator.checkIsInRange(input)) {
      throw new Error(CONSTANT.ERROR_IS_NOT_IN_RANGE);
    }
  }
}

module.exports = LottoGame;
