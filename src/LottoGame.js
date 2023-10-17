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
}

module.exports = LottoGame;
