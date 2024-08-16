import { Tspec } from "tspec";

interface IBridgeRequest {
    /** Wallet address of the user */
    account: string;
    /** Token amount to move */
    amount: string;
    /** Expiration time of signature */
    expiry: number;
    /** Signature of user wallet */
    signature: string;
}

interface IBridgeResponse {
    /** Result Code */
    code: number;
    data: {
        /** ID of token */
        tokenId: string;
        /** ID of deposit */
        depositId: string;
        /** Token amount to move */
        amount: string;
        /** Hash of transaction */
        txHash: string;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

export type ChainBridgeApiSpec = Tspec.DefineApiSpec<{
    tags: ["Bridge"];
    paths: {
        "/v1/bridge/deposit": {
            post: {
                summary: "Move token from Main Chain to Side Chain";
                body: IBridgeRequest;
                responses: {
                    200: IBridgeResponse;
                };
            };
        };
        "/v1/bridge/withdraw": {
            post: {
                summary: "Move token from Side Chain to Main Chain";
                body: IBridgeRequest;
                responses: {
                    200: IBridgeResponse;
                };
            };
        };
    };
}>;

export type LoyaltyBridgeApiSpec = Tspec.DefineApiSpec<{
    tags: ["Bridge", "Ledger"];
    paths: {
        "/v1/ledger/deposit_via_bridge": {
            post: {
                summary: "Move token from Main Chain to Ledger";
                body: IBridgeRequest;
                responses: {
                    200: IBridgeResponse;
                };
            };
        };
        "/v1/ledger/withdraw_via_bridge": {
            post: {
                summary: "Move token from Ledger to Main Chain";
                body: IBridgeRequest;
                responses: {
                    200: IBridgeResponse;
                };
            };
        };
    };
}>;
