var stdin = process.stdin,
	stdout = process.stdout;

stdin.resume();
stdin.setEncoding('utf8');

stdout.write('What is your name? ');
process.stdin.on('data', function (text) {
	console.log('Hello, ' + text.toString().trim() + ', nice to meet you!');
	process.exit();
});