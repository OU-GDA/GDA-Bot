const { SlashCommandBuilder, Interaction } = require('discord.js');
const DB = require('../../utils/database');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('add-officer')
        .setDescription('Adds a new officer role.')
        .addStringOption((option) => option
            .setName('title')
            .setDescription('The title of the new role')
            .setRequired(true)
        )
        .addStringOption((option) => option
            .setName('description')
            .setDescription('The description of the new role')
            .setRequired(true)
        )
        .addRoleOption((option) => option
            .setName('role')
            .setDescription('The Discord role associated with this officer position')
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
        const roleDiscord = interaction.options.getRole('role'); // TODO: SAVE ROLE DATA

        // Valid argument check
        if (!roleTitle || !roleDescription) { throw "Invalid Arguments Given!"; }

        // Add the new role entry
        const roles = DB.get('off_roles') ?? [];
        roles.push({
            title: roleTitle,
            description: roleDescription
        });
        DB.set('off_roles', roles);
        
        // Reply a success message to the user
        interaction.reply('New Role Created!');
    }
};