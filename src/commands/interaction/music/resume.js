const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "resume",
    description: "Resume the current paused song",
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

        if (!player.paused) {
            embed.setDescription(`Song is not paused.`);

            return interaction.reply({ embeds: [embed], ephemeral: true });
        }

        player.pause(false);

        embed.setDescription(`Resumed the current song.`);

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
