const { SlashCommandBuilder } = require('discord.js');
const { StoreRole } = require('../../utils/Database');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('role-create')
		.setDescription('Create a new officer role.')
        .addStringOption(option => option
            .setName("new_role")
            .setDescription("The name of the new role.")
            .setRequired(true)
        ),
	async execute(interaction) {
        const newRole = interaction.options.getString("new_role");
        StoreRole(newRole, async (result) => {
            result ? await interaction.reply(`New Role ***${newRole}*** Created!`)
            : await interaction.reply(`Error Creating ***${newRole}*** Role...`);
        });
	},
};