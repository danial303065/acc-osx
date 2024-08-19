import { Tspec } from "tspec";
import { ResultCode } from "./types";

export type PhoneApiSpec = Tspec.DefineApiSpec<{
    tags: ["Phone", "Ledger"];
    paths: {
        "/v1/phone/hash/{phone}": {
            get: {
                summary: "Provide the hash of phone number";
                path: {
                    /**
                     * Phone Number
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
