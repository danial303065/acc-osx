import { Tspec } from "tspec";

interface ISummaryAccountResponse {
    /** Result Code */
    code: number;
    data: {
        /** Address of wallet */
        account: string;
        tokenInfo: {
            /** Symbol of Token */
            symbol: string;
            /** Name of Token */
            name: string;
            /** Decimals of Token */
            decimals: number;
        };
        exchangeRate: {
            token: {
                /** Symbol of Token (info. decimals is 18) */
                symbol: string;
                /** Amount of Token (info. decimals is 18) */
                value: string;
            };
            currency: {
                /** Symbol of Basic Currency (info. decimals is 18) */
                symbol: string;
                /** Basic Currency Value for one token (info. decimals is 18) */
                value: string;
            };
        };
        provider: {
            /** If true, this account is a point provider. */
            enable: boolean;
            /** Technical representatives to provide points */
            assistant: string;
        };
        ledger: {
            point: {
                /** Balance of point in the Ledger (info. decimals is 18) */
                balance: string;
                /** Basic Currency Value of point in the Ledger (info. decimals is 18) */
                value: string;
            };
            token: {
                /** Balance of token in the Ledger (info. decimals is 18) */
                balance: string;
                /** Basic Currency Value of token in the Ledger (info. decimals is 18) */
                value: string;
            };
        };
        mainChain: {
            point: {
                /** Balance of point in the Main Chain (info. decimals is 18) */
                balance: string;
                /** Basic Currency Value of point in the Main Chain (info. decimals is 18) */
                value: string;
            };
            token: {
                /** Balance of token in the Main Chain (info. decimals is 18) */
                balance: string;
                /** Basic Currency Value of token in the Main Chain (info. decimals is 18) */
                value: string;
            };
        };
        sideChain: {
            point: {
                /** Balance of point in the Side Chain (info. decimals is 18) */
                balance: string;
                /** Basic Currency Value of point in the Side Chain (info. decimals is 18) */
                value: string;
            };
            token: {
                /** Balance of token in the Side Chain (info. decimals is 18) */
                balance: string;
                /** Basic Currency Value of token in the Side Chain (info. decimals is 18) */
                value: string;
            };
        };
        protocolFees: {
            /** Protocol fees required to use the transfer function (info. decimals is 18) */
            transfer: string;
            /** Protocol fees required to use the withdrawal function (info. decimals is 18) */
            withdraw: string;
            /** Protocol fees required to use the deposit function (info. decimals is 18) */
            deposit: string;
        };
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface ISummaryShopResponse {
    /** Result Code */
    code: number;
    data: {
        shopInfo: {
            /** ID of Shop */
            shopId: string;
            /** Name of Shop */
            name: string;
            /** Basic currency symbol of Shop */
            currency: string;
            /** Active status of Shop */
            status: number;
            /** Wallet address of the shop owner */
            account: string;
            /** Wallet address that authorizes cancellation on behalf of the shop owner */
            delegator: string;
            /** Amount of provided */
            providedAmount: string;
            /** Amount of used */
            usedAmount: string;
            /** Amount of refunded */
            refundedAmount: string;
            /** Basic currency amount of refundable */
            refundableAmount: string;
            /** Token amount of refundable */
            refundableToken: string;
        };
        tokenInfo: {
            /** Symbol of Token */
            symbol: string;
            /** Name of Token */
            name: string;
            /** Decimals of Token */
            decimals: number;
        };
        exchangeRate: {
            token: {
                /** Symbol of Token (info. decimals is 18) */
                symbol: string;
                /** Amount of Token (info. decimals is 18) */
                value: string;
            };
            currency: {
                /** Symbol of Basic Currency (info. decimals is 18) */
                symbol: string;
                /** Basic Currency Value for one token (info. decimals is 18) */
                value: string;
            };
        };
        ledger: {
            point: {
                /** Balance of point in the Ledger (info. decimals is 18) */
                balance: string;
                /** Basic Currency Value of point in the Ledger (info. decimals is 18) */
                value: string;
            };
            token: {
                /** Balance of token in the Ledger (info. decimals is 18) */
                balance: string;
                /** Basic Currency Value of token in the Ledger (info. decimals is 18) */
                value: string;
            };
        };
        mainChain: {
            point: {
                /** Balance of point in the Main Chain (info. decimals is 18) */
                balance: string;
                /** Basic Currency Value of point in the Main Chain (info. decimals is 18) */
                value: string;
            };
            token: {
                /** Balance of token in the Main Chain (info. decimals is 18) */
                balance: string;
                /** Basic Currency Value of token in the Main Chain (info. decimals is 18) */
                value: string;
            };
        };
        sideChain: {
            point: {
                /** Balance of point in the Side Chain (info. decimals is 18) */
                balance: string;
                /** Basic Currency Value of point in the Side Chain (info. decimals is 18) */
                value: string;
            };
            token: {
                /** Balance of token in the Side Chain (info. decimals is 18) */
                balance: string;
                /** Basic Currency Value of token in the Side Chain (info. decimals is 18) */
                value: string;
            };
        };
        protocolFees: {
            /** Protocol fees required to use the transfer function (info. decimals is 18) */
            transfer: string;
            /** Protocol fees required to use the withdrawal function (info. decimals is 18) */
            withdraw: string;
            /** Protocol fees required to use the deposit function (info. decimals is 18) */
            deposit: string;
        };
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

export type Summary1ApiSpec = Tspec.DefineApiSpec<{
    tags: ["Summary", "Ledger"];
    paths: {
        "/v1/summary/account/{account}": {
            get: {
                summary: "Provide general information corresponding to the user's wallet address";
                path: { account: string };
                responses: {
                    200: ISummaryAccountResponse;
                };
            };
        };
    };
}>;

export type Summary2ApiSpec = Tspec.DefineApiSpec<{
    tags: ["Summary", "Shop"];
    paths: {
        "/v1/summary/shop/{shopId}": {
            get: {
                summary: "Provide general information corresponding to the ID of shop";
                path: { shopId: string };
                responses: {
                    200: ISummaryShopResponse;
                };
            };
        };
    };
}>;
