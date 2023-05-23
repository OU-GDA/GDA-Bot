const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

const dataPath = './data/roles.json';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('role-get')
		.setDescription('Return a list of all currently open officer roles.'),
	async execute(interaction) {
        let roles = '';
        fs.readFile(dataPath, 'utf8', async (err, data) =>
        {
            if (err) { console.log(err); return; }

            const obj = JSON.parse(data);
            for (const role of obj.roles)
            {
                roles += `${role}\n`
            }

            await interaction.reply(`**Roles:**\n${roles}`);
        });
	},
};