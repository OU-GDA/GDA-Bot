const { SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } = require('discord.js');
const { GetRoles } = require('../../utils/Database');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('apply')
		.setDescription('Apply to join the GDA officer team!'),
	async execute(interaction) {
        const options = [];
        GetRoles(async (roles) => {
            roles.push("Other");
            
            for (const role of roles)
            {
                options.push(
                    new StringSelectMenuOptionBuilder()
                        .setLabel(role)
                        .setValue(role.toLowerCase())
                );
            }

            const roleSelectMenu = new StringSelectMenuBuilder()
            .setCustomId('role_select')
            .setPlaceholder('Select a position...')
            .addOptions(options);

            const actionRow = new ActionRowBuilder().addComponents(roleSelectMenu);
            await interaction.reply({
                content: 'Which position would you like to fill?',
                components: [actionRow]
            });
        });
	},
};