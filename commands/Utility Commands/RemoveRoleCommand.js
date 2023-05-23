const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

const dataPath = './data/roles.json';

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
        const targetRole = interaction.options.getString("target_role").toLowerCase();

        fs.readFile(dataPath, 'utf8', async (err, data) =>
        {
            if (err) { console.log(err); return; }

            const obj = JSON.parse(data);
            obj.roles.splice(obj.roles.findIndex((value) => {
                value.toLowerCase() === targetRole;
            }), 1);

            fs.writeFile(dataPath, JSON.stringify(obj), 'utf8', (err) => 
            {
                if (err) { console.log(err); return; }
            });

            await interaction.reply(`Role ***${targetRole}*** Deleted!`);
        });
	},
};