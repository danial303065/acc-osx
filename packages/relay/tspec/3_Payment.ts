import { Tspec } from "tspec";
import { LoyaltyPaymentTaskStatus } from "./types";

interface PaymentAccountTemporaryRequest {
    /** Wallet address of user */
    account: string;
    /** Signature of user wallet */
    signature: string;
}

interface PaymentAccountTemporaryResponse {
    /** Result Code */
    code: number;
    data: {
        /** Temporary wallet address for payment */
        temporaryAccount: string;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface PaymentInfoRequest {
    /** Wallet address of user or temporary wallet address of user */
    account: string;
    /** Amount to be used for payment (info. decimals are 18) */
    amount: string;
    /** Currency symbol for amount to be used for payment */
    currency: string;
}

interface PaymentInfoResponse {
    /** Result Code */
    code: number;
    data: {
        /** Wallet address for payment */
        account: string;
        /** Amount to be used for payment (info. decimals are 18) */
        amount: string;
        /** Currency symbol for amount to be used for payment */
        currency: string;
        /** User's point balance (info. decimals are 18) */
        balance: string;
        /** User's point balance converted to payment currency (info. decimals are 18) */
        balanceValue: string;
        /** Amount of points to be paid (info. decimals are 18) */
        paidPoint: string;
        /** Amount of points to be paid converted to payment currency (info. decimals are 18) */
        paidValue: string;
        /** Fee (info. decimals are 18) */
        feePoint: string;
        /** Fee converted to payment currency (info. decimals are 18) */
        feeValue: string;
        /** Amount of points to be paid including fees (info. decimals are 18) */
        totalPoint: string;
        /** Amount of points to be paid including fees converted to payment currency (info. decimals are 18) */
        totalValue: string;
        /** Fee Rate */
        feeRate: number;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface PaymentNewOpenRequest {
    /** ID of Purchase */
    purchaseId: string;
    /** Amount to be used for payment (info. decimals are 18) */
    amount: string;
    /** Currency symbol for amount to be used for payment */
    currency: string;
    /** ID of shop */
    shopId: string;
    /** Wallet address of user */
    account: string;
}

interface PaymentNewOpenResponse {
    /** Result Code */
    code: number;
    data: {
        /** ID of Payment */
        paymentId: string;
        /** ID of Purchase */
        purchaseId: string;
        /** Amount to be used for payment (info. decimals are 18) */
        amount: string;
        /** Currency symbol for amount to be used for payment */
        currency: string;
        /** ID of Shop */
        shopId: string;
        /** Wallet address for payment */
        account: string;
        /** Amount of points to be paid (info. decimals are 18) */
        paidPoint: string;
        /** Amount of points to be paid converted to payment currency (info. decimals are 18) */
        paidValue: string;
        /** Fee (info. decimals are 18) */
        feePoint: string;
        /** Fee converted to payment currency (info. decimals are 18) */
        feeValue: string;
        /** Amount of points to be paid including fees (info. decimals are 18) */
        totalPoint: string;
        /** Amount of points to be paid including fees converted to payment currency (info. decimals are 18) */
        totalValue: string;
        /** Progress status of payment task */
        paymentStatus: LoyaltyPaymentTaskStatus;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}
interface PaymentNewCloseRequest {
    /** ID of Payment */
    paymentId: string;
    /** If this value is true, the payment will be processed normally, and if this value is false, all processes that have been processed so far will be canceled. */
    confirm: boolean;
}

interface PaymentNewCloseResponse {
    /** Result Code */
    code: number;
    data: {
        /** ID of Payment */
        paymentId: string;
        /** ID of Purchase */
        purchaseId: string;
        /** Amount to be used for payment (info. decimals are 18) */
        amount: string;
        /** Currency symbol for amount to be used for payment */
        currency: string;
        /** ID of Shop */
        shopId: string;
        /** Wallet address for payment */
        account: string;
        /** Amount of points to be paid (info. decimals are 18) */
        paidPoint: string;
        /** Amount of points to be paid converted to payment currency (info. decimals are 18) */
        paidValue: string;
        /** Fee (info. decimals are 18) */
        feePoint: string;
        /** Fee converted to payment currency (info. decimals are 18) */
        feeValue: string;
        /** Amount of points to be paid including fees (info. decimals are 18) */
        totalPoint: string;
        /** Amount of points to be paid including fees converted to payment currency (info. decimals are 18) */
        totalValue: string;
        /** Progress status of payment task */
        paymentStatus: LoyaltyPaymentTaskStatus;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface PaymentNewApprovalRequest {
    /** ID of Payment */
    paymentId: string;
    /** If this value is true, the payment is accepted; if false, the payment is rejected. */
    approval: boolean;
    /** Signature of user wallet */
    signature: string;
}

interface PaymentNewApprovalResponse {
    /** Result Code */
    code: number;
    data: {
        /** ID of Payment */
        paymentId: string;
        /** ID of Purchase */
        purchaseId: string;
        /** Amount to be used for payment (info. decimals are 18) */
        amount: string;
        /** Currency symbol for amount to be used for payment */
        currency: string;
        shopId: string;
        /** Wallet address for payment */
        account: string;
        /** Progress status of payment task */
        paymentStatus: LoyaltyPaymentTaskStatus;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface PaymentItemRequest {
    /** ID of Payment */
    paymentId: string;
}

interface PaymentItemResponse {
    /** Result Code */
    code: number;
    data: {
        /** ID of Payment */
        paymentId: string;
        /** ID of Purchase */
        purchaseId: string;
        /** Amount to be used for payment (info. decimals are 18) */
        amount: string;
        /** Currency symbol for amount to be used for payment */
        currency: string;
        /** ID of Shop */
        shopId: string;
        /** Wallet address for payment */
        account: string;
        /** Amount of points to be paid (info. decimals are 18) */
        paidPoint: string;
        /** Amount of points to be paid converted to payment currency (info. decimals are 18) */
        paidValue: string;
        /** Fee (info. decimals are 18) */
        feePoint: string;
        /** Fee converted to payment currency (info. decimals are 18) */
        feeValue: string;
        /** Amount of points to be paid including fees (info. decimals are 18) */
        totalPoint: string;
        /** Amount of points to be paid including fees converted to payment currency (info. decimals are 18) */
        totalValue: string;
        /** Progress status of payment task */
        paymentStatus: LoyaltyPaymentTaskStatus;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface PaymentCancelOpenRequest {
    /** ID of Payment */
    paymentId: string;
}

interface PaymentCancelOpenResponse {
    /** Result Code */
    code: number;
    data: {
        /** ID of Payment */
        paymentId: string;
        /** ID of Purchase */
        purchaseId: string;
        /** Amount to be used for payment (info. decimals are 18) */
        amount: string;
        /** Currency symbol for amount to be used for payment */
        currency: string;
        /** ID of Shop */
        shopId: string;
        /** Wallet address for payment */
        account: string;
        /** Amount of points to be paid (info. decimals are 18) */
        paidPoint: string;
        /** Amount of points to be paid converted to payment currency (info. decimals are 18) */
        paidValue: string;
        /** Fee (info. decimals are 18) */
        feePoint: string;
        /** Fee converted to payment currency (info. decimals are 18) */
        feeValue: string;
        /** Amount of points to be paid including fees (info. decimals are 18) */
        totalPoint: string;
        /** Amount of points to be paid including fees converted to payment currency (info. decimals are 18) */
        totalValue: string;
        /** Progress status of payment task */
        paymentStatus: LoyaltyPaymentTaskStatus;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}
interface PaymentCancelCloseRequest {
    /** ID of Payment */
    paymentId: string;
    /** If this value is true, the cancel payment will be processed normally, and if this value is false, all processes that have been processed so far will be canceled. */
    confirm: boolean;
}

interface PaymentCancelCloseResponse {
    /** Result Code */
    code: number;
    data: {
        /** ID of Payment */
        paymentId: string;
        /** ID of Purchase */
        purchaseId: string;
        /** Amount to be used for payment (info. decimals are 18) */
        amount: string;
        /** Currency symbol for amount to be used for payment */
        currency: string;
        /** ID of Shop */
        shopId: string;
        /** Wallet address for payment */
        account: string;
        /** Amount of points to be paid (info. decimals are 18) */
        paidPoint: string;
        /** Amount of points to be paid converted to payment currency (info. decimals are 18) */
        paidValue: string;
        /** Fee (info. decimals are 18) */
        feePoint: string;
        /** Fee converted to payment currency (info. decimals are 18) */
        feeValue: string;
        /** Amount of points to be paid including fees (info. decimals are 18) */
        totalPoint: string;
        /** Amount of points to be paid including fees converted to payment currency (info. decimals are 18) */
        totalValue: string;
        /** Progress status of payment task */
        paymentStatus: LoyaltyPaymentTaskStatus;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

interface PaymentCancelApprovalRequest {
    /** ID of Payment */
    paymentId: string;
    /** If this value is true, the payment is accepted; if false, the payment is rejected. */
    approval: boolean;
    /** Signature of user wallet */
    signature: string;
}

interface PaymentCancelApprovalResponse {
    /** Result Code */
    code: number;
    data: {
        /** ID of Payment */
        paymentId: string;
        /** ID of Purchase */
        purchaseId: string;
        /** Amount to be used for payment (info. decimals are 18) */
        amount: string;
        /** Currency symbol for amount to be used for payment */
        currency: string;
        shopId: string;
        /** Wallet address for payment */
        account: string;
        /** Progress status of payment task */
        paymentStatus: LoyaltyPaymentTaskStatus;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

export type PaymentApiSpec = Tspec.DefineApiSpec<{
    tags: ["Payment"];
    paths: {
        "/v1/payment/account/temporary": {
            post: {
                summary: "Provide a temporary address for payment";
                body: PaymentAccountTemporaryRequest;
                responses: {
                    200: PaymentAccountTemporaryResponse;
                };
            };
        };
        "/v1/payment/info": {
            get: {
                summary: "Check the user's balance for the amount required to start the payment";
                parameter: PaymentInfoRequest;
                responses: {
                    200: PaymentInfoResponse;
                };
            };
        };
        "/v1/payment/new/open": {
            post: {
                summary: "Open a new payment";
                body: PaymentNewOpenRequest;
                responses: {
                    200: PaymentNewOpenResponse;
                };
            };
        };
        "/v1/payment/new/close": {
            post: {
                summary: "Close a new payment";
                body: PaymentNewCloseRequest;
                responses: {
                    200: PaymentNewCloseResponse;
                };
            };
        };
        "/v1/payment/new/approval": {
            post: {
                summary: "Approve a new payment";
                body: PaymentNewApprovalRequest;
                responses: {
                    200: PaymentNewApprovalResponse;
                };
            };
        };
        "/v1/payment/item": {
            get: {
                summary: "Provider a payment information";
                body: PaymentItemRequest;
                responses: {
                    200: PaymentItemResponse;
                };
            };
        };
        "/v1/payment/cancel/open": {
            post: {
                summary: "Open a cancel payment";
                body: PaymentCancelOpenRequest;
                responses: {
                    200: PaymentCancelOpenResponse;
                };
            };
        };
        "/v1/payment/cancel/close": {
            post: {
                summary: "Close a cancel payment";
                body: PaymentCancelCloseRequest;
                responses: {
                    200: PaymentCancelCloseResponse;
                };
            };
        };
        "/v1/payment/cancel/approval": {
            post: {
                summary: "Approve a cancel payment";
                body: PaymentCancelApprovalRequest;
                responses: {
                    200: PaymentCancelApprovalResponse;
                };
            };
        };
    };
}>;
