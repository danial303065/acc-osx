import { Tspec } from "tspec";

interface ILedgerNonceResponse {
    /** Result Code */
    code: number;
    data: {
        /** Address of wallet */
        account: string;

        /** Nonce for address of wallet */
        nonce: string;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface ILedgerBalanceAccountResponse {
    /** Result Code */
    code: number;
    data: {
        /** Address of wallet */
        account: string;

        point: {
            /** Balance of Point (info. decimals are 18) */
            balance: string;
            /** Value of Point (info. decimals are 18) */
            value: string;
        };

        token: {
            /** Balance of Token (info. decimals are 18) */
            balance: string;
            /** Value of Token (info. decimals are 18) */
            value: string;
        };
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface ILedgerBalancePhoneResponse {
    /** Result Code */
    code: number;
    data: {
        /** Phone Number */
        phone: string;
        /** Phone Number Hash */
        phoneHash: string;
        /** Address of wallet */
        account: string;

        point: {
            /** Balance of Point (info. decimals are 18) */
            balance: string;
            /** Value of Point (info. decimals are 18) */
            value: string;
        };

        token: {
            /** Balance of Token (info. decimals are 18) */
            balance: string;
            /** Value of Token (info. decimals are 18) */
            value: string;
        };
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface ILedgerBalancePhoneHashResponse {
    /** Result Code */
    code: number;
    data: {
        /** Phone Number Hash */
        phoneHash: string;
        /** Address of wallet */
        account: string;

        point: {
            /** Balance of Point (info. decimals are 18) */
            balance: string;
            /** Value of Point (info. decimals are 18) */
            value: string;
        };

        token: {
            /** Balance of Token (info. decimals are 18) */
            balance: string;
            /** Value of Token (info. decimals are 18) */
            value: string;
        };
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface IPhoneHashResponse {
    /** Result Code */
    code: number;
    data: {
        /** Phone Number */
        phone: string;
        /** Phone Number Hash */
        phoneHash: string;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

export type LedgerApiSpec = Tspec.DefineApiSpec<{
    tags: ["Ledger"];
    paths: {
        "/v1/ledger/nonce/{account}": {
            get: {
                summary: "Provide the nonce corresponding to the user's wallet address";
                path: { account: string };
                responses: {
                    200: ILedgerNonceResponse;
                };
            };
        };
        "/v1/ledger/balance/account/{account}": {
            get: {
                summary: "Provide the balance corresponding to the user's wallet address";
                path: { account: string };
                responses: {
                    200: ILedgerBalanceAccountResponse;
                };
            };
        };
        "/v1/ledger/balance/phone/{phone}": {
            get: {
                summary: "Provide the balance corresponding to the user's phone number";
                path: { phone: string };
                responses: {
                    200: ILedgerBalancePhoneResponse;
                };
            };
        };
        "/v1/ledger/balance/phoneHash/{phoneHash}": {
            get: {
                summary: "Provide the balance corresponding to the user's phone number hash";
                path: { phoneHash: string };
                responses: {
                    200: ILedgerBalancePhoneHashResponse;
                };
            };
        };
        "/v1/phone/hash/{phone}": {
            get: {
                summary: "Provide the hash of phone number";
                path: { phone: string };
                responses: {
                    200: IPhoneHashResponse;
                };
            };
        };
    };
}>;
