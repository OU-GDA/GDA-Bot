const { SlashCommandBuilder, Interaction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('add-role')
        .setDescription('Adds a new self-assignable role.'),
    
    /**
     * Send the role assignment message
     * @param {Interaction<CacheType>} interaction 
     */
	async execute(interaction)
    {
        //TODO: Add Role
        
        // Reply a success message to the user
        interaction.reply('New Role Created!');
    }
};