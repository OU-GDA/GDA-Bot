const { SlashCommandBuilder,
    ModalBuilder,
    ActionRowBuilder,
    TextInputBuilder,
    TextInputStyle
} = require('discord.js');

const applicationModal = new ModalBuilder()
    .setTitle("GDA Officer Application")
    .setCustomId("officer_modal");

const nameInput = new TextInputBuilder()
    .setLabel("What is your name?")
    .setPlaceholder("Enter your name...")
    .setCustomId('name_input')
    .setMaxLength(32)
    .setStyle(TextInputStyle.Short);

const nameAction = new ActionRowBuilder().addComponents(nameInput);

applicationModal.addComponents(nameAction);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('apply')
		.setDescription('Apply to join the GDA officer team!'),
	async execute(interaction) {
        await interaction.showModal(applicationModal);
	},
};