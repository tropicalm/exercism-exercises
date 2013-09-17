function Bob() { }

Bob.prototype.hey = function(msg) {
	if(isEmpty(msg)) {
		return 'Fine. Be that way!';
	}
	else if(isYell(msg)) {
		return 'Woah, chill out!';
	}
	else if(isQuestion(msg)) {
		return 'Sure.';
	}

	return 'Whatever.';
}

function isEmpty(msg) {
	return msg === '';
}

function isYell(msg) {
	return msg.toUpperCase() === msg;
}

function isQuestion(msg) {
	var lastChar = msg[msg.length - 1];
	return lastChar === '?';
}

module.exports = Bob;