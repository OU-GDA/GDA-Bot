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

applicationModal.addComponents(
    new ActionRowBuilder().addComponents(nameInput)
);

module.exports = {
    OfficerApplication: applicationModal
};