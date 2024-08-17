import { Tspec } from "tspec";

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

export type PhoneApiSpec = Tspec.DefineApiSpec<{
    tags: ["Phone", "Ledger"];
    paths: {
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
