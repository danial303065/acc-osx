import { BOACoin } from "../src/common/Amount";

import "@nomiclabs/hardhat-ethers";
import * as hre from "hardhat";
import { INotificationEventHandler, NotificationSender } from "../src/delegator/NotificationSender";

import { Config } from "../src/common/Config";

async function main() {
    const provider = hre.ethers.provider;
    const account = "0x9E8549cc1B5b9036AC410Ed11966BB3c6B94A77d";
    const balance = await provider.getBalance(account);
    console.log(`${account} : ${new BOACoin(balance).toBOAString()}`);

    const notificationEventHandler: INotificationEventHandler = {
        receive: async (to: string, title: string, body: string, data: any) => {
            console.log(to, title);
        },
    };
    // Create with the arguments and read from file
    const config = new Config();
    config.readFromFile("config/config.yaml");
    const notification: NotificationSender = new NotificationSender(config, notificationEventHandler);

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
