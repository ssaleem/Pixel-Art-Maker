
const formElement =  document.getElementById('sizePicker');
const widthElement = document.getElementById('inputWidth');
const heightElement = document.getElementById('inputHeight');
let width;
let height;

const colorElement = document.getElementById('colorPicker');

const canvasDiv = document.getElementById( 'cDiv');
let canvas;
let ctx;
let cellSide = 20;
const xTranslate = 0.5;
const yTranslate = 0.5;
const transMargin = 1;

// optional offset
const xOffset = 0;
const yOffset = 0;


// event listener for grid size
formElement.addEventListener('submit', function(event) {
  //prevent default behaviour
  event.preventDefault();
  //extract grid dimensions from form input
  width = widthElement.value * cellSide + transMargin;
  height = heightElement.value * cellSide + transMargin;
  console.log(width + ',' + height);
  // delete old canvas if any
  let oldCanvas = document.getElementById('canvas');
  console.log(oldCanvas);
  if(oldCanvas){
    canvasDiv.removeChild(oldCanvas);
  }
  // create new canvas
  canvas = document.createElement("canvas");
  Object.assign(canvas, {
  width: width,
  height: height,
  id: 'canvas'
  });
  //add new canvas to page
  canvasDiv.append(canvas);
  if (canvas.getContext) {
    ctx = canvas.getContext('2d');
    ctx.translate(xTranslate, yTranslate); //to make crisp lines
  }
  makeGrid(height,width);

  //event listener to color cells
  canvas.addEventListener('click', function(event){
    let x = event.clientX - canvas.offsetLeft;     // Get the horizontal coordinate
    let y = event.clientY - canvas.offsetTop;     // Get the vertical coordinate
    // console.log(x + ',' + y);
    ctx.fillStyle = colorElement.value;
    ctx.fillRect(x-x%cellSide + 0.5, y - y%cellSide + 0.5, cellSide - 1, cellSide -1);
  });
});


function makeGrid(height,width){
  if (ctx) {
    // clear canvas not needed since canvas is redrawn everytime
    // ctx.clearRect(0,0,canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(xOffset, yOffset);
    ctx.lineTo(xOffset, height * cellSide);
    ctx.moveTo(xOffset, yOffset);
    ctx.lineTo(width * cellSide, yOffset);

    for(let row = 0; row < height; row++){
    	for(let col = 1; col <= width;col++){
  	    ctx.moveTo(col*cellSide, row*cellSide);
  	    ctx.lineTo(col*cellSide, (row+1)*cellSide);
  	    ctx.lineTo((col-1)*cellSide, (row+1)*cellSide);
    	}
    }
    ctx.stroke();
  }
}
