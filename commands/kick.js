module.exports = {
	name: 'kick',
    description: 'Kicks a member fra the server',
    usage: '[@Mention]',
    guildOnly: true,
    cooldown: 5,
    args: true,                 // Just to have it tell how the usages is, when not put in a argument
	execute(message, args) {
        if (!message.member.hasPermission('KICK_MEMBERS')) return;

		if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }

        let member = message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been kicked!");
        })
	},
};