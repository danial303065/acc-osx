import { Tspec } from "tspec";
import { ResultCode } from "./types";

export type LedgerApiSpec = Tspec.DefineApiSpec<{
    tags: ["Ledger"];
    paths: {
        "/v1/ledger/balance/account/{account}": {
            get: {
                summary: "Provide the balance corresponding to the wallet address";
                description: "It provides both the balance of points and tokens.</br>It also provides the value converted into basic currency units along with the balance.";
                path: {
                    /**
                     * Address of wallet
                     * @example "0x5650CD3E6E8963B43D21FAE60EE7A03BCEFCE766"
                     */
                    account: string;
                };
                responses: {
                    200: {
                        /**
                         * Result Code
                         * @example 0
                         */
                        code: ResultCode;

                        data?: {
                            /**
                             * Address of wallet
                             * @example "0x5650CD3E6E8963B43D21FAE60EE7A03BCEFCE766"
                             */
                            account: string;

                            point: {
                                /**
                                 * Balance of Point (info. decimals are 18)
                                 * @example "10000000000000000000000000"
                                 */
                                balance: string;
                                /**
                                 * Value of Point (info. decimals are 18)
                                 * @example "10000000000000000000000000"
                                 */
                                value: string;
                            };

                            token: {
                                /**
                                 * Balance of Token (info. decimals are 18)
                                 * @example "100000000000000000000000"
                                 */
                                balance: string;
                                /**
                                 * Value of Token (info. decimals are 18)
                                 * @example "112108371800000000000000"
                                 */
                                value: string;
                            };
                        };

                        error?: {
                            /**
                             * Error Message
                             * @example "Failed to check the validity of parameters"
                             */
                            message: string;
                        };
                    };
                };
            };
        };
        "/v1/ledger/balance/phone/{phone}": {
            get: {
                summary: "Provide the balance corresponding to the user`s phone number";
                description: "It provides both the balance of points and tokens.</br>It also provides the value converted into basic currency units along with the balance.";
                path: {
                    /**
                     * Phone number
                     * @example "+82 10-1000-5000"
                     */
                    phone: string;
                };
                responses: {
                    200: {
                        /**
                         * Result Code
                         * @example 0
                         */
                        code: ResultCode;

                        data: {
                            /**
                             * Phone Number
                             * @example "+82 10-1000-5000"
                             */
                            phone: string;

                            /**
                             * Phone Number Hash
                             * @example "0xF48F4BF6C8B5B285F0D9EB5D52623EE14B6F2B5980E87FAC89E4B968995FAE2B"
                             */
                            phoneHash: string;

                            /**
                             * Address of wallet
                             * @example "0x5650CD3E6E8963B43D21FAE60EE7A03BCEFCE766"
                             */
                            account: string;

                            point: {
                                /**
                                 * Balance of Point (info. decimals are 18)
                                 * @example "10000000000000000000000000"
                                 */
                                balance: string;
                                /**
                                 * Value of Point (info. decimals are 18)
                                 * @example "10000000000000000000000000"
                                 */
                                value: string;
                            };

                            token: {
                                /**
                                 * Balance of Token (info. decimals are 18)
                                 * @example "100000000000000000000000"
                                 */
                                balance: string;
                                /**
                                 * Value of Token (info. decimals are 18)
                                 * @example "112108371800000000000000"
                                 */
                                value: string;
                            };
                        };

                        error?: {
                            /**
                             * Error Message
                             * @example "Failed to check the validity of parameters"
                             */
                            message: string;
                        };
                    };
                };
            };
        };
        "/v1/ledger/balance/phoneHash/{phoneHash}": {
            get: {
                summary: "Provide the balance corresponding to the user's phone number hash";
                description: "It provides both the balance of points and tokens.</br>It also provides the value converted into basic currency units along with the balance.";
                path: {
                    /**
                     * Phone number hash
                     * @example "0xF48F4BF6C8B5B285F0D9EB5D52623EE14B6F2B5980E87FAC89E4B968995FAE2B"
                     */
                    phoneHash: string;
                };
                responses: {
                    200: {
                        /**
                         * Result Code
                         * @example 0
                         */
                        code: ResultCode;

                        data: {
                            /**
                             * Phone Number Hash
                             * @example "0xF48F4BF6C8B5B285F0D9EB5D52623EE14B6F2B5980E87FAC89E4B968995FAE2B"
                             */
                            phoneHash: string;

                            /**
                             * Address of wallet
                             * @example "0x5650CD3E6E8963B43D21FAE60EE7A03BCEFCE766"
                             */
                            account: string;

                            point: {
                                /**
                                 * Balance of Point (info. decimals are 18)
                                 * @example "10000000000000000000000000"
                                 */
                                balance: string;
                                /**
                                 * Value of Point (info. decimals are 18)
                                 * @example "10000000000000000000000000"
                                 */
                                value: string;
                            };

                            token: {
                                /**
                                 * Balance of Token (info. decimals are 18)
                                 * @example "100000000000000000000000"
                                 */
                                balance: string;
                                /**
                                 * Value of Token (info. decimals are 18)
                                 * @example "112108371800000000000000"
                                 */
                                value: string;
                            };
                        };

                        error?: {
                            /**
                             * Error Message
                             * @example "Failed to check the validity of parameters"
                             */
                            message: string;
                        };
                    };
                };
            };
        };
        "/v1/ledger/nonce/{account}": {
            get: {
                summary: "Provide the nonce corresponding to the user's wallet address";
                description: "The nonce is required for signing.</br>This is to produce a signature result that is not the same, including the ever-changing nonce in the original data to be signed.</br>The nonce is recorded in the contract, which increases the value of the nonce by 1 when the signature is used.";
                path: {
                    /**
                     * Address of wallet
                     * @example "0x5650CD3E6E8963B43D21FAE60EE7A03BCEFCE766"
                     */
                    account: string;
                };
                responses: {
                    200: {
                        /**
                         * Result Code
                         * @example 0
                         */
                        code: ResultCode;

                        data: {
                            /**
                             * Address of wallet
                             * @example "0x5650CD3E6E8963B43D21FAE60EE7A03BCEFCE766"
                             */
                            account: string;

                            /**
                             * Nonce for address of wallet in Ledger Contract
                             * @example "45"
                             */
                            nonce: string;
                        };

                        error?: {
                            /**
                             * Error Message
                             * @example "Failed to check the validity of parameters"
                             */
                            message: string;
                        };
                    };
                };
            };
        };
        "/v1/ledger/exchangePointToToken": {
            post: {
                summary: "Exchange points to tokens";
                description: "Exchange your points for tokens.</br>Signatures are required to request this.</br>Your wallet address, amount of exchange, nonce, and chain ID will be used for your signature.</br>The exchange rate is based on the price of the token recorded by the validators by agreement.";
                body: {
                    /**
                     * Wallet address of user
                     * @example "0x5650CD3E6E8963B43D21FAE60EE7A03BCEFCE766"
                     */
                    account: string;
                    /**
                     * Amount to be exchanged (info. decimals are 18)
                     * @example "100000000000000000000000"
                     */
                    amount: string;
                    /**
                     * Signature of user wallet
                     * @example "0x020d671b80fbd20466d8cb65cef79a24e3bca3fdf82e9dd89d78e7a4c4c045bd72944c20bb1d839e76ee6bb69fed61f64376c37799598b40b8c49148f3cdd88a1b"
                     */
                    signature: string;
                };
                responses: {
                    200: {
                        /**
                         * Result Code
                         * @example 0
                         */
                        code: ResultCode;

                        data: {
                            /**
                             * Hash of transaction
                             * @example "0x3798157a3f32c0ed7692f240eb83f3a3c2f6077c5ad7acf7a9a54d426d63632e"
                             */
                            txHash: string;
                        };

                        error?: {
                            /**
                             * Error Message
                             * @example "Failed to check the validity of parameters"
                             */
                            message: string;
                        };
                    };
                };
            };
        };
    };
}>;
