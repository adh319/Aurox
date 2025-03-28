const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");
const { ClusterClient, getInfo } = require("discord-hybrid-sharding");
const { Connectors } = require("shoukaku");
const { Kazagumo, Plugins } = require("kazagumo");
const Spotify = require("kazagumo-spotify");
const KazagumoFilter = require("kazagumo-filter");

class MainClient extends Client {
    constructor() {
        super({
            shards: getInfo().SHARD_LIST,
            shardCount: getInfo().TOTAL_SHARDS,
            failIfNotExists: true,
            allowedMentions: {
                parse: ["roles", "users", "everyone"],
                repliedUser: false,
            },
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildVoiceStates,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
            ],
            partials: [Partials.Message, Partials.Channel, Partials.Reaction],
        });

        this.config = require("../settings/config.js");
        this.guildData = require("../databases/schema/guild.js");
        this.userData = require("../databases/schema/user.js");
        this.prefix = new Collection();
        this.aliases = new Collection();
        this.slash = new Collection();
        this.data = new Map();

        this.kazagumo = new Kazagumo(
            {
                defaultSource: this.config.defaultSource,
                plugins: [
                    new Plugins.PlayerMoved(this),
                    new KazagumoFilter(),
                    new Spotify({
                        clientId: this.config.spotifyID,
                        clientSecret: this.config.spotifySecret,
                        playlistPageLimit: 1, // optional ( 100 tracks per page )
                        albumPageLimit: 1, // optional ( 50 tracks per page )
                        searchLimit: 10, // optional ( track search limit. Max 50 )
                        searchMarket: "US", // optional || default: US ( Enter the country you live in. [ Can only be of 2 letters. For eg: US, IN, EN ] )//
                    }),
                ],
                sourceForceResolve: this.config.sourceForceResolve,
                defaultYoutubeThumbnail: this.config.defaultYoutubeThumbnail,
                send: (guildId, payload) => {
                    const guild = this.guilds.cache.get(guildId);
                    if (guild) guild.shard.send(payload);
                },
            },
            new Connectors.DiscordJS(this),
            this.config.nodes,
            this.config.playerOptions,
        );

        if (!this.token) this.token = this.config.token;

        ["anticrash", "database", "events", "commands", "kazagumo"].forEach((handler) => {
            require(`../handlers/${handler}`)(this);
        });

        this.cluster = new ClusterClient(this);
    }

    connect() {
        return super.login(this.token);
    }
}

module.exports = MainClient;

/**
 * Project: Lunox
 * Author: adh319
 * Company: EnourDev
 * This code is the property of EnourDev and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/xhTVzbS5NU
 */
