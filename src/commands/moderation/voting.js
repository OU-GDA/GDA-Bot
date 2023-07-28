const { SlashCommandBuilder, EmbedBuilder, Interaction } = require('discord.js');
const { getEmojis } = require('../../utils/emojis');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('vote')
        .setDescription('Creates a voting message with emoticon input.')
        .addStringOption((option) => option
            .setName('items')
            .setDescription('The items to be voted on, separated by a comma')
            .setRequired(true)
        ),
    
    /**
     * Call a vote to order
     * @param {Interaction<CacheType>} interaction 
     */
	async execute(interaction)
    {
        // Parse the voting options from the user
        const options = interaction.options.getString("items").split(',');
        const icons = getEmojis(options.length);

        // Generate the choices string
        let choicesString = '';
        for (let idx = 0; idx < options.length; idx++)
        {
            choicesString += `${icons[idx]} ${options[idx]}\n\n`    
        }

        // Reply with the embeded message
        const voteEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .addFields(
                { name: 'Vote', value: 'React to this message to cast your vote!' },
                { name: 'Choices', value: choicesString }
            )
            .setTimestamp()
        
        const message = await interaction.reply({
            embeds: [voteEmbed],
            fetchReply: true
        });

        // React with all the appropriate emoticons
        for (const icon of icons)
        {
            message.react(icon);
        }
    }
};