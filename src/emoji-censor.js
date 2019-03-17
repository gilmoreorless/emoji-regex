module.exports = () => {
	// https://mathiasbynens.be/notes/es-unicode-property-escapes#emoji
	return /(?:<% emojiSequence %>|\p{Emoji_Presentation}|\p{Emoji}|\p{Emoji_Modifier_Base})\uFE0F?/gu;
};
