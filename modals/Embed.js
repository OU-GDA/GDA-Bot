const { EmbedBuilder } = require('discord.js');

/**
 * Create a new embed message.
 * @param {string} title 
 * @param {ColorResolvable} color 
 * @param {string} description 
 * @param {string} thumbnail 
 * @param {RestOrArray<APIEmbedField>} fields 
 */
const Embed = (title, color, description, fields) =>
{
    return new EmbedBuilder()
        .setTitle(title)
        .setColor(color || 0x841617)
        .setDescription(description)
        .addFields(fields);
}

module.exports = {
    Embed: Embed
};