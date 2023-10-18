const Validator = require('./Validator');
const CONSTANT = require('./Constant');

class LottoGame {
  #money;

  #winningNumbers;

  #bonusNumber;

  #lottoList;

  #rank = [0, 0, 0, 0, 0];

  #rateOfReturn;

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

  setMoney(money) {
    this.#money = money;
  }

  getMoney() {
    return this.#money;
  }

  getRank() {
    return this.#rank;
  }

  getRateOfReturn() {
    return this.#rateOfReturn;
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
      if (tempRank === 6) {
        this.#rank[4] += 1;
        continue;
      }
      this.#rank[tempRank - 3] += 1;
    }
    this.#calculateRateOfReturn();
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

  #calculateRateOfReturn() {
    this.#rateOfReturn = ((this.#calculateSum() / this.#money) * 100).toFixed(1);
  }

  #calculateSum() {
    return this.#rank.reduce((acc, cur, i) => acc + cur * CONSTANT.MATCHES[i], 0);
  }
}

module.exports = LottoGame;
