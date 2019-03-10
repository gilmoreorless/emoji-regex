const fs = require('fs');

const Trie = require('regexgen').Trie;

const sequences = require('../script/get-sequences.js');

const trie = new Trie();
trie.addAll(sequences);

const emojiSequenceES5 = trie.toString();
console.log(emojiSequenceES5);

const emojiSequenceES2015 = trie.toString('u');
console.log(emojiSequenceES2015);

for (const file of ['index.js', 'text.js', 'es2015/index.js', 'es2015/text.js', 'emoji-censor.js']) {
	const emojiSequence = file.startsWith('es2015/') ? emojiSequenceES2015 : emojiSequenceES5;

	const input = fs.readFileSync(file, 'utf8');
	let output = input.replace('<% emojiSequence %>', emojiSequence) +
		(input.endsWith('\n') ? '' : '\n');
	if (file === 'emoji-censor.js') {
		output = output.replace('#\\*0-9\\xA9\\xAE\\u203C\\u2049\\u2122', '\\u203C\\u2049');
	}

	fs.writeFileSync(file, output);
}
