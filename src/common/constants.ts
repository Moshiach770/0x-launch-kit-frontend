import { BigNumber } from '0x.js';

export const RELAYER_URL = process.env.REACT_APP_RELAYER_URL || 'http://localhost:3001/api/v2';

export const MAINNET_ID: number = Number.parseInt(process.env.REACT_APP_MAINNET_ID as string, 10) || 1;

export const TX_DEFAULTS = {
    gasLimit: 1000000,
};

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export const FEE_RECIPIENT = process.env.REACT_APP_FEE_RECIPIENT || ZERO_ADDRESS;

// these constants should be in wei
export const MAKER_FEE = new BigNumber(process.env.REACT_APP_MAKER_FEE || '1000000000000000000');
export const TAKER_FEE = new BigNumber(process.env.REACT_APP_TAKER_FEE || '100000000000000000');

export const ETH_MARKET_PRICE_API_ENDPOINT =
    process.env.REACT_APP_ETH_MARKET_PRICE_API_ENDPOINT || 'https://api.coinmarketcap.com/v1/ticker/ethereum/';

export const ZEROX_MARKET_PRICE_API_ENDPOINT =
    process.env.REACT_APP_ZEROX_MARKET_PRICE_API_ENDPOINT || 'https://api.coinmarketcap.com/v1/ticker/0x/';

export const CACHE_CHECK_INTERVAL: number =
    Number.parseInt(process.env.REACT_APP_CACHE_CHECK_INTERVAL as string, 10) || 60000;

export const UI_UPDATE_CHECK_INTERVAL: number =
    Number.parseInt(process.env.REACT_APP_UI_UPDATE_CHECK_INTERVAL as string, 10) || 5000;

export const UI_DECIMALS_DISPLAYED_ORDER_SIZE = 4;
export const UI_DECIMALS_DISPLAYED_PRICE_ETH = 7;

export const METAMASK_USER_DENIED_AUTH = 'User denied Auth';
export const METAMASK_NOT_INSTALLED = 'User does not have metamask installed';
export const METAMASK_DEFAULT_ERROR = 'An error ocurred with metamask';

export const METAMASK_EXTENSION_URL = 'https://metamask.io/';

export const UPDATE_ETHER_PRICE_INTERVAL: number =
    Number.parseInt(process.env.REACT_APP_UPDATE_ETHER_PRICE_INTERVAL as string, 10) || 3600000;

export const NOTIFICATIONS_LIMIT: number =
    Number.parseInt(process.env.REACT_APP_NOTIFICATIONS_LIMIT as string, 10) || 20;

export const ETH_GAS_STATION_API_BASE_URL = 'https://ethgasstation.info';

export const GWEI_IN_WEI = new BigNumber(1000000000);

export const ONE_MINUTE_MS = 1000 * 60;

export const DEFAULT_GAS_PRICE = GWEI_IN_WEI.mul(6);

export const DEFAULT_ESTIMATED_TRANSACTION_TIME_MS = ONE_MINUTE_MS * 2;

export const GIT_COMMIT: string = process.env.REACT_APP_GIT_COMMIT || '';

export const START_BLOCK_LIMIT: number = Number.parseInt(process.env.REACT_APP_START_BLOCK_LIMIT as string, 10) || 1000;
