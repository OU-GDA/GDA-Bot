const { SlashCommandBuilder, Interaction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('add-role')
        .setDescription('Creates a new assignable role.'),
    
    /**
     * Send the role assignment message
     * @param {Interaction<CacheType>} interaction 
     */
	async execute(interaction)
    {
        //TODO: Create Role
        
        // Reply a success message to the user
        interaction.reply('Role Successfully Added!');
    }
};