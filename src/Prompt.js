const { Console } = require('@woowacourse/mission-utils');
const Constant = require('./Constant');

class Prompt {
  static printQuantity(quantity) {
    Console.print(quantity + Constant.PRINT_QUANTITY);
  }

  static printLottoLists(LottoList) {
    LottoList.forEach((lotto) => {
      const tempStr = `[${lotto.getLotto().join(', ')}]`;
      Console.print(tempStr);
    });
  }
}

module.exports = Prompt;
