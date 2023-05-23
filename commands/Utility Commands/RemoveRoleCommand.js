const { SlashCommandBuilder } = require('discord.js');
const { RemoveRole } = require('../../utils/Database');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('role-remove')
		.setDescription('Remove an officer role.')
        .addStringOption(option => option
            .setName("target_role")
            .setDescription("The name of the target role.")
            .setRequired(true)
        ),
	async execute(interaction) {
        const targetRole = interaction.options.getString("target_role");
        RemoveRole(targetRole, async (result) => {
            result ? await interaction.reply(`Role ***${targetRole}*** Deleted!`)
            : await interaction.reply(`Error Removing ***${targetRole}*** Role...`);
        });
	},
};