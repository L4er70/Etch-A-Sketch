let sketchContainer = document.querySelector('.sketch');
sketchContainer.style.backgroundColor = 'white';
let number = prompt('enter a number between 1-100');

let gridHeight = sketchContainer.clientHeight;
let gridWidth = sketchContainer.clientWidth;
let gridSpace = 0;
let sqaresSpace = 0;
let numberOfSquares = 0;

let height = gridHeight/number;
let width = gridWidth/number;
let squareSize = gridHeight/number;

function getGridSpace(height,width){
    let space=height*width;
    gridSpace=space;

    return space;

}

console.log('the whole grid space is '+getGridSpace(gridHeight,gridWidth));

function getSqaureSpace(height,width){
    let space =height*width;
    sqaresSpace=space;
    return space;


}

console.log('the squares space is:'+getSqaureSpace(height,width));

function getNumberOfSquares(grid,square){
    let number = grid/square;
    numberOfSquares=number;
    return number;

}

console.log('number of squares to be produce is: ' + getNumberOfSquares(gridSpace,sqaresSpace));
console.log(numberOfSquares);




function produceSqaures(number) {
    for(let i=0;i<number;i++){
        let divSquare =document.createElement('div');
        divSquare.classList.add('Square');
       // divSquare.style.flex = '1 1 0';
        divSquare.style.width= `${width}px`;
        divSquare.style.height= `${height}px`;
        divSquare.style.backgroundColor = 'red';
      //  divSquare.style.margin=0;
        //divSquare.style.padding=0;
        divSquare.style.border= 'solid black';
        
       // divSquare.textContent= '';
        
        

        sketchContainer.appendChild(divSquare);
    }

    
}
produceSqaures(numberOfSquares);

