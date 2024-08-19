/**
 * Progress status of payment task </br>
 * 11:Opened for New Payment </br>
 * 12:Failed Approve for New Payment </br>
 * 13:Reverted Approve for New Payment </br>
 * 14:Sent Tx for New Payment </br>
 * 15:Confirm Tx for New Payment </br>
 * 16:Denied New Payment </br>
 * 17:Complete New Payment </br>
 * 18:Close New Payment </br>
 * 19:Failed New Payment </br>
 * 51:Opened for Cancel Payment </br>
 * 52:Failed Approve for Cancel Payment </br>
 * 53:Failed Approve for Cancel Payment </br>
 * 54:Sent Tx for Cancel Payment </br>
 * 55:Confirm Tx for Cancel Payment </br>
 * 56:Denied Cancel Payment </br>
 * 57:Complete Cancel Payment </br>
 * 58:Close Cancel Payment </br>
 * 59:Failed Cancel Payment </br>
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
 * Task progress status </br>
 * 11:Opened Task </br>
 * 12:Failed Tx </br>
 * 13:Reverted Tx </br>
 * 14:Sent Tx </br>
 * 15:Denied </br>
 * 16:Completed </br>
 * 70:Timeout </br>
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

/**
 * ResultCode</br>
 * 0: Success</br>
 * 1000: Sender is not validator</br>
 * 1001: Validator is not active</br>
 * 1002: Validator is already active</br>
 * 1003: Validator is already exist</br>
 * 1010: The last validator cannot be removed</br>
 * 1020: Not allowed deposit</br>
 * 1030: Amount not multiple of gwei</br>
 * 1031: The amount entered is less than the minimum amount</br>
 * 1050: Sender is not authorized to execute</br>
 * 1051: Unable to transfer from system account</br>
 * 1052: Unable to transfer to system account</br>
 * 1053: Unable to withdraw from the system account</br>
 * 1054: Sender is not authorized to provide points</br>
 * 1160: ProvideLoyalty-This is a purchase data that has already been processed</br>
 * 1161: ProvideLoyalty-Too much royalty paid</br>
 * 1162: ProvideLoyalty-Registered validator does not exist</br>
 * 1163: ProvideLoyalty-Too many validators have participated</br>
 * 1164: ProvideLoyalty-Number of validators who participated did not satisfy the quorum</br>
 * 1170: Currency-The arrangement is not equal in size</br>
 * 1171: Currency-The validity of the data has expired.</br>
 * 1172: Currency-Registered validator does not exist</br>
 * 1173: Currency-Too many validators have participated</br>
 * 1174: Currency-Number of validators who participated did not satisfy the quorum</br>
 * 1200: The shop ID already exists</br>
 * 1201: The shop ID is not exists</br>
 * 1202: The shop is not activated</br>
 * 1211: This exchange rate is not supported</br>
 * 1220: Insufficient withdrawal amount</br>
 * 1221: Withdrawal is already opened</br>
 * 1222: Withdrawal is not opened</br>
 * 1501: Invalid signature</br>
 * 1502: Unregistered phone number</br>
 * 1503: Does not match registered wallet address</br>
 * 1505: Invalid secret key</br>
 * 1506: Expired signature</br>
 * 1510: Insufficient system balance</br>
 * 1511: Insufficient balance</br>
 * 1512: Not allowed deposit</br>
 * 1513: Insufficient fee or system balance</br>
 * 1514: Insufficient liquidity balance</br>
 * 1520: Loyalty type is not TOKEN</br>
 * 1521: Invalid value entered</br>
 * 1530: The payment ID already exists</br>
 * 1531: The status of the payment corresponding to the payment ID is not in progress</br>
 * 1532: The status of the payment corresponding to the payment ID is not a cancellable condition</br>
 * 1533: The status of the payment corresponding to the payment ID is not being cancelled</br>
 * 1534: The period for cancellation of payment has expired</br>
 * 1711: Already Exist Deposit</br>
 * 1712: No Exist Withdraw</br>
 * 1714: The value entered is not an appropriate value</br>
 * 1715: Already Confirm Withdraw</br>
 * 1716: The amount should be greater than the fee</br>
 * 1717: Does not match the address registered on the bridge</br>
 * 1718: Does not match the amount registered on the bridge</br>
 * 2001: Failed to check the validity of parameters</br>
 * 2002: The access key entered is not valid</br>
 * 2003: The payment ID is not exist</br>
 * 2004: Temporary address that does not exist</br>
 * 2005: Mobile notification not allowed</br>
 * 2006: Can not find delegator</br>
 * 2007: The phone number format is invalid.</br>
 * 2008: Mobile information not found.</br>
 * 2020: The status code for this payment cannot be approved</br>
 * 2022: The status code for this payment cannot be cancelled</br>
 * 2024: The status code for this payment cannot process closing</br>
 * 2025: This payment has already been approved</br>
 * 2026: This payment has already been closed</br>
 * 2027: This payment has already been approved and failed</br>
 * 2028: The status code for this payment cannot be denied</br>
 * 2029: This payment has forced to close</br>
 * 2030: This payment cannot be closed before it is approved</br>
 * 2033: The task ID is not exist</br>
 * 2040: The status code for this task cannot be approved</br>
 * 3001: Bridge functionality is not yet available</br>
 * 3072: The shopId is invalid</br>
 * 4000: Denied by user</br>
 * 5000: Smart Contract Error</br>
 * 6000: Server Error</br>
 * 7000: Timeout period expired</br>
 */
