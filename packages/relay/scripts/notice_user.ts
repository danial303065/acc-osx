import { NotificationSender } from "../src/delegator/NotificationSender";

import { Config } from "../src/common/Config";

async function main() {
    // Create with the arguments and read from file
    const config = new Config();
    config.readFromFile("config/config.yaml");
    const notification: NotificationSender = new NotificationSender(config, undefined);

    await notification.send(
        "ExponentPushToken[s__I-xJSSmcJCfLRPSobU_]",
        "사용자 푸쉬 테스트",
        "구매처 : 마이클2, 구매 금액 : 100 PHP, 포인트 사용 : 100 POINT",
        { type: "cancel" }
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
