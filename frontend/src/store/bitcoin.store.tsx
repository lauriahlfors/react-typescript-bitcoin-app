import { createContext, ReactNode, useContext } from 'react';

import bitcoinServices from './services/bitcoin.service';

const useBitcoin = () => {
  return {
    getCoinGeckoData: () => bitcoinServices.getCoinGeckoData().then(),
  };
};

const BitcoinContext = createContext<ReturnType<typeof useBitcoin> | null>(
  null
);

export const useBitcoinContext = () => useContext(BitcoinContext)!;

export function BitcoinProvider({ children }: { children: ReactNode }) {
  return (
    <BitcoinContext.Provider value={useBitcoin()}>
      {children}
    </BitcoinContext.Provider>
  );
}
