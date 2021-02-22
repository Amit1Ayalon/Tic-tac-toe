const canvasSizeX = 400;
const canvasSizeY = 400;

function setup() {
    createCanvas(canvasSizeX, canvasSizeY);
}

function draw() {
    background(255);
    createGrid(3, 3, canvasSizeX, canvasSizeY);
}

function createGrid(horizontalCellsNum, verticalCellsNum, gridSizeX, gridSizeY) {
    const pixelsPerCellX = gridSizeX / horizontalCellsNum;
    const pixelsPerCellY = gridSizeY / verticalCellsNum;

    for (let i = 0; i < verticalCellsNum; i++) {
        for (let j = 0; j < verticalCellsNum; j++) {
            rectMode(CORNER);
            rect(pixelsPerCellX * j, pixelsPerCellY * i, pixelsPerCellX, pixelsPerCellY);
        }
    }
}