const { readdirSync } = require("fs");

module.exports = (client) => {
    // Lavalink Events
    try {
        readdirSync("./src/events/kazagumo/node/").forEach((file) => {
            const event = require(`../events/kazagumo/node/${file}`);
            const eventName = file.split(".")[0];

            client.kazagumo.shoukaku.on(eventName, event.bind(null, client));
        });

        console.log("[INFO] Lavalink Events Loaded");
    } catch (error) {
        console.error(error);
    }

    // Player Events
    try {
        readdirSync("./src/events/kazagumo/player/").forEach((file) => {
            const event = require(`../events/kazagumo/player/${file}`);
            const eventName = file.split(".")[0];

            client.kazagumo.on(eventName, event.bind(null, client));
        });

        console.log("[INFO] Player Events Loaded");
    } catch (error) {
        console.error(error);
    }
};

/**
 * Project: Aurox
 * Author: adh319
 * Company: EnourDev
 * This code is the property of EnourDev and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/xhTVzbS5NU
 */
