// code your solution here
// we need to write a function
//receive an array of objects as arguement
// using dot notation .find()
// in bracket notation means objects

function superbowlWin(array) {
    let winningYear = array.find((array) => array.result === "W");
    if (winningYear) {
      return winningYear.year;
    }
  }
  superbowlWin(record);