const { Console } = require('@woowacourse/mission-utils');
const CONSTANT = require('./Constant');
const Validator = require('./Validator');

class App {
  #money;

  #lottoQuantity;

  play() {
    this.#getMoney();
  }

  #getMoney() {
    Console.readLine(CONSTANT.ENTER_MONEY, (inputMoney) => {
      this.#validateMoney(inputMoney);
      this.#money = inputMoney;
    });
    this.#calculateLottoQuantity();
  }

  #validateMoney(testMoney) {
    if (!Validator.checkIsNumber(testMoney)) {
      throw new Error(CONSTANT.ERROR_NOT_A_NUMBER);
    }
    if (!Validator.checkIsThousands(testMoney)) {
      throw new Error(CONSTANT.ERROR_NOT_THOUSANDS);
    }
  }

  #calculateLottoQuantity() {
    this.#lottoQuantity = this.#money / 1000;
  }
}

module.exports = App;
