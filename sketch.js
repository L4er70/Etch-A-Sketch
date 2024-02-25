let sketchContainer = document.querySelector('.sketch');
let buttonContainer =document.querySelector('.button-container')
let resizeButton = document.querySelector('.resize');
let resetButton = document.querySelector('.reset');
let blackButton =document.querySelector('.black');
let rgbButton = document.querySelector('.rgb');
sketchContainer.style.backgroundColor = 'white';
let number = prompt('enter a number between 1-100');
let gridHeight = sketchContainer.clientHeight;
let gridWidth = sketchContainer.clientWidth;
let gridSpace = 0;
let sqaresSpace = 0;
let numberOfSquares = 0;
let height = gridHeight/number;
let width = gridWidth/number;
let resetNumber = 1;








resizeButton.addEventListener('click', function(){
    let number = prompt('enter a size');
    produceSqaures(number);

})


//rgb paint
rgbButton.addEventListener('click',function(){
    let cells = sketchContainer.children;
    for(let cell of cells){
        cell.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor= 'rgb(122,45,67)';
        })
    }
})


//black paint
blackButton.addEventListener('click',function(){
    let cells=sketchContainer.children;
    for(let cell of cells){
        cell.addEventListener('mouseover',function(event){
            event.target.style.backgroundColor = 'black';
        })
    }

})



//reset button listener
resetButton.addEventListener('click', reset);
//reset button handeler
function reset(){
    let cells = sketchContainer.children;
    for(let cell of cells){
        cell.style.backgroundColor = 'white';
        
    } 
    
}

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
        divSquare.style.width= `${width}px`;
        divSquare.style.height= `${height}px`;
        divSquare.style.backgroundColor = 'white';
        //divSquare.style.border= 'solid black';
        sketchContainer.appendChild(divSquare);
    }


    
}
produceSqaures(numberOfSquares);

