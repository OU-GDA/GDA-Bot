const start = require('../../../index');

const handler = async (_event) => await start();

module.exports = { handler }
