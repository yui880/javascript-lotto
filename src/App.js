const { Console, Random } = require('@woowacourse/mission-utils');
const CONSTANT = require('./Constant');
const Validator = require('./Validator');
const Lotto = require('./Lotto');
const Prompt = require('./Prompt');

class App {
  #money;

  #lottoQuantity;

  #lottoList = [];

  play() {
    this.#getMoney();
  }

  #getMoney() {
    Console.readLine(CONSTANT.ENTER_MONEY, (inputMoney) => {
      this.#validateMoney(inputMoney);
      this.#money = inputMoney;
      this.#calculateLottoQuantity();
    });
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
    Prompt.printQuantity(this.#lottoQuantity);
    this.#buyLotto();
  }

  #buyLotto() {
    this.#getRandomLottoNumbers();
    Prompt.printLottoLists(this.#lottoList);
  }

  #getRandomLottoNumbers() {
    for (let i = 0; i < this.#lottoQuantity; i++) {
      const tempLotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, CONSTANT.LOTTO_NUMS));
      this.#lottoList.push(tempLotto);
    }
  }
}

module.exports = App;
