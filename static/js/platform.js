GameBrick.prototype.eventLissener = function (W) {
    let x = 100;
    let size = config.platformSize;

    document.addEventListener("keydown", function(event) {
        if (event.key == "ArrowLeft" && x - 20 > -1)  x -= 40;
        if (event.key == "ArrowRight" && x + size < W) x += 40;
        config.platformX = x;
    })

    config.canvas.ontouchmove = function(event) {
        console.log(config.platformX);
        config.platformX = event.touches[0].clientX;
    }

    config.canvas.onmousedown = function() {
        config.canvas.onmousemove = function(event) {
            let cordX = event.offsetX;
            x = cordX - size/2;
            config.platformX = x;
        }
        config.canvas.onmouseup = function() {
            config.canvas.onmousemove = null;
        }
    }
}
