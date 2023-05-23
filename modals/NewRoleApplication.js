const { adminNotificationId } = require('../config.json');
const { Embed } = require('./Embed.js');
const { 
	ModalBuilder, 
	TextInputBuilder, 
	TextInputStyle, 
	ActionRowBuilder
} = require('discord.js');

const customId = 'new_role_application'
const applicationModal = new ModalBuilder()
    .setTitle("GDA Officer Application")
    .setCustomId(customId);

const nameId = 'name_input';
const nameInput = new TextInputBuilder()
    .setLabel("What is your name?")
    .setCustomId(nameId)
    .setPlaceholder('Enter your full name...')
    .setMaxLength(32)
    .setRequired(true)
    .setStyle(TextInputStyle.Short);

const roleId = 'new_role_input';
const roleInput = new TextInputBuilder()
    .setLabel("What role would you like to create?")
    .setCustomId(roleId)
    .setPlaceholder('Enter your proposed role...')
    .setMaxLength(32)
    .setRequired(true)
    .setStyle(TextInputStyle.Short);

const reasonId = 'reason_input';
const reasonInput = new TextInputBuilder()
    .setLabel("Why do you want to fill this role?")
    .setCustomId(reasonId)
    .setPlaceholder('Enter your reasoning...')
    .setMaxLength(200)
    .setRequired(true)
    .setStyle(TextInputStyle.Paragraph);

applicationModal.addComponents(
    new ActionRowBuilder().addComponents(nameInput),
    new ActionRowBuilder().addComponents(roleInput),
    new ActionRowBuilder().addComponents(reasonInput)
);

/**
 * Handle the submission of the new role application.
 * @param {Interaction<CacheType>} interaction 
 */
const SubmitModal = async (interaction) =>
{
    const name = interaction.fields.getTextInputValue(nameId);
    const role = interaction.fields.getTextInputValue(roleId);
    const reason = interaction.fields.getTextInputValue(reasonId);

    const messageEmbed = Embed("New Position Request", 0x841617, 
    "Someone is requesting to fill a currently non-existant officer role.", 
    [
        { name: 'Full Name:', value: name },
        { name: 'New Position:', value: role },
        { name: 'Reasoning:', value: reason }
    ]);

    await interaction.client.channels.cache.get(adminNotificationId).send({
        embeds: [messageEmbed]
    });
    await interaction.reply("Your Application Has Been Successfully Received!");
}

module.exports = {
    NewRoleApplication: {
        modal: applicationModal,
        id: customId,
        SubmitModal: SubmitModal
    }
};