export enum ResultCode {
    "CODE0000" = 0,
    "CODE1000" = 1000,
    "CODE1001" = 1001,
    "CODE1002" = 1002,
    "CODE1003" = 1003,
    "CODE1010" = 1010,
    "CODE1020" = 1020,
    "CODE1030" = 1030,
    "CODE1031" = 1031,
    "CODE1050" = 1050,
    "CODE1051" = 1051,
    "CODE1052" = 1052,
    "CODE1053" = 1053,
    "CODE1054" = 1054,
    "CODE1160" = 1160,
    "CODE1161" = 1161,
    "CODE1162" = 1162,
    "CODE1163" = 1163,
    "CODE1164" = 1164,
    "CODE1170" = 1170,
    "CODE1171" = 1171,
    "CODE1172" = 1172,
    "CODE1173" = 1173,
    "CODE1174" = 1174,
    "CODE1200" = 1200,
    "CODE1201" = 1201,
    "CODE1202" = 1202,
    "CODE1211" = 1211,
    "CODE1220" = 1220,
    "CODE1221" = 1221,
    "CODE1222" = 1222,
    "CODE1501" = 1501,
    "CODE1502" = 1502,
    "CODE1503" = 1503,
    "CODE1505" = 1505,
    "CODE1506" = 1506,
    "CODE1510" = 1510,
    "CODE1511" = 1511,
    "CODE1512" = 1512,
    "CODE1513" = 1513,
    "CODE1514" = 1514,
    "CODE1520" = 1520,
    "CODE1521" = 1521,
    "CODE1530" = 1530,
    "CODE1531" = 1531,
    "CODE1532" = 1532,
    "CODE1533" = 1533,
    "CODE1534" = 1534,
    "CODE1711" = 1711,
    "CODE1712" = 1712,
    "CODE1714" = 1714,
    "CODE1715" = 1715,
    "CODE1716" = 1716,
    "CODE1717" = 1717,
    "CODE1718" = 1718,
    "CODE2001" = 2001,
    "CODE2002" = 2002,
    "CODE2003" = 2003,
    "CODE2004" = 2004,
    "CODE2005" = 2005,
    "CODE2006" = 2006,
    "CODE2007" = 2007,
    "CODE2008" = 2008,
    "CODE2020" = 2020,
    "CODE2022" = 2022,
    "CODE2024" = 2024,
    "CODE2025" = 2025,
    "CODE2026" = 2026,
    "CODE2027" = 2027,
    "CODE2028" = 2028,
    "CODE2029" = 2029,
    "CODE2030" = 2030,
    "CODE2033" = 2033,
    "CODE2040" = 2040,
    "CODE3001" = 3001,
    "CODE3072" = 3072,
    "CODE4000" = 4000,
    "CODE5000" = 5000,
    "CODE6000" = 6000,
    "CODE7000" = 7000,
}
