$(document).ready(function() {

// assign the players
var player,
  computer,
  moves = 0,
  currentPlayer = "X",
  playerScore = 0,
  computerScore = 0;

// TODO: sets the player if button is clicked


// enters player letter, toggles to next player
$('td').click(function() {
  if ($(this).text() === '') {
    $(this).text(currentPlayer);
    moves++;
    togglePlayer();
    checkWin();
  } else {
    alert('space taken!');
  }
});

// toggles X and O between turns
function togglePlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

var winningCombinations = [
  [c1r1, c2r1, c3r1],
  [c1r2, c2r2, c3r2],
  [c1r3, c2r3, c3r3],
  [c1r1, c1r2, c1r3],
  [c2r1, c2r2, c2r3],
  [c3r1, c3r2, c3r3],
  [c1r1, c2r2, c3r3],
  [c3r1, c2r2, c1r3],
];

// Check for a win
function checkWin() {
  for (var i = 0; i < winningCombinations.length; i++) {
    // for (var j = 0; j < winningCombinations[i].length; j++) {
    console.log(i);
    // }
  }
}

});
