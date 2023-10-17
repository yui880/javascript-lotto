const { Console } = require('@woowacourse/mission-utils');
const Constant = require('./Constant');
const Validator = require('./Validator');

class App {
  #money;

  play() {
    this.#getMoney();
  }

  #getMoney() {
    Console.readLine(Constant.ENTER_MONEY, (inputMoney) => {
      this.#validateMoney(inputMoney);
      this.#money = inputMoney;
    });
  }

  #validateMoney(testMoney) {
    if (!Validator.checkIsNumber(testMoney)) {
      throw new Error('[Error] 금액이 숫자가 아닙니다.');
    }
    if (!Validator.checkIsThousands(testMoney)) {
      throw new Error('[Error] 금액이 1,000원 단위가 아닙니다.');
    }
  }
}

module.exports = App;
