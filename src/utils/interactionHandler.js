const { Interaction } = require('discord.js');

/**
 * Handles interaction errors
 * @param {Interaction<CacheType>} interaction 
 * @param {string} message 
 */
async function handleError(interaction, message)
{
    (interaction.replied || interaction.deferred)
    ? interaction.followUp({ content: message, ephemeral: true })
    : interaction.reply({ content: message, ephemeral: true });
}

/**
 * Handles command interactions
 * @param {Interaction<CacheType>} interaction
 */
async function handleCommand(interaction)
{
    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) { return handleError(interaction, `Command ${interaction.commandName} Does Not Exist...`); }
    command.execute(interaction);
}

/**
 * Delegates all interaction behaviour
 * @param {Interaction<CacheType>} interaction 
 */
async function handleInteraction(interaction)
{
    try
    {
        if (interaction.isChatInputCommand()) { handleCommand(interaction); }
    }
    catch (error)
    {
        console.error(error);
        handleError(interaction, 'An Error Has Occurred...');
    }
}

module.exports = handleInteraction;