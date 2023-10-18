const Validator = require('./Validator');
const CONSTANT = require('./Constant');

class LottoGame {
  #winningNumbers;

  #bonusNumber;

  #lottoList;

  #rank = [0, 0, 0, 0, 0];

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

  getRank() {
    return this.#rank;
  }

  #validateBonusNumber(input) {
    if (Number.isNaN(input)) {
      throw new Error(CONSTANT.ERROR_NOT_ALL_NUMBERS);
    }
    if (!Validator.checkIsInRange(input)) {
      throw new Error(CONSTANT.ERROR_IS_NOT_IN_RANGE);
    }
  }

  calculateLottoRank() {
    for (let i = 0; i < this.#lottoList.length; i++) {
      const tempRank = this.#findNumOfWinnings(this.#lottoList[i].getLotto());
      if (tempRank < 3) continue;
      if (tempRank === 5) {
        this.#calculateBonusRank(this.#lottoList[i].getLotto());
        continue;
      }
      this.#rank[tempRank - 3] += 1;
    }
  }

  #findNumOfWinnings(numbers) {
    return 2 * CONSTANT.LOTTO_NUMS - new Set([...this.#winningNumbers.getLotto(), ...numbers]).size;
  }

  #calculateBonusRank(numbers) {
    if (new Set([...this.#winningNumbers.getLotto(), this.#bonusNumber, ...numbers]).size === 7) {
      this.#rank[3] += 1;
      return;
    }
    this.#rank[2] += 1;
  }
}

module.exports = LottoGame;
