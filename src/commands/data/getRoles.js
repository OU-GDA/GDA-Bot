const { SlashCommandBuilder, Interaction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roles')
        .setDescription('Lists all currently assignable roles.'),
    
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