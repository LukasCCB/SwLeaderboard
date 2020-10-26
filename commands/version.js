module.exports = {
    name: 'version',
    description: 'Return information about this bot',
    args: false,
    usage: '',
    aliases: ['v', 'vrsn'],
    async execute(message, args) {
        console.log(args); // this is a workaround for eslint until i look into it more.
        let version = process.env.npm_package_version;
        let homepage = process.env.npm_package_homepage;
        let authors = process.env.npm_package_author_name;
        
        let Discord = require('discord.js');
        let Embed = new Discord.MessageEmbed();
        console.log({e: process.env, v: version, h: homepage, a: authors});
        Embed.addField('Version', version);
        Embed.addField('Author(s)', authors);

        Embed.setURL(homepage);
        Embed.setTimestamp();

        message.channel.send({embed: Embed});
    },
};