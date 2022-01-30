export interface ICoinGeckoData {
  prices: ICoinGeckoDataObject[];
  market_caps: ICoinGeckoDataObject[];
  total_volumes: ICoinGeckoDataObject[];
}

interface ICoinGeckoDataObject {
  index: number;
  value: number;
  unix: number;
}
