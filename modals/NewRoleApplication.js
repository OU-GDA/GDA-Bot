const { 
	ModalBuilder, 
	TextInputBuilder, 
	TextInputStyle, 
	ActionRowBuilder
} = require('discord.js');

const applicationModal = new ModalBuilder()
    .setTitle("GDA Officer Application")
    .setCustomId('application_modal');

const nameInput = new TextInputBuilder()
    .setLabel("What is your name?")
    .setCustomId('name_input')
    .setPlaceholder('Enter your full name...')
    .setMaxLength(32)
    .setRequired(true)
    .setStyle(TextInputStyle.Short);

const roleInput = new TextInputBuilder()
    .setLabel("What role would you like to create?")
    .setCustomId('new_role_input')
    .setPlaceholder('Enter your proposed role...')
    .setMaxLength(32)
    .setRequired(true)
    .setStyle(TextInputStyle.Short);

const reasonInput = new TextInputBuilder()
    .setLabel("Why do you want to fill this role?")
    .setCustomId('reason_input')
    .setPlaceholder('Enter your reasoning...')
    .setMaxLength(200)
    .setRequired(true)
    .setStyle(TextInputStyle.Paragraph);

applicationModal.addComponents(
    new ActionRowBuilder().addComponents(nameInput),
    new ActionRowBuilder().addComponents(roleInput),
    new ActionRowBuilder().addComponents(reasonInput)
);

module.exports = {
    OfficerApplication: applicationModal
};