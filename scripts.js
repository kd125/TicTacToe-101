
let board = [["","",""],["","",""],["","",""]];


// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = "X";


const handleClick = (element) => {
  // this uses the "log" method on the "console" to log out the element's id so we can see it with our human eyes
  console.log(`The element you clicked on has an id:  ${element.id}`);


  if (!document.getElementById(element.id).innerHTML) {
    addMarker(element.id);
  }
};

// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {
  console.log(`*** The current marker is:  ${currentMarker}. ***`);
  console.log(
    `Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`
  );
  console.log("DOCUMENT", document.getElementById(id));

  const clickedElement = document.getElementById(id);
  clickedElement.innerHTML = currentMarker;

  const row = parseInt(clickedElement.id.charAt(0));
  const column = parseInt(clickedElement.id.charAt(2));

  board[row][column] = currentMarker;
  console.log(board);
  checkForWin();
};

const changeMarker = () => {
  currentMarker === "X" ? (currentMarker = "O") : (currentMarker = "X");
};

const resetBoard = () => {
  board = [["","",""],["","",""],["","",""]];
  const squares = document.getElementsByTagName("TD")
  

  for (i = 0; i < squares.length; i++) {
    // will log out the id of each square as it loops over them.
    console.log(squares[i].id);

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null;
  }
};



const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`)
  } else {
    changeMarker()
  }
}

const horizontalWin = () => {
  if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
  || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
  || (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X")
  || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
  || (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X")
  || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O"))
  {
    window.alert("Congrats! You Won!")
  }
  else{}

}

const verticalWin = () => {
  if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
  || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
  || (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X")
  || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
  || (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X")
  || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O"))
  {
    window.alert("Congrats! You Won!")
  }
}

const diagonalWin = () => {
  if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
  || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
  || (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")
  || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")  
  || (board[2][2] == "X" && board[1][1] == "X" && board[0][2] == "X")
  || (board[2][2] == "O" && board[1][1] == "O" && board[0][2] == "O"))
  {
    window.alert("Congrats! You Won!")
  }
}
