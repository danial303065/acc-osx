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
export type MainChainApiSpec = Tspec.DefineApiSpec<{
    tags: ["MainChain"];
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

export type MainChainTokenApiSpec = Tspec.DefineApiSpec<{
    tags: ["MainChain", "Token"];
    paths: {
        "/v1/token/main/balance/{account}": {
            get: {
                summary: "Provide token balance in the main chain";
                path: { account: string };
                responses: {
                    200: IChainInfoResponse;
                };
            };
        };
        "/v1/token/main/nonce/{account}": {
            get: {
                summary: "Provide nonce in the main chain";
                path: { account: string };
                responses: {
                    200: IChainInfoResponse;
                };
            };
        };
        "/v1/token/main/transfer": {
            post: {
                summary: "Transfer token in the main chain";
                body: IBridgeRequest;
                responses: {
                    200: IChainInfoResponse;
                };
            };
        };
    };
}>;
