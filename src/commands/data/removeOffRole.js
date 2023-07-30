const { SlashCommandBuilder, Interaction } = require('discord.js');
const DB = require('../../utils/database');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rmv-officer')
        .setDescription('Removes an officer role.')
        .addIntegerOption(option => option
            .setName('role-index')
            .setDescription('The index of the role to be removed. Use off-roles command to see indicies.')
            .setRequired(true)
        ),
    
    /**
     * Send the role assignment message
     * @param {Interaction<CacheType>} interaction 
     */
	async execute(interaction)
    {
        const index = interaction.options.getInteger('role-index');
        const roles = DB.get('off_roles') ?? [];
        DB.set('off_roles', roles.splice(index - 1, 1));
        
        // Reply a success message to the user
        interaction.reply('Role Successfully Removed!');
    }
};