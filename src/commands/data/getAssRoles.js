const { SlashCommandBuilder, Interaction } = require('discord.js');
const DB = require('../../utils/database');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ass-roles')
        .setDescription('Lists all currently assignable roles.'),
    
    /**
     * Display all assignable roles
     * @param {Interaction<CacheType>} interaction 
     */
	async execute(interaction)
    {
        // Get the roles from the database
        const roles = DB.get('ass_roles') ?? [];
        if (roles.length === 0) { return interaction.reply('No Assignable Roles Found...'); }

        // Generate the result string
        let message = '**Assignable Roles:**\n';
        for (let idx = 0; idx < roles.length; idx++)
        {
            message += `${idx + 1}. ${roles[idx].title}\n`
        }
        
        // Display the found roles
        interaction.reply(message);
    }
};