require("dotenv").config({ path: "./.env", quiet: true });

module.exports = {
    // GENERAL DETAILS
    token: process.env.TOKEN || " ", // your bot token
    prefix: process.env.PREFIX || "!", // your default prefix
    owner: process.env.OWNER || " ", // your Discord user Id & developer user Id
    dev: [" "], // your Discord user Id & developer user Id. Seperate multiple Ids with a comma (,)
    embedColor: process.env.EMBED_COLOR || "5865F2", // your embeded hex color
    leaveTimeout: parseInt(process.env.LEAVE_TIMEOUT) || 60000, // leave timeout in milliseconds
    minVolume: parseInt(process.env.MIN_VOLUME) || 1, // min volume
    maxVolume: parseInt(process.env.MAX_VOLUME) || 100, // max volume
    mongoUri: process.env.MONGO_URI || " ", // your MongoDB Uri
    geniusApiKey: process.env.GENIUS_API_KEY || " ", // your genius api key
    supportServerUrl: process.env.SUPPORT_SERVER_URL || " ", // your support server url

    // KAZAGUMO DETAILS
    defaultSource: process.env.DEFAULT_SOURCE || "ytsearch:",
    defaultYoutubeThumbnail: process.env.DEFAULT_YOUTUBE_THUMBNAIL || "maxresdefault",
    playerOptions: {
        moveOnDisconnect: true,
        reconnectTries: 10,
        restTimeout: 5000,
    },
    nodes: [
        {
            name: process.env.LAVALINK_NAME || "localhost",
            url: process.env.LAVALINK_URL || "localhost:2333",
            auth: process.env.LAVALINK_PASSWORD || "youshallnotpass",
            secure: parseBoolean(process.env.LAVALINK_SECURE || "false"),
        },
    ],
    lavalink: {
        lavaSrc: parseBoolean(process.env.LAVASRC || "false"), // set to true if you want to use lavascr plugin available source based on your lavalink server
        source: process.env.LAVASRC_SOURCE || "spsearch:", // this will be used if lavalink is enabled
    },
};

function parseBoolean(value) {
    if (typeof value === "string") value = value.trim().toLowerCase();

    switch (value) {
        case "true":
            return true;
        case "false":
            return false;
        default:
            return false;
    }
}

/**
 * Project: Aurox
 * Author: adh319
 * Company: EnourDev
 * This code is the property of EnourDev and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/xhTVzbS5NU
 */
