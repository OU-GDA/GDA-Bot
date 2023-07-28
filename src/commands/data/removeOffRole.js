const { SlashCommandBuilder, Interaction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rmv-officer')
        .setDescription('Removes an officer role.'),
    
    /**
     * Send the role assignment message
     * @param {Interaction<CacheType>} interaction 
     */
	async execute(interaction)
    {
        //TODO: Removed Role
        
        // Reply a success message to the user
        interaction.reply('Role Successfully Removed!');
    }
};