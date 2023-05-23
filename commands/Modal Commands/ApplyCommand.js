const { SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('apply')
		.setDescription('Apply to join the GDA officer team!'),
	async execute(interaction) {
        const roleSelectMenu = new StringSelectMenuBuilder()
            .setCustomId('role_select')
            .setPlaceholder('Select a position...')
            .addOptions(
                new StringSelectMenuOptionBuilder()
                    .setLabel("EXAMPLE")
                    .setDescription("EXAMPLE")
                    .setValue('a')
            );

        const actionRow = new ActionRowBuilder().addComponents(roleSelectMenu);
        await interaction.reply({
            content: 'Which position would you like to fill?',
            components: [actionRow]
        })
	},
};