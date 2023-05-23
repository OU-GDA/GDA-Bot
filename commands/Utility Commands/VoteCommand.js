const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vote')
        .setDescription('Generate a new vote message.'),
    async execute(interaction) {
        const message = await interaction.reply({
            content: 'Vote',
            fetchReply: true
        });

        await message.react('😄')
	},
};