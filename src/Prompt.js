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

  static printLottoResult(lottoData) {
    const [rank, rateOfReturn] = lottoData;
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${rank[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${rank[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${rank[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank[3]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${rank[4]}개`);
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

module.exports = Prompt;
