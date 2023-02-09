GameBrick.prototype.update = function() {
    this.frames++;

    if (this.frames % config.speed == 0) {      
        this.ballMoved();    
        this.drawPlatform();          
    }

    if (this.live <= 0 && this.deadFlag == false) {
        this.deadFlag = true;
        this.gameOver();
    }

    setTimeout(() => {
        this.update();
    }, 1)
}
