/**
 * Progress status of payment task
 * 11:Opened for New Payment
 * 12:Failed Approve for New Payment
 * 13:Reverted Approve for New Payment
 * 14:Sent Tx for New Payment
 * 15:Confirm Tx for New Payment
 * 16:Denied New Payment
 * 17:Complete New Payment
 * 18:Close New Payment
 * 19:Failed New Payment
 * 51:Opened for Cancel Payment
 * 52:Failed Approve for Cancel Payment
 * 53:Failed Approve for Cancel Payment
 * 54:Sent Tx for Cancel Payment
 * 55:Confirm Tx for Cancel Payment
 * 56:Denied Cancel Payment
 * 57:Complete Cancel Payment
 * 58:Close Cancel Payment
 * 59:Failed Cancel Payment
 */
export enum LoyaltyPaymentTaskStatus {
    NULL = 0,
    OPENED_NEW = 11,
    APPROVED_NEW_FAILED_TX = 12,
    APPROVED_NEW_REVERTED_TX = 13,
    APPROVED_NEW_SENT_TX = 14,
    APPROVED_NEW_CONFIRMED_TX = 15,
    DENIED_NEW = 16,
    REPLY_COMPLETED_NEW = 17,
    CLOSED_NEW = 18,
    FAILED_NEW = 19,
    OPENED_CANCEL = 51,
    APPROVED_CANCEL_FAILED_TX = 52,
    APPROVED_CANCEL_REVERTED_TX = 53,
    APPROVED_CANCEL_SENT_TX = 54,
    APPROVED_CANCEL_CONFIRMED_TX = 55,
    DENIED_CANCEL = 56,
    REPLY_COMPLETED_CANCEL = 57,
    CLOSED_CANCEL = 58,
    FAILED_CANCEL = 59,
}

/**
 * Task progress status
 * 11:Opened Task
 * 12:Failed Tx
 * 13:Reverted Tx
 * 14:Sent Tx
 * 15:Denied
 * 16:Completed
 * 70:Timeout
 */
export enum ShopTaskStatus {
    NULL = 0,
    OPENED = 11,
    FAILED_TX = 12,
    REVERTED_TX = 13,
    SENT_TX = 14,
    DENIED = 15,
    COMPLETED = 16,
    TIMEOUT = 70,
}
