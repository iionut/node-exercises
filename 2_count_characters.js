var stdin = process.stdin,
	stdout = process.stdout;

stdin.resume();
stdin.setEncoding('utf8');

stdout.write('What is the input string? ');
stdin.on('data', function (text) {
	text = text.toString().trim();
	console.log(text + ' has ' + text.length + ' characters');
	process.exit();
});