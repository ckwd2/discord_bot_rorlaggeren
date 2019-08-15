module.exports = {
    name: 'ban',
    description: 'Bans a member from the server',
    usage: '[@Mention]',
    cooldown: 5,
    guildOnly: true,
    args: true,                 // Just to have it tell how the usages is, when not put in a argument
    execute(message, args) {
        if (!message.member.hasPermission('BAN_MEMBERS')) return; 
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to ban them!');
        }
        let member = message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been banned!");
        })
    }
}