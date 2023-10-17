const { Console } = require('@woowacourse/mission-utils');
const Constant = require('./Constant');

class Prompt {
  static printQuantity(quantity) {
    Console.print(quantity + Constant.PRINT_QUANTITY);
  }

  static printLottoLists(LottoList) {
    LottoList.forEach((lotto) => {
      Console.print(lotto.getLotto());
    });
  }
}

module.exports = Prompt;
