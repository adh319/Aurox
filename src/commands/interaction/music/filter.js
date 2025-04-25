const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "filter",
    description: "Set the filter",
    category: "music",
    options: [
        {
            name: "mode",
            description: "Choose a filter",
            type: 3,
            required: true,
            choices: [
                { name: "clear", value: "clear" },
                { name: "8d", value: "eightD" },
                { name: "bassboost", value: "bassboost" },
                { name: "chipmunk", value: "chipmunk" },
                { name: "daycore", value: "daycore" },
                { name: "doubletime", value: "doubletime" },
                { name: "electronic", value: "electronic" },
                { name: "karaoke", value: "karaoke" },
                { name: "nightcore", value: "nightcore" },
                { name: "party", value: "party" },
                { name: "pitch", value: "pitch" },
                { name: "pop", value: "pop" },
                { name: "radio", value: "radio" },
                { name: "slowmo", value: "slowmo" },
                { name: "soft", value: "soft" },
                { name: "television", value: "television" },
                { name: "treblebass", value: "treblebass" },
                { name: "vaporwave", value: "vaporwave" },
                { name: "vibrate", value: "vibrate" },
            ],
        },
    ],
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
        const mode = interaction.options.getString("mode");
        const currentVolume = player.volume;

        if (mode === "clear") {
            player.shoukaku.clearFilters();

            embed.setDescription(`Filter has been cleared.`);
        } else {
            player.shoukaku.setFilters(client.filters[mode]);

            embed.setDescription(`Filter has been set to: \`${mode}\``);
        }

        player.setVolume(currentVolume);

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
