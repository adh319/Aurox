module.exports = async (client, player, track) => {
    const guild = await client.guilds.cache.get(player.guildId);

    console.debug(`[DEBUG] Track ended from ${guild.name} (${guild.id})`);

    if (player.message) player.message.delete().catch((e) => {});
};

/**
 * Project: Aurox
 * Author: adh319
 * Company: EnourDev
 * This code is the property of EnourDev and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/xhTVzbS5NU
 */
