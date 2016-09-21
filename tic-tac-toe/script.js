// Code goes here

// assign the players
var player,
  computer,
  moves = 0,
  currentPlayer = "X",
  playerScore = 0,
  computerScore = 0,
  gameOver = false;

// TODO: sets the player if button is clicked


// enters player letter, toggles to next player
$('td').click(function() {
  if ($(this).text() === '') {
    $(this).text(currentPlayer);
    moves++;
    checkWin();
    togglePlayer();
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

// Check for a win
function checkWin() {
  switch (true) {
    case $('#c1r1').text() === currentPlayer && $('#c2r1').text() === currentPlayer && $('#c3r1').text() === currentPlayer:
      DrawLine('#c1r1', '#c2r1', '#c3r1');
      gameOver = true;
      setTimeout(updateScore, 1000);
      break;
    case $('#c1r2').text() === currentPlayer && $('#c2r2').text() === currentPlayer && $('#c3r2').text() === currentPlayer:
      DrawLine('#c1r2', '#c2r2', '#c3r2');
      gameOver = true;
      setTimeout(updateScore, 1000);
      break;
    case $('#c1r3').text() === currentPlayer && $('#c2r3').text() === currentPlayer && $('#c3r3').text() === currentPlayer:
      DrawLine('#c1r3', '#c2r3', '#c3r3');
      gameOver = true;
      setTimeout(updateScore, 1000);
      break;
    case $('#c1r1').text() === currentPlayer && $('#c1r2').text() === currentPlayer && $('#c1r3').text() === currentPlayer:
      DrawLine('#c1r1', '#c1r2', '#c1r3');
      gameOver = true;
      setTimeout(updateScore, 1000);
      break;
    case $('#c2r1').text() === currentPlayer && $('#c2r2').text() === currentPlayer && $('#c2r3').text() === currentPlayer:
      DrawLine('#c2r1', '#c2r2', '#c2r3');
      gameOver = true;
      setTimeout(updateScore, 1000);
      break;
    case $('#c3r1').text() === currentPlayer && $('#c3r2').text() === currentPlayer && $('#c3r3').text() === currentPlayer:
      DrawLine('#c3r1', '#c3r2', '#c3r3');
      gameOver = true;
      setTimeout(updateScore, 1000);
      break;
    case $('#c1r1').text() === currentPlayer && $('#c2r2').text() === currentPlayer && $('#c3r3').text() === currentPlayer:
      DrawLine('#c1r1', '#c2r2', '#c3r3');
      gameOver = true;
      setTimeout(updateScore, 1000);
      break;
    case $('#c3r1').text() === currentPlayer && $('#c2r2').text() === currentPlayer && $('#c1r3').text() === currentPlayer:
      DrawLine('#c3r1', '#c2r2', '#c1r3');
      gameOver = true;
      setTimeout(updateScore, 1000);
      break;
    default:
      checkDraw();
  }
}

// TODO: update score function
// function updateScore() {
//   if (gameOver === true) {
    
//   }
// }

// draw line from player win
function DrawLine(pos1, pos2, pos3) {
  var $pos1 = $(pos1);
  var $pos2 = $(pos2);
  var $pos3 = $(pos3);
  $pos1.addClass('playWin');
  $pos2.addClass('playWin');
  $pos3.addClass('playWin');

  togglePlayer(currentPlayer);
};

// TODO: Check for draw
function checkDraw() {
  if (moves === 9) {
    setTimeout(reset, 1000);
    
    //TODO: popup stating draw
  }
};

// TODO: reset function
// clear board

// reset game


// other variable
// var currentPlayer = 'X',

//   playerScore = 0,
//   computerScore = 0,
//   cellNum,
//   cellPosition = [];

// // sets the player if button is clicked
// var assignment = {
//   xButton: function() {
//     player = 'X';
//     computer = 'O';
//   },
//   oButton: function() {
//     player = 'O';
//     computer = 'X';
//   }
// };


// function chooseSquare {

// }

// function chooseSpace() {
//   for (i = 0; i < spaces.length; i++) {
//   if () 
//   }

// }



// // Declare winner

// // Increase score after win
// function updateScore() {
//   if (playerWin === true) {
//     playerScore++;
//   } else {
//     computerScore++;
//   }
//   Clear();
// }

// // Clear board after win
// function clear() {
// clear board

// allow board to be clickable again

//clear winner line

//reset moves

//reset gameover

// reset player to chosen one
//}

//Mark position clicked
