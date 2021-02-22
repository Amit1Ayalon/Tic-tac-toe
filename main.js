const canvasSize = 400;
const cellsNumPerSide = 3;
const pixelsPerCell = canvasSize / cellsNumPerSide;
let turn = 1;
//creating and filling the board with null objects
let board = Array(cellsNumPerSide);
for (let i = 0; i < board.length; i++) {
    board[i] = Array(cellsNumPerSide).fill(0);
}


function setup() {
    createCanvas(canvasSize, canvasSize);
    console.log(board);
}

function draw() {
    background(50);
    createGrid(cellsNumPerSide, canvasSize);
    showBoard();
}

function mousePressed() {
    placePiece(mouseX, mouseY);
}

function placePiece(posX, posY) {
    for (let i = 0; i < cellsNumPerSide; i++) {
        if (posX > pixelsPerCell * i && posX < pixelsPerCell * (i + 1)) {
            for (let j = 0; j < cellsNumPerSide; j++) {
                if (posY > pixelsPerCell * j && posY < pixelsPerCell * (j + 1)) {
                    if (board[j][i] == 0) {
                        board[j][i] = turn;
                        turn *= -1;
                    } else {
                        console.log("Place your piece in an empty position");
                    }
                    break;
                }
            }
            break;
        }
    }
}

function showBoard() {
    for (let i = 0; i < cellsNumPerSide; i++) {
        for (let j = 0; j < cellsNumPerSide; j++) {
            let piece = "";
            if (board[j][i] == 1) {
                piece = "O";
            } else if (board[j][i] == -1) {
                piece = "X";
            }
            textAlign(CENTER);
            textSize(100);
            text(piece, i * pixelsPerCell + pixelsPerCell / 2, j * pixelsPerCell + pixelsPerCell / 2 + textSize() / 3);
        }

    }
}

function createGrid(cellsNum) {
    for (let i = 0; i < cellsNum; i++) {
        for (let j = 0; j < cellsNum; j++) {
            rectMode(CORNER);
            rect(pixelsPerCell * j, pixelsPerCell * i, pixelsPerCell, pixelsPerCell);
        }
    }
}