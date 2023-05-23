const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vote')
        .setDescription('Generate a new vote message.'),
    async execute(interaction) {
        await interaction.reply(`
            **${interaction.user.username} has called a vote!\n-----------------------------------------------**
        `)
	},
};