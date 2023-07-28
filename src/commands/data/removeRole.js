const { SlashCommandBuilder, Interaction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rmv-role')
        .setDescription('Removes a self-assignable role.'),
    
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