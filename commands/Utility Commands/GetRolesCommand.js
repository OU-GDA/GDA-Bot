const { SlashCommandBuilder } = require('discord.js');
const { GetRoles } = require('../../utils/Database');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('role-get')
		.setDescription('Return a list of all currently open officer roles.'),
	async execute(interaction) {
        GetRoles(async (roles) => {
            if (roles.length === 0)
            {
                await interaction.reply(`There Are No Roles Available...`);
                return;
            }

            let roleDisplay = '';
            for (const role of roles)
            {
                roleDisplay += `${role}\n`;
            }

            await interaction.reply(`**Available Roles:**\n${roleDisplay}`);
        });
	},
};