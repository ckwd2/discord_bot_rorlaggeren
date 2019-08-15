module.exports = {
	name: 'fjern',
	description: 'Clears the chat of messages',
	cooldown: 3,
	execute(message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("No.");
        if (!args[0]) {
            message.channel.bulkDelete(10 + 1, true).catch(err => {
                console.error(err);
                message.channel.send('there was an error trying to prune messages in this channel!')
                });
            message.channel.send(`Clear 10 messages.`).then(msg => msg.delete(2000));
        } else {
            var num = parseInt(args[0]);
            message.channel.bulkDelete(num + 1, true).catch(err => {
                console.error(err);
                message.channel.send('there was an error trying to prune messages in this channel!')
            });
            message.channel.send(`Clear ${num} messages.`).then(msg => msg.delete(2000));
        }
    },
};