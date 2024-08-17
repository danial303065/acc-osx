import { Tspec } from "tspec";

interface ICurrencyConvertResponse {
    /** Result Code */
    code: number;
    data: {
        /** Value converted to target currency (info. decimals are 18) */
        amount: string;
    };
    error?: {
        /** Error Message */
        message: string;
    };
}

export type CurrencyApiSpec = Tspec.DefineApiSpec<{
    tags: ["Currency"];
    paths: {
        "/v1/currency/convert": {
            get: {
                summary: "Provide value converted from one currency to another";
                query: {
                    /** Amount (info. 1 UNIT = "1000000000000000000", decimals is 18 */
                    amount: string;
                    /** Currency Symbol of source (ex. acc, point, usd, krw, php, ...) */
                    from: string;
                    /** Currency Symbol of target (ex. acc, point, usd, krw, php, ...) */
                    to: string;
                };
                responses: {
                    200: ICurrencyConvertResponse;
                };
            };
        };
    };
}>;
