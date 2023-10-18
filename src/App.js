const { Console, Random } = require('@woowacourse/mission-utils');
const CONSTANT = require('./Constant');
const Validator = require('./Validator');
const Lotto = require('./Lotto');
const Prompt = require('./Prompt');
const LottoGame = require('./LottoGame');

class App {
  #money;

  #lottoQuantity;

  #lottoGame = new LottoGame();

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
    Prompt.printLottoLists(this.#lottoGame.getLottoList());
    this.#getWinningNumbers();
  }

  #getRandomLottoNumbers() {
    const tempLottoList = [];
    for (let i = 0; i < this.#lottoQuantity; i++) {
      const tempLotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, CONSTANT.LOTTO_NUMS));
      tempLottoList.push(tempLotto);
    }
    this.#lottoGame.setLottoList(tempLottoList);
  }

  #makeWinningArray(numString) {
    return numString.split(',');
  }

  #getWinningNumbers() {
    Console.readLine(CONSTANT.ENTER_WINNING_NUMBERS, (inputString) => {
      const tempArr = this.#makeWinningArray(inputString);
      const tempLotto = new Lotto(tempArr);
      this.#lottoGame.setWinningNumbers(tempLotto);
      this.#getBonusNumber();
    });
  }

  #getBonusNumber() {
    Console.readLine(CONSTANT.ENTER_BONUS_NUMBER, (input) => {
      this.#lottoGame.setBonusNumber(Number(input));
      this.#makeLottoRank();
    });
  }

  #makeLottoRank() {
    this.#lottoGame.calculateLottoRank();
    Console.print(this.#lottoGame.getRank());
  }
}

module.exports = App;
