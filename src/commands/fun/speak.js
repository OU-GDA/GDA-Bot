const { SlashCommandBuilder, Interaction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('speak')
        .setDescription('Allows J-ROD to speak a given phrase.')
        .addStringOption((option) => option
            .setName('phrase')
            .setDescription('What J-ROD will say.')
            .setRequired(true)
        ),
    
    /**
     * Send the role assignment message
     * @param {Interaction<CacheType>} interaction 
     */
	async execute(interaction)
    {
        const phrase = interaction.options.getString("phrase").trim();
        interaction.reply(`${phrase}`);
    }
};