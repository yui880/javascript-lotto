현const { Console } = require('@woowacourse/mission-utils');
const Constant = require('./Constant');

class Prompt {
  static printQuantity(quantity) {
    Console.print(quantity + Constant.PRINT_QUANTITY);
  }
}

module.exports = Prompt;
