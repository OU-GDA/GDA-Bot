const { SlashCommandBuilder, Interaction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('role-msg')
        .setDescription('Sends a role assignment message.'),
    
    /**
     * Send the role assignment message
     * @param {Interaction<CacheType>} interaction 
     */
	async execute(interaction)
    {
        //TODO: Send Role Assignment Message
        
        // Reply a success message to the user
        interaction.reply('Role Assignment Message Sent!\nThis will automatically update as new roles are added using the ***add-role*** and ***rmv-role*** commands.');
    }
};