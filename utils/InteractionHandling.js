const { OfficerApplication } = require('../modals/OfficerApplication.js');
const { NewRoleApplication } = require('../modals/NewRoleApplication.js');

/**
 * General Command Error
 * @param {Interaction<CacheType>} interaction 
 * @param {string} message 
 */
const HandleError = async (interaction, message) =>
{
	if (interaction.replied || interaction.deferred) 
	{
		await interaction.followUp({ content: message, ephemeral: true });
	} 
	else 
	{
		await interaction.reply({ content: message, ephemeral: true });
	}
}

/**
 * Handles interaction functionality
 * @param {Interaction<CacheType>} interaction
 */
const Handler = async (interaction) => 
{
	try 
	{
		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) 
		{
			if (interaction.isStringSelectMenu() || interaction.isModalSubmit())
			{
				switch (interaction.customId)
				{
					case 'role_select': // Open An Officer Application
						const roleSelection = interaction.values[0]
                        if (roleSelection === "other")
						{ 
                            await interaction.showModal(NewRoleApplication.modal); 
                        }
                        else
						{
							OfficerApplication.SetRole(roleSelection);
                            await interaction.showModal(OfficerApplication.modal);
                        }
						break;
					case OfficerApplication.id: // Base Officer Application Submission
						await OfficerApplication.SubmitModal(interaction);
						break;
                    case NewRoleApplication.id: // New Officer Role Application Submission
                        await NewRoleApplication.SubmitModal(interaction);
                        break;
					default:
						return await HandleError(interaction, 'Unable To Process Submission. Please Try Again.');
				}
			}
			else
			{
				console.error(`No command matching ${interaction.commandName} was found.`);
				return await HandleError(interaction, `No command matching ${interaction.commandName} was found.`);
			}
		}

		if (interaction.isChatInputCommand()) 
		{
			await command.execute(interaction);
		} 
	} 
	catch (error) 
	{
		console.error(error);
		return await HandleError(interaction, 'There Was An Error While Executing This Command!');
	}
}

module.exports = Handler;