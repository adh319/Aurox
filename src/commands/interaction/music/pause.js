const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "pause",
    description: "Pause the current song",
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

        if (player.paused) {
            embed.setDescription(`Already paused.`);

            return interaction.reply({ embeds: [embed], ephemeral: true });
        }

        player.pause(true);

        embed.setDescription(`Paused the current song.`);

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
