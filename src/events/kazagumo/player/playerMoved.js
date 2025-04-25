module.exports = async (client, player, state, channels) => {
    const guild = await client.guilds.cache.get(player.guildId);
    const guildData = client.data.get(`guildData_${guild.id}`);

    switch (state) {
        case "LEFT":
            player.destroy().catch((e) => {});
            break;
        case "MOVED":
            if (player.paused) player.pause(false);

            if (guildData && guildData.reconnect.status) {
                if (guildData.reconnect.voice === channels.newChannelId) return;

                guildData.reconnect.voice = channels.newChannelId;
            }
            break;
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
