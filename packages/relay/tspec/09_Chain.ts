import { Tspec } from "tspec";

interface IChainInfoResponse {
    /** Result Code */
    code: number;
    data: {
        /** Endpoint of RPC */
        url: string;
        network: {
            /** Name of Network */
            name: string;
            /** Chain ID of Network */
            chainId: number;
            /** ENS Address */
            ensAddress: string;
            /** Fee of Transfer */
            chainTransferFee: string;
            /** Fee of Bridge */
            chainBridgeFee: string;
            /** Fee of Loyalty Transfer */
            loyaltyTransferFee: string;
            /** Fee of Loyalty Bridge */
            loyaltyBridgeFee: string;
        };
        contract: {
            token: string;
            chainBridge: string;
            loyaltyBridge: string;
        };
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface ITokenChainBalanceResponse {
    /** Result Code */
    code: number;
    data: {
        /** Address of user wallet */
        account: string;
        /** Balance of Token (info. decimals are 18) */
        balance: string;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface ITokenChainNonceResponse {
    /** Result Code */
    code: number;
    data: {
        /** Address of user wallet */
        account: string;
        /** Nonce */
        nonce: string;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface ITokenChainTransferRequest {
    /** Token amount to be transfer */
    amount: string;
    /** Wallet address of sender */
    from: string;
    /** Wallet address of receiver */
    to: string;
    /** Expiration time of signature */
    expiry: string;
    /** Signature of sender wallet */
    signature: string;
}

interface ITokenChainTransferResponse {
    /** Result Code */
    code: number;
    data: {
        /** Wallet address of sender */
        from: string;
        /** Wallet address of receiver */
        to: string;
        /** Token amount to be transfer */
        amount: string;
        /** Hash of transaction */
        txHash: string;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

export type MainChainApiSpec = Tspec.DefineApiSpec<{
    tags: ["Chain Info", "Main Chain"];
    paths: {
        "/v1/chain/main/info": {
            get: {
                summary: "Provide information of main chain";
                responses: {
                    200: IChainInfoResponse;
                };
            };
        };
    };
}>;

export type SideChainApiSpec = Tspec.DefineApiSpec<{
    tags: ["Chain Info", "Side Chain"];
    paths: {
        "/v1/chain/side/info": {
            get: {
                summary: "Provide information of side chain";
                responses: {
                    200: IChainInfoResponse;
                };
            };
        };
    };
}>;

export type MainChainTokenApiSpec = Tspec.DefineApiSpec<{
    tags: ["Main Chain", "Loyalty Token"];
    paths: {
        "/v1/token/main/balance/{account}": {
            get: {
                summary: "Provide token balance in the main chain";
                path: { account: string };
                responses: {
                    200: ITokenChainBalanceResponse;
                };
            };
        };
        "/v1/token/main/nonce/{account}": {
            get: {
                summary: "Provide nonce in the main chain";
                path: { account: string };
                responses: {
                    200: ITokenChainNonceResponse;
                };
            };
        };
        "/v1/token/main/transfer": {
            post: {
                summary: "Transfer token in the main chain";
                body: ITokenChainTransferRequest;
                responses: {
                    200: ITokenChainTransferResponse;
                };
            };
        };
    };
}>;

export type SideChainTokenApiSpec = Tspec.DefineApiSpec<{
    tags: ["Side Chain", "Loyalty Token"];
    paths: {
        "/v1/token/side/balance/{account}": {
            get: {
                summary: "Provide token balance in the side chain";
                path: { account: string };
                responses: {
                    200: ITokenChainBalanceResponse;
                };
            };
        };
        "/v1/token/side/nonce/{account}": {
            get: {
                summary: "Provide nonce in the side chain";
                path: { account: string };
                responses: {
                    200: ITokenChainNonceResponse;
                };
            };
        };
        "/v1/token/side/transfer": {
            post: {
                summary: "Transfer token in the side chain";
                body: ITokenChainTransferRequest;
                responses: {
                    200: ITokenChainTransferResponse;
                };
            };
        };
    };
}>;
