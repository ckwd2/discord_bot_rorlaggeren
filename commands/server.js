module.exports = {
	name: 'server',
	description: 'Server name and total number of members',
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};