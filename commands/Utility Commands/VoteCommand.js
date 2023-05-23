const { SlashCommandBuilder } = require('discord.js');
const { emojis } = require("../../utils/Emoticons.js");

const GetVotingIcons = (count) =>
{
    if (count <= 0) { console.error("No Voting Options!"); return []; }
    if (count > emojis.length) { console.error("Too Many Options!"); return []; }

    // We use a set here to eliminate duplicate entries
    const emojiSet = new Set();
    while (emojiSet.size < count)
    {
        emojiSet.add(emojis[
            Math.floor(Math.random() * emojis.length)
        ]);
    }

    return Array.from(emojiSet);
}   

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vote')
        .setDescription('Generate a new vote message.'),
    async execute(interaction) {
        const votingIcons = GetVotingIcons(3);
        if (votingIcons.length === 0) { return await interaction.reply("An Error Occured While Calling A Vote..."); }

        const message = await interaction.reply({
            content: 'Vote',
            fetchReply: true
        });

        // Display each voting icon emoji
        for (const icon of votingIcons)
        {
            message.react(icon);
        }
	},
};