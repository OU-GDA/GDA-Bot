const { SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } = require('discord.js');
const fs = require('fs');

const dataPath = './data/roles.json';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('apply')
		.setDescription('Apply to join the GDA officer team!'),
	async execute(interaction) {
        fs.readFile(dataPath, 'utf8', async (err, data) =>
        {
            if (err) { console.log(err); return; }

            const obj = JSON.parse(data);
            const options = [];

            for (const role of obj.roles)
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