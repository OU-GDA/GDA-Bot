const emojis = [
    "😮", "😲", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤢", "🤮", "🤕", "🥳", "😷", "🤒", 
    "🤑", "🤠", "😈", "👿", "👹", "👺", "😿", "😾", "😀", "😃", "😄", "😁", "😆", "😅",
    "🤣", "😂", "🙂", "💀", "👻", "👽", "🤖", "💩", "😺", "😸", "😹", "😻", "😼", "🤭",
    "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧", "🤕"
];

/**
 * Gathers an amount of random emojis
 * @param {number} amount 
 * @returns {string[]}
 */
function getEmojis(amount)
{
    // TODO: Randomly generate using unicode values
    // TODO: Also would be nice to include support for server emojis, but not super important
    const result = [];
    for (let idx = 0; idx < amount; idx++)
    {
        result.push(emojis[idx]);
    }

    return result;
}

module.exports = { emojis, getEmojis };