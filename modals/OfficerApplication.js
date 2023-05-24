const { adminNotificationId } = require('../config.json');
const { Embed } = require('./Embed.js');
const { 
	ModalBuilder, 
	TextInputBuilder, 
	TextInputStyle, 
	ActionRowBuilder
} = require('discord.js');

const customId = 'officer_application_modal';
const applicationModal = new ModalBuilder()
    .setTitle("GDA Officer Application")
    .setCustomId(customId);

const nameId = 'name_input';
const nameInput = new TextInputBuilder()
    .setLabel("What is your name?")
    .setCustomId('name_input')
    .setPlaceholder('Enter your full name...')
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
    new ActionRowBuilder().addComponents(reasonInput)
);

var role = 'ERROR';
const SetRole = (newRole) => { role = newRole; }

/**
 * Handle the submission of the officer application.
 * @param {Interaction<CacheType>} interaction 
 */
const SubmitModal = async (interaction) =>
{
    const name = interaction.fields.getTextInputValue(nameId);
    const reason = interaction.fields.getTextInputValue(reasonId);

    const messageEmbed = Embed("New Position Request", 0x841617, 
    "Someone is applying to fill a currently open officer role.", 
    [
        { name: 'Full Name:', value: name },
        { name: 'Position:', value: role },
        { name: 'Reasoning:', value: reason }
    ]);

    await interaction.client.channels.cache.get(adminNotificationId).send({
        content: "@everyone",
        embeds: [messageEmbed]
    });
    await interaction.reply("Your Application Has Been Successfully Received!");
}

module.exports = {
    OfficerApplication: {
        modal: applicationModal,
        id: customId,
        SetRole: SetRole,
        SubmitModal: SubmitModal
    }
};