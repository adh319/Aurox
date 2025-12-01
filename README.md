<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=Aurox&fontSize=80&fontAlignY=35&animation=twinkling&fontColor=gradient"/> 
</p>

<p align="center"> 
  A simple yet powerful Discord music bot using the Lavalink client (Shoukaku & Kazagumo) and Discord.js v14.
</p>

<p align="center"> 
  <a href="https://ko-fi.com/enourdev" target="_blank"> <img src="https://ko-fi.com/img/githubbutton_sm.svg"/> </a>
</p>

<p align="center"> 
  <a href="https://discord.gg/xhTVzbS5NU" target="_blank"> <img src="https://discordapp.com/api/guilds/1056011738950156359/widget.png?style=banner2"/> </a>
</p>

[![Version][version-shield]](version-url) [![MIT License][license-shield]][license-url] [![Contributors][contributors-shield]][contributors-url] [![Stargazers][stars-shield]][stars-url] [![Forks][forks-shield]][forks-url] [![Watchers][watchers-shield]][watchers-url] [![Issues][issues-shield]][issues-url]

### `📢` Main Features

-   ☑️ Use **[Shoukaku](https://github.com/shipgirlproject/Shoukaku)** & **[Kazagumo](https://github.com/Takiyo0/Kazagumo)**
-   ☑️ Supports Lavalink v4 only!
-   ☑️ Slash commands
-   ☑️ Prefix commands **[Dev-only commands]**
-   ☑️ Clean UI
-   ☑️ Better performance
-   ☑️ Easy to use
-   ☑️ And more...!

### `🎵` Supported Platforms

-   ☑️ Youtube
-   ☑️ Youtube Music
-   ☑️ SoundCloud
-   ☑️ Apple Music (LavaSrc Plugin)
-   ☑️ Deezer (LavaSrc Plugin)
-   ☑️ Spotify (LavaSrc Plugin)
-   ☑️ And more...!

### `📌` Requirements

-   Discord Bot Token **[[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)]**
-   Node.js **`v18`** or higher
-   MongoDB **`v5.x`** or higher **[For local database]**
-   Lavalink **[[Guide](https://lavalink.dev/)]**
-   Java **`v18`** or higher **[For Lavalink]**

### `🚀` Configuration & Installation

`1.` Clone this repository.

```
git clone https://github.com/adh319/Aurox.git
```

`2.` Open the Aurox folder then run

```
npm install
```

`3.` Rename `.env.example` to `.env` and fill out these variables according to yours.

```
#########################################
# ALL THE DETAILS BELOW SHOULD BE FILLED #
#########################################

# GENERAL DETAILS
TOKEN =  # Your bot token
PREFIX = ! # Prefix of the bot
OWNER =  # Your Discord user ID
EMBED_COLOR = 5865F2 # Embed color, example: FFFFFF (without #)
LEAVE_TIMEOUT = 60000 # Set leave timeout when bot was alone or not playing
MIN_VOLUME = 1 # Minimum volume
MAX_VOLUME = 100 # Maximum volume
MONGO_URI =  # Your MongoDB URI
GENIUS_API_KEY =  # Your Genius API key
SUPPORT_SERVER_URL = https://discord.gg/kNdSkHchzH # Support server url

# KAZAGUMO DETAILS
DEFAULT_SOURCE = ytsearch: # Default source Available source: ytsearch:, ytmsearch:, scsearch: | These are the default sources if you dont have lavasrc plugin installed
DEFAULT_YOUTUBE_THUMBNAIL = maxresdefault
LAVASRC = false # Set to true if you have lavasrc plugin installed, so you can use spotify (spsearch:), applemusic (amsearch:), and others as source.
LAVASRC_SOURCE = spsearch: # This will be used when LAVASRC is true

# LAVALINK DETAILS
LAVALINK_HOST = Aurox # Your Lavalink host
LAVALINK_URL = localhost:2333 # Your Lavalink url & port
LAVALINK_PASSWORD = youshallnotpass # Your Lavalink password
LAVALINK_SECURE = false # Set to true if your Lavalink uses SSL
```

`4.` Go to `./src/settings/config.js`, open the file and fill out these config options value.

```js
// line 8
dev: [" "], // your Discord user Id & developer user Id. Seperate multiple Ids with a comma (,)
```

`5.` Go to `./src/settings/emoji.js`, open the file and fill out the emoji variables.

`6.` Start the bot by running.

```
npm start
```

### `🤖` Bots Using This Source Code

Below is a list of Discord bots that are using this source code. If you want your bots to be listed here, **`edit this table`** and make a pull request with the following format:

| No. | Bot Name           | Invite Link                                   | Support Server                                 |
|-----|--------------------|-----------------------------------------------|------------------------------------------------|
| 1   | Jive  | [Invite Link](https://discord.com/oauth2/authorize?client_id=1019954630551158934)   | [Jive Corner](https://discord.gg/kNdSkHchzH)  |
| 2   | Musical | [Invite Link](https://discord.com/oauth2/authorize?client_id=1085342308934889592)  | [Support Server](https://discord.gg/PhjnJygSGv)  |
| 3   |   |    |   |
| 4   |   |    |   |

### `🔐` Licensed

Distributed under the [`MIT License`](https://github.com/adh319/Aurox/blob/main/LICENSE). You are free to use, and modify the code. However, you must provide attribution by linking back to the original repository and include this copyright notice:
```
© 2024 adh319@github. This project is available under the MIT License.You must include proper attribution by linking to the original GitHub repository: https://github.com/adh319/Aurox.
```

### `👥` Contributors

<a href="https://github.com/adh319/Aurox/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=adh319/Aurox" />
</a>

[version-shield]: https://img.shields.io/github/package-json/v/adh319/Aurox?style=for-the-badge
[contributors-shield]: https://img.shields.io/github/contributors/adh319/Aurox.svg?style=for-the-badge
[contributors-url]: https://github.com/adh319/Aurox/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/adh319/Aurox.svg?style=for-the-badge
[forks-url]: https://github.com/adh319/Aurox/network/members
[watchers-shield]: https://img.shields.io/github/watchers/adh319/Aurox?style=for-the-badge
[watchers-url]: https://github.com/adh319/Aurox
[stars-shield]: https://img.shields.io/github/stars/adh319/Aurox.svg?style=for-the-badge
[stars-url]: https://github.com/adh319/Aurox/stargazers
[issues-shield]: https://img.shields.io/github/issues/adh319/Aurox.svg?style=for-the-badge
[issues-url]: https://github.com/adh319/Aurox/issues
[license-shield]: https://img.shields.io/github/license/adh319/Aurox.svg?style=for-the-badge
[license-url]: https://github.com/adh319/Aurox/blob/main/LICENSE
[spon-img]: https://media.discordapp.net/attachments/979364157541462066/982734017671606322/Vultr_Logo_Download_Vector.png
