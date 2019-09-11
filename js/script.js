{
let playerWins = 0;
let computerWins = 0;

function playGame(argPlayerMove) {
  clearMessages();
  const playerInput = argPlayerMove;

  function getMoveName(argMoveId) {
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

  function displayResult(argComputerMove, argPlayerMove) {
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

  /* if(randomNumber == 1){
    computerMove = 'kamień';
  } else if(randomNumber == 2){
    computerMove = 'papier';
  } else if(randomNumber == 3){
    computerMove = 'nożyce';
  } */

  printMessage('Mój ruch to: ' + computerMove);

  // Player move
  //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  const playerMove = getMoveName(playerInput);

  /* if(playerInput == '1'){
    playerMove = 'kamień';
  } else if(playerInput == '2'){
    playerMove = 'papier';
  } else if(playerInput == '3'){
    playerMove = 'nożyce';
  } */

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
