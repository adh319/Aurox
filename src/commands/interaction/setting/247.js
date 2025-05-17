const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "247",
    description: "Toggle 247 mode",
    category: "setting",
    permissions: {
        bot: [],
        user: ["ManageGuild"],
    },
    settings: {
        voice: true,
        player: true,
        current: false,
    },
    devOnly: false,
    run: async (client, interaction, player) => {
        await interaction.deferReply({ ephemeral: true });

        const guildData = client.data.get(`guildData_${interaction.guildId}`);
        const newStatus = !guildData.reconnect.status;

        guildData.reconnect.status = newStatus;
        guildData.reconnect.text = newStatus ? player.textId || interaction.channelId : null;
        guildData.reconnect.voice = newStatus ? player.voiceId || interaction.member?.voice?.channelId : null;

        const embed = new EmbedBuilder()
            .setColor(client.config.embedColor)
            .setDescription(newStatus ? "✅ 24/7 mode is now `enabled`." : "❌ 24/7 mode is now `disabled`.");

        return interaction.editReply({ embeds: [embed] });
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
