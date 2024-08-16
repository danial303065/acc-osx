import { Tspec } from "tspec";
import { LoyaltyPaymentTaskStatus } from "./types";

interface PaymentCallBackData {
    /** ID of Payment */
    paymentId: string;
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
}

interface ShopCallBackData {
    /** ID of Task */
    taskId: string;
    /** ID of Shop */
    shopId: string;
    /** New name to be changed of Shop */
    name: string;
    /** New currency symbol to be changed of Shop */
    currency: string;
    /** Active status of Shop ( 0: None, 1: ACTIVE, 2: INACTIVE ) */
    status: number;
    /** Wallet address of shop owner */
    account: string;
}

interface TaskCallBackRequest {
    /** Type of Task ( "pay_new", "pay_cancel", "shop_add", "shop_update", "shop_status" ) */
    type: string;
    /** Result Code */
    code: number;
    /** Result Message */
    message: string;
    /** Result Data */
    data: PaymentCallBackData | ShopCallBackData;
}

interface TaskCallBackResponse {
    /** Result Code */
    code: number;
    data?: {};
    error?: {
        /** Error Message */
        message: string;
    };
}

export type CallbackApiSpec = Tspec.DefineApiSpec<{
    tags: ["Payment", "Shop"];
    paths: {
        "/external/callback": {
            post: {
                summary: "Send payment and store tak processing status to the external domain";
                body: TaskCallBackRequest;
                responses: {
                    200: TaskCallBackResponse;
                };
            };
        };
    };
}>;
