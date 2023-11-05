let isDrowing = false;
let x = 0;
let y = 0;

const playArea = document.getElementById("playArea");
//the “2d” is passed for drawing an image on a two-dimensional by using the method getContext()
const context = playArea.getContext("2d");
const clearBtn = document.getElementById("clearBtn");

//on left mouse butten press => get the x and y position from the event
playArea.addEventListener("pointerdown", (e) => {
    x = e.offsetX;
    y = e.offsetY;
    isDrowing = true;
});

//keep track the possition of x and y when the mouse is moving
window.addEventListener("pointermove", (e) => {
    if (isDrowing) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    };
});

//when stop pressing on left mouse button the x and y possition = to 0 and stop drowing
window.addEventListener("pointerup", (e) => {
    if (isDrowing) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrowing = false;
    };
});


//context paramers like ling witdh, color, movment and so...
function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 4;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}

//delete the drowing, x, y => any position in the canvas, and everithing in the canvas width/height
document.getElementById("clearBtn").addEventListener("click", function () {
    context.clearRect(x, y, playArea.width, playArea.height);
});
