const fs = require('fs');

const Trie = require('regexgen').Trie;
const sequences = require('unicode-tr51/sequences.js');
sequences.sort((a, b) => b.length - a.length);

const trie = new Trie();
trie.addAll(sequences);
const sequencePattern = trie.toString();
console.log(sequencePattern);

for (const file of ['index.js', 'text.js', 'emoji-censor.js']) {
	const input = fs.readFileSync(file, 'utf8');
	let output = input.replace('<% emojiSequence %>', sequencePattern);
	if (file === 'emoji-censor.js') {
		output = output.replace('#\\*0-9\\xA9\\xAE\\u203C\\u2049\\u2122', '\\u203C\\u2049');
	}
	fs.writeFileSync(file, output);
}
