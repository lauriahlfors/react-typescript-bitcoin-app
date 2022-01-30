import { ICoinGeckoData } from '../types';

const bitcoinServices = {
  getCoinGeckoData: (): Promise<ICoinGeckoData> => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await fetch('').then((response) => response.json()));
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default bitcoinServices;
