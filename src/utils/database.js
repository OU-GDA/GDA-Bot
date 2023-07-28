const fs = require('node:fs');

/**
 * Initialize the bot's data files
 */
function init()
{
    const dataPath = 'src/data.json';
    if (!fs.existsSync(dataPath)) { fs.appendFileSync(dataPath, '{}'); }
}

/**
 * Set a key's value in the bot's data
 * @param {string} key 
 * @param {any} value 
 */
function set(key, value)
{

}

/**
 * Get the value associated with a given key
 * @param {string} key 
 * @returns {any}
 */
function get(key)
{
    const data = require('../data.json');
    return data[key];
}

// We gather the functions here to act as a pseudo namespace
const DB = {
    init,
    set,
    get
};

module.exports = DB;