const { Console } = require('@woowacourse/mission-utils');
const Constant = require('./Constant');

class App {
  #money;

  play() {
    this.#getMoney();
  }

  #getMoney() {
    Console.readLine(Constant.ENTER_MONEY, (inputMoney) => {
      this.#money = inputMoney;
    });
  }
}

module.exports = App;
