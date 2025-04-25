const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "stop",
    description: "Stop the player",
    category: "music",
    permissions: {
        bot: [],
        user: [],
    },
    settings: {
        voice: true,
        player: true,
        current: true,
    },
    devOnly: false,
    run: async (client, interaction, player) => {
        const embed = new EmbedBuilder().setColor(client.config.embedColor);

        player.queue.clear();
        player.skip();

        if (player.queue.previous) player.queue.previous = [];
        if (player.queue.current) player.queue.current = null;
        if (client.data.get("autoplay", player.guildId)) client.data.delete("autoplay", player.guildId);

        embed.setDescription(`Stopped the player.`);

        return interaction.reply({ embeds: [embed], ephemeral: true });
    },
};

/**
 * Project: Aurox
 * Author: adh319
 * Company: EnourDev
 * This code is the property of EnourDev and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/xhTVzbS5NU
 */
