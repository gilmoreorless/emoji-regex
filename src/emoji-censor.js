module.exports = () => {
	// https://mths.be/emoji
	return /(?:<% emojiSequence %>|\p{Emoji_Presentation}|\p{Emoji}|\p{Emoji_Modifier_Base})\uFE0F?/gu;
};
