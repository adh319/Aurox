const { readdirSync } = require("fs");

module.exports = (client) => {
    try {
        readdirSync("./src/events/bot/").forEach((dir) => {
            const bots = readdirSync(`./src/events/bot/${dir}`).filter((file) => file.endsWith(".js"));

            for (const file of bots) {
                const event = require(`../events/bot/${dir}/${file}`);
                const eventName = file.split(".")[0];

                client.on(eventName, event.bind(null, client));
            }
        });

        console.log("[INFO] Bot events loaded");
    } catch (error) {
        console.error(error);
    }
};

/**
 * Project: Lunox
 * Author: adh319
 * Company: EnourDev
 * This code is the property of EnourDev and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/xhTVzbS5NU
 */
