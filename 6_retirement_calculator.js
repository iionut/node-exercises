var stdin = process.stdin,
	stdout = process.stdout
	currentAge = null,
	retiringAge = null,
	firstQ = 'What is your current age?',
	secondQ = 'What age would you like to retire?'
	;

stdin.resume();
stdin.setEncoding('utf8');

showQuestion();

function showQuestion() {
	if (null === currentAge) {
		stdout.write(firstQ);
	} else if (null === retiringAge) {
		stdout.write(secondQ);
	} else {
		showResult();
	}
}

function showResult() {
	var year = parseInt(new Date().getFullYear(), 10),
		remainingYears = retiringAge - currentAge;

	console.log('You have ' + remainingYears + ' years left until you can retire.');
	console.log("It's " + year + ", so you can retire in " + (year+remainingYears));
	process.exit();
}

stdin.on('data', function (input) {
	input = parseInt(input.toString().trim(), 10);

	if (null === currentAge) {
		currentAge = input;
	} else {
		retiringAge = input;
	}

	showQuestion();
});