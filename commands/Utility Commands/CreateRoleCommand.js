const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

const dataPath = './data/roles.json';

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

        fs.readFile(dataPath, 'utf8', async (err, data) =>
        {
            if (err) { console.log(err); return; }

            const obj = JSON.parse(data);
            obj.roles.push(newRole);

            fs.writeFile(dataPath, JSON.stringify(obj), 'utf8', (err) => 
            {
                if (err) { console.log(err); return; }
            });

            await interaction.reply(`New Role ***${newRole}*** Created!`);
        });
	},
};