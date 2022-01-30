import { createContext, ReactNode, useContext } from 'react';

const useBitcoin = () => {
  return {
    getCoinGeckoData: () => {},
  };
};

const BitcoinContext = createContext<ReturnType<typeof useBitcoin> | null>(
  null
);

export const useBitcoinContext = () => useContext(BitcoinContext)!;

export function StoreProvider({ children }: { children: ReactNode }) {
  return (
    <BitcoinContext.Provider value={useBitcoin()}>
      {children}
    </BitcoinContext.Provider>
  );
}
