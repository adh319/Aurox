const { ClusterManager } = require("discord-hybrid-sharding"); //imports the sharding manager
require("dotenv").config();

const manager = new ClusterManager(`${__dirname}/clients/manager.js`, {
    totalShards: "auto", // you can set to every number you want but for save mode, use "auto" option
    shardsPerClusters: 2, // Default is 2, you can any bigger number you want
    totalClusters: "auto", // you can set to every number you want but for save mode, use "auto" option
    mode: "process", // you can also choose "worker"
    token: process.env.TOKEN || "YOUR_BOT_TOKEN", //paste your token here
});

manager.on("clusterCreate", (cluster) => console.log(`[INFO] Launched cluster ${cluster.id}`));
manager.spawn({ timeout: -1 });

/**
 * Project: Lunox
 * Author: adh319
 * Company: EnourDev
 * This code is the property of EnourDev and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/xhTVzbS5NU
 */
