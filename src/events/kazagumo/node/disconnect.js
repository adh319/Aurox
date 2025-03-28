module.exports = async (client, name, players, moved, count) => {
    if (moved) return;

    players.map((player) => player.connection.disconnect());

    console.warn(`[WARN] Lavalink ${name} disconnected`);
};

/**
 * Project: Lunox
 * Author: adh319
 * Company: EnourDev
 * This code is the property of EnourDev and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/xhTVzbS5NU
 */
