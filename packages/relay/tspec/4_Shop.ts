import { Tspec } from "tspec";
import { ShopTaskStatus } from "./types";

interface IShopNonceResponse {
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

interface IShopInfoResponse {
    /** Result Code */
    code: number;
    data: {
        /** ID of Shop */
        shopId: string;
        /** Name of Shop */
        name: string;
        /** Basic currency symbol of Shop */
        currency: string;
        /** Active status of Shop ( 0: None, 1: ACTIVE, 2: INACTIVE ) */
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
    };
    error?: {
        /** Error Message */
        message: string;
    };
}
interface IShopListResponseItem {
    /** ID of Shop */
    shopId: string;
    /** Name of Shop */
    name: string;
    /** Basic currency symbol of Shop */
    currency: string;
    /** Active status of Shop ( 0: None, 1: ACTIVE, 2: INACTIVE ) */
    status: number;
    /** Wallet address of the shop owner */
    account: string;
    /** Amount of provided */
    providedAmount: string;
    /** Amount of used */
    usedAmount: string;
    /** Amount of refunded */
    refundedAmount: string;
}

interface IShopListRequest {
    /** Current Page Number */
    pageNumber: number;
    /** Number of items per page */
    pageSize: number;
}

interface IShopListResponse {
    /** Result Code */
    code: number;
    data: IShopListResponseItem[];
    error?: {
        /** Error Message */
        message: string;
    };
}
interface IShopUpdateCreateRequest {
    /** ID of Shop */
    shopId: string;
    /** New name to be changed of Shop */
    name: string;
    /** New currency symbol to be changed of Shop */
    currency: string;
}

interface IShopUpdateCreateResponse {
    /** Result Code */
    code: number;
    data: {
        /** ID of Task */
        taskId: string;
        /** ID of Shop */
        shopId: string;
        /** New name to be changed of Shop */
        name: string;
        /** New currency symbol to be changed of Shop */
        currency: string;
        /** Task progress status ( 11: OPENED, 12: FAILED_TX, 13: REVERTED_TX, 14: SENT_TX, 15: DENIED, 16: COMPLETED ) */
        taskStatus: ShopTaskStatus;
        /** Task start time */
        timestamp: number;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface IShopUpdateApprovalRequest {
    /** ID of Task */
    taskId: string;
    /** If this value is true, the change is accepted; if false, the change is rejected. */
    approval: boolean;
    /** Signature of shop owner */
    signature: string;
}

interface IShopUpdateApprovalResponse {
    /** Result Code */
    code: number;
    data: {
        /** ID of Task */
        taskId: string;
        /** ID of Shop */
        shopId: string;
        /** New name to be changed of Shop */
        name: string;
        /** New currency symbol to be changed of Shop */
        currency: string;
        /** Task progress status ( 11: OPENED, 12: FAILED_TX, 13: REVERTED_TX, 14: SENT_TX, 15: DENIED, 16: COMPLETED ) */
        taskStatus: ShopTaskStatus;
        /** Task start time */
        timestamp: number;
        /** Hash of transaction */
        txHash?: string;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface IShopStatusCreateRequest {
    /** ID of Shop */
    shopId: string;
    /** Active status of Shop ( 1: ACTIVE, 2: INACTIVE ) */
    status: string;
}

interface IShopStatusCreateResponse {
    /** Result Code */
    code: number;
    data: {
        /** ID of Task */
        taskId: string;
        /** ID of Shop */
        shopId: string;
        /** Active status of Shop ( 1: ACTIVE, 2: INACTIVE ) */
        status: number;
        /** Task progress status ( 11: OPENED, 12: FAILED_TX, 13: REVERTED_TX, 14: SENT_TX, 15: DENIED, 16: COMPLETED ) */
        taskStatus: ShopTaskStatus;
        /** Task start time */
        timestamp: number;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface IShopStatusApprovalRequest {
    /** ID of Task */
    taskId: string;
    /** If this value is true, the change is accepted; if false, the change is rejected. */
    approval: boolean;
    /** Signature of shop owner */
    signature: string;
}

interface IShopStatusApprovalResponse {
    /** Result Code */
    code: number;
    data: {
        /** ID of Task */
        taskId: string;
        /** ID of Shop */
        shopId: string;
        /** Active status of Shop ( 1: ACTIVE, 2: INACTIVE ) */
        status: number;
        /** Task progress status ( 11: OPENED, 12: FAILED_TX, 13: REVERTED_TX, 14: SENT_TX, 15: DENIED, 16: COMPLETED ) */
        taskStatus: ShopTaskStatus;
        /** Task start time */
        timestamp: number;
        /** Hash of transaction */
        txHash?: string;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface IShopTaskRequest {
    /** ID of Task */
    taskId: string;
}

interface IShopTaskResponse {
    /** Result Code */
    code: number;
    data: {
        /** ID of Task */
        taskId: string;
        /** Type of Task ("pay_new", "pay_cancel", "shop_add", "shop_update", "shop_status" ) */
        type: string;
        /** ID of Shop */
        shopId: string;
        /** New name to be changed of Shop */
        name: string;
        /** New currency symbol to be changed of Shop */
        currency: string;
        /** Active status of Shop ( 0: None, 1: ACTIVE, 2: INACTIVE ) */
        status: number;
        /** Task progress status ( 11: OPENED, 12: FAILED_TX, 13: REVERTED_TX, 14: SENT_TX, 15: DENIED, 16: COMPLETED ) */
        taskStatus: ShopTaskStatus;
        /** Wallet address of shop owner */
        account: string;
        /** Task start time */
        timestamp: number;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface IShopRefundableResponse {
    /** Result Code */
    code: number;
    data: {
        /** Basic currency amount equivalent to refundable amount */
        refundableAmount: string;
        /** Token amount equivalent to refundable amount */
        refundableToken: string;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}
export type ShopApiSpec = Tspec.DefineApiSpec<{
    tags: ["Shop"];
    paths: {
        "/v1/shop/info/{shopId}": {
            get: {
                summary: "Provide shop information";
                path: { shopId: string };
                responses: {
                    200: IShopInfoResponse;
                };
            };
        };
        "/v1/shop/list": {
            get: {
                summary: "Provide all shop information";
                parameters: IShopListRequest;
                responses: {
                    200: IShopListResponse;
                };
            };
        };
        "/v1/shop/nonce/{account}": {
            get: {
                summary: "Provide the nonce corresponding to the wallet address of the shop owner";
                path: { account: string };
                responses: {
                    200: IShopNonceResponse;
                };
            };
        };
        "/v1/shop/refundable/{shopId}": {
            get: {
                summary: "Provide shop information";
                path: { shopId: string };
                responses: {
                    200: IShopRefundableResponse;
                };
            };
        };
        "/v1/shop/update/create": {
            post: {
                summary: "Start changing the name and rate symbol of the store. Completed after successful approval of the shop owner";
                body: IShopUpdateCreateRequest;
                responses: {
                    200: IShopUpdateCreateResponse;
                };
            };
        };
        "/v1/shop/update/approval": {
            post: {
                summary: "Approve changing the name and rate symbol of the store.";
                body: IShopUpdateApprovalRequest;
                responses: {
                    200: IShopUpdateApprovalResponse;
                };
            };
        };
        "/v1/shop/status/create": {
            post: {
                summary: "Start changing the name and rate symbol of the store. Completed after successful approval of the shop owner";
                body: IShopStatusCreateRequest;
                responses: {
                    200: IShopStatusCreateResponse;
                };
            };
        };
        "/v1/shop/status/approval": {
            post: {
                summary: "Approve changing the name and rate symbol of the store.";
                body: IShopStatusApprovalRequest;
                responses: {
                    200: IShopStatusApprovalResponse;
                };
            };
        };
        "/v1/shop/task": {
            get: {
                summary: "Approve changing the name and rate symbol of the store.";
                body: IShopTaskRequest;
                responses: {
                    200: IShopTaskResponse;
                };
            };
        };
    };
}>;
