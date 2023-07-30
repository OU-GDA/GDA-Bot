const fs = require('node:fs');
const path = require('node:path');
const DB = require('./src/utils/database');
const {
    REST,
    Routes,
    Client,
    Events,
    GatewayIntentBits,
    Collection
} = require('discord.js');

module.exports = async () => {
    ///  SETUP  ///////////////////////////////////////////////////////////////////

    // Configure environment variables
    require('dotenv').config();

    // Create a new client instance
    const client = new Client({
        intents: [GatewayIntentBits.Guilds]
    });

    // Display a success message once logged in
    client.once(Events.ClientReady, (clientParam) => {
        console.log(`Client Logged In As: [${clientParam.user.tag}]`);
    });

    DB.init();

    ///  COMMANDS  ////////////////////////////////////////////////////////////////

    // Create a new empty list of commands
    const commands = [];
    client.commands = new Collection();

    // Gather all command files
    const foldersPath = path.join(__dirname, 'src/commands');
    const commandFolders = fs.readdirSync(foldersPath);

    // Gather all commands
    for (const folder of commandFolders)
    {
        const commandPath = path.join(foldersPath, folder);
        const commandFiles = fs.readdirSync(commandPath).filter((file) => file.endsWith('.js'));

        for (const file of commandFiles)
        {
            const filePath = path.join(commandPath, file);
            const command = require(filePath);

            if ('data' in command && 'execute' in command)
            {
                commands.push(command.data.toJSON());
                client.commands.set(command.data.name, command);
            }
            else
            {
                console.log(`[WARNING] Command at path [${filePath}] is missing data or execute property.`);
            }
        }
    }

    // Set the bots interaction protocol
    const handleInteraction = require('./src/utils/interactionHandler');
    client.on(Events.InteractionCreate, handleInteraction);

    // Create a new instance of the REST module
    const rest = new REST().setToken(process.env.TOKEN);

    /**
     * Registers bot commands asynchronously 
     */
    async function registerCommands()
    {
        try
        {
            console.log(`Registering ${commands.length} Slash Commands.`);

            const data = await rest.put(
                Routes.applicationCommands(process.env.APP_ID),
                {
                    body: commands
                }
            );

            console.log(`Successfully Registered ${data.length} Slash Commands.`)
        }
        catch (error)
        {
            console.error(error);
        }
    }

    // Register the gathered commands
    registerCommands().then(() => {
        // Log in to Discord
        client.login(process.env.TOKEN);
    });
}