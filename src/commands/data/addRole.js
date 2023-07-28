const { SlashCommandBuilder, Interaction } = require('discord.js');
const DB = require('../../utils/database');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('add-role')
        .setDescription('Adds a new self-assignable role.')
        .addStringOption((option) => option
            .setName('title')
            .setDescription('The title of the new role')
            .setRequired(true)
        )
        .addStringOption((option) => option
            .setName('description')
            .setDescription('The description of the new role')
            .setRequired(true)
        ),
    
    /**
     * Send the role assignment message
     * @param {Interaction<CacheType>} interaction 
     */
	async execute(interaction)
    {
        // Get role data
        const roleTitle = interaction.options.getString("title").trim();
        const roleDescription = interaction.options.getString("description").trim();

        // Valid argument check
        if (!roleTitle || !roleDescription) { throw "Invalid Arguments Given!"; }

        // Add the new role entry
        const roles = DB.get('ass_roles') ?? [];
        roles.push({
            title: roleTitle,
            description: roleDescription
        });
        DB.set('ass_roles', roles);
        
        // Reply a success message to the user
        interaction.reply('New Role Created!');
    }
};