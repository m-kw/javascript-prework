{
  let playerWins = 0;
  let computerWins = 0;

  const playGame = function(argPlayerMove) {
    clearMessages();

    //Functions

    const getMoveName = function(argMoveId) {
      if (argMoveId === 1) {
        return 'kamień';
      } else if (argMoveId === 2) {
        return 'papier';
      } else if (argMoveId === 3) {
        return 'nożyce';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      }
    }

    const displayResult = function(argComputerMove, argPlayerMove) {
      console.log('moves: ', argComputerMove, argPlayerMove);
      console.log('wygrane gracza: ', playerWins, 'wygrane komputera: ' + computerWins);
      if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
        printMessage('Ty wygrywasz!');
        ++playerWins;
      } else if (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
        printMessage('Ty wygrywasz!');
        ++playerWins;
      } else if (argComputerMove === 'nożyce' &&argPlayerMove === 'kamień') {
        printMessage('Ty wygrywasz!');
        ++playerWins;
      } else if (argComputerMove === argPlayerMove) {
        printMessage('Remis!');
      } else if (argPlayerMove === 'nieznany ruch') {
        printMessage('Wybrałeś zły ruch.');
      } else {
        printMessage('Przegrałeś!!!');
        ++computerWins;
      }
    }

    // Computer move
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    // Player move
    const playerInput = argPlayerMove;
    const playerMove = getMoveName(playerInput);
    console.log('Gracz wpisał: ' + playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    // Resluts

    displayResult(computerMove, playerMove);
    printResult(playerWins, computerWins);

  }

  document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
  });
}
