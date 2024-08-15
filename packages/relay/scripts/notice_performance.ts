import { NotificationSender } from "../src/delegator/NotificationSender";

import { Config } from "../src/common/Config";
import { ContractUtils } from "../src/utils/ContractUtils";

async function main() {
    // Create with the arguments and read from file
    const config = new Config();
    config.readFromFile("config/config.yaml");
    const notification: NotificationSender = new NotificationSender(config, undefined);

    const ids = ["ExponentPushToken[s__I-xJSSmcJCfLRPSobU_]", "ExponentPushToken[gr9g1_GA_54W9mUfYMYPtG]"];

    for (let idx = 0; idx < 100; idx++) {
        await send(notification, ids[idx % 2]);
        await ContractUtils.delay(10);
    }
}

async function send(notification: NotificationSender, to: string) {
    await notification.send(to, "테스트", "구매처 : 마이클2, 구매 금액 : 100 PHP, 포인트 사용 : 100 POINT", {
        type: "info",
    });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
