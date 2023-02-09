let canvas_brick = document.querySelector(".main_canvas");
let context = canvas_brick.getContext("2d");

let canvas_brick_2 = document.querySelector(".brick_canvas");
let context_2 = canvas_brick_2.getContext("2d");

var config = {
    canvas      : canvas_brick,
    ctx         : context,
    canvas_2    : canvas_brick_2,
    ctx_2       : context_2,
    brickSize   : 1,
    brickCount  : 9, // 15
    speed       : 4,  // 5 
    ballSize    : 35, // 35
    platformX   : 100,// 100
    platformSize: 150, // 100
    Width       : 500,
    Height      : 500,
    botSetup    : false,
}