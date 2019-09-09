function printMessage(msg) {
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

function printResult(playerWins, computerWins) {
	var div = document.createElement('div');
	document.getElementById('result').innerHTML = (playerWins + '  -  ' + computerWins);
}
