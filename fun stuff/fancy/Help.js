const commando = require('discord.js-commando');

class HelpCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'help',
            group: 'fancy',
            memberName: 'help',
            description: 'Here You can see ALL our Commands!',
            guildOnly: false,
      });
    };

async run(message, args) {
    message.channel.send('```diff\n-» Generator\n\n- !getMC {-} Get yourself a Minecraft Account!\n- !getNetflix {-} Get yourself a Netflix Account!\n- !getHulu {-} Get yourself a Hulu Account!\n- !getOrigin {-} Get yourself a Origin Account!\n- !getUplay {-} Get yourself a Uplay Account!\n- !getSpotify {-} Get yourself a Spotify Account!\n- !getCrunchyRoll {-} Get yourself a CrunchyRoll Account!```\n\n```fix\n-» Other Commands\n\n- !help {-} To See this List!\n- !author {-} To see Info about my Author!\n- !owner {-} To see Info about the Server Owner!\n- !Staff {-} Our Staff List!\n- !partners {-} To see our Partner List! (More info in #partners)```')
    }}

    module.exports = HelpCommand;