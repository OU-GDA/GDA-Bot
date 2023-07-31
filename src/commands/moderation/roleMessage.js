const { SlashCommandBuilder, Interaction } = require('discord.js');
const DB = require('../../utils/database');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('role-msg')
        .setDescription('Sends a role assignment message.')
        .addChannelOption(option => option
            .setName('channel')
            .setDescription('The channel to send the message in.')
            .setRequired(true)
        ),
    
    /**
     * Send the role assignment message
     * @param {Interaction<CacheType>} interaction 
     */
	async execute(interaction)
    {
        const roles = DB.get('ass_roles') ?? [];
        
        // Reply a success message to the user
        interaction.reply('Role Assignment Message Sent!\nThis will automatically update as new roles are added using the ***add-role*** and ***rmv-role*** commands.');
    }
};