const cron = require("node-cron");

module.exports = async (client) => {
    const updateSettings = async (dataList, dataModel, type) => {
        for (const { id } of dataList) {
            const setting = client.data.get(`${type}_${id}`);
            if (!setting) {
                console.warn(`No setting found for ${type}_${id}`);

                continue;
            }

            try {
                await dataModel.findOneAndUpdate({ id }, { $set: setting }, { upsert: true, new: true });
            } catch (err) {
                console.error(`Failed to update ${type}_${id}:`, err);
            }
        }
    };

    // Every 10 minutes
    cron.schedule("*/10 * * * *", async () => {
        try {
            const [guilds, users] = await Promise.all([client.guildData.find(), client.userData.find()]);

            await updateSettings(guilds, client.guildData, "guildData");
            await updateSettings(users, client.userData, "userData");

            console.log("Data sync complete.");
        } catch (error) {
            console.error("An error occurred during the scheduled database update:", error);
        }
    });
};

/**
 * Project: Aurox
 * Author: adh319
 * Company: EnourDev
 * This code is the property of EnourDev and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/xhTVzbS5NU
 */
