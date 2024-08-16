import { Tspec } from "tspec";

interface IProviderRegisterRequest {
    /** Wallet address of the provider */
    provider: string;
}

interface IProviderRegisterResponse {
    /** Result Code */
    code: number;
    data: {
        /** Wallet address of the provider */
        provider: string;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface IProviderBalanceResponse {
    /** Result Code */
    code: number;
    data: {
        /** Wallet address of the provider */
        provider: string;
        providable: {
            /** Amount of tokens that can be provided (info. decimals are 18) */
            token: string;
            /** Amount of points corresponding to tokens that can be provided (info. decimals are 18) */
            point: string;
        };
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface IProviderStatusResponse {
    /** Result Code */
    code: number;
    data: {
        /** Wallet address of the provider */
        provider: string;
        /** If this value is true, it is an approved point provider, otherwise it is not a point provider. */
        enable: boolean;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface IProviderSendAccountRequest {
    /** Wallet address of the provider */
    provider: string;
    /** Wallet address of the receiver */
    receiver: string;
    /** Point amount to be provided  */
    amount: string;
    /** Signature of provider or assistant */
    signature: string;
}

interface IProviderSendAccountResponse {
    /** Result Code */
    code: number;
    data: {
        /** Wallet address of the provider */
        provider: string;
        /** Wallet address of the receiver */
        receiver: string;
        /** Point amount to be provided  */
        amount: string;
        /** Hash of transaction */
        txHash: string;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface IProviderSendPhoneHashRequest {
    /** Wallet address of the provider */
    provider: string;
    /** Phone number hash of the receiver */
    receiver: string;
    /** Point amount to be provided  */
    amount: string;
    /** Signature of provider or assistant */
    signature: string;
}

interface IProviderSendPhoneHashResponse {
    /** Result Code */
    code: number;
    data: {
        /** Wallet address of the provider */
        provider: string;
        /** Phone number hash of the receiver */
        receiver: string;
        /** Point amount to be provided  */
        amount: string;
        /** Hash of transaction */
        txHash: string;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface IProviderAssistantRegisterRequest {
    /** Wallet address of the provider */
    provider: string;
    /** Wallet address of the assistant */
    assistant: string;
    /** Signature of provider or assistant */
    signature: string;
}

interface IProviderAssistantRegisterResponse {
    /** Result Code */
    code: number;
    data: {
        /** Wallet address of the provider */
        provider: string;
        /** Wallet address of the assistant */
        assistant: string;
        /** Hash of transaction */
        txHash: string;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface IProviderAssistantResponse {
    /** Result Code */
    code: number;
    data: {
        /** Wallet address of the provider */
        provider: string;
        /** Wallet address of the assistant */
        assistant: string;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

export type ProviderApiSpec = Tspec.DefineApiSpec<{
    tags: ["Loyalty Point Provider"];
    paths: {
        "/v1/provider/assistant/{provider}": {
            get: {
                summary: "Provides the assistant's information";
                path: { provider: string };
                responses: {
                    200: IProviderAssistantResponse;
                };
            };
        };
        "/v1/provider/assistant/register": {
            post: {
                summary: "Register the provider's assistant. The assistant can only process the instructions of the point transfer";
                body: IProviderAssistantRegisterRequest;
                responses: {
                    200: IProviderAssistantRegisterResponse;
                };
            };
        };
        "/v1/provider/balance/{provider}": {
            get: {
                summary: "Provide a point provider's assets";
                path: { provider: string };
                responses: {
                    200: IProviderBalanceResponse;
                };
            };
        };
        "/v1/provider/register": {
            post: {
                summary: "Register the provider. To become a point provider, you must first deposit 50,000 tokens";
                body: IProviderRegisterRequest;
                responses: {
                    200: IProviderRegisterResponse;
                };
            };
        };
        "/v1/provider/send/account": {
            post: {
                summary: "Request the ability to provide points to the recipient's wallet address";
                body: IProviderSendAccountRequest;
                responses: {
                    200: IProviderSendAccountResponse;
                };
            };
        };
        "/v1/provider/send/phoneHash": {
            post: {
                summary: "Request the ability to provide points to the recipient's phone number hash";
                body: IProviderSendPhoneHashRequest;
                responses: {
                    200: IProviderSendPhoneHashResponse;
                };
            };
        };
        "/v1/provider/status/{provider}": {
            get: {
                summary: "Provides the status value of the point provider";
                path: { provider: string };
                responses: {
                    200: IProviderStatusResponse;
                };
            };
        };
    };
}>;
