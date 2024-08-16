import { Tspec } from "tspec";

interface ILinkNonceResponse {
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

interface ILinkToAccountResponse {
    /** Result Code */
    code: number;
    data: {
        /** Hash of user phone number */
        phone: string;
        /** Wallet address of user */
        account: string;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface ILinkToPhoneResponse {
    /** Result Code */
    code: number;
    data: {
        /** Hash of user phone number */
        phone: string;
        /** Wallet address of user */
        account: string;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

export type PhoneLinkApiSpec = Tspec.DefineApiSpec<{
    tags: ["Phone"];
    paths: {
        "/v1/link/nonce/{account}": {
            get: {
                summary: "Provides nonce for account on PhoneLink";
                path: { account: string };
                responses: {
                    200: ILinkNonceResponse;
                };
            };
        };
        "/v1/link/to_account/{phone}": {
            get: {
                summary: "Provide a wallet address corresponding to the user's phone number hash";
                path: { phone: string };
                responses: {
                    200: ILinkToAccountResponse;
                };
            };
        };
        "/v1/link/to_phone/{account}": {
            get: {
                summary: "Provide a phone number hash corresponding to the user's wallet address";
                path: { account: string };
                responses: {
                    200: ILinkToPhoneResponse;
                };
            };
        };
    };
}>;
