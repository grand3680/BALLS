GameBrick.prototype.ballMoved = function() {
    config.ctx.clearRect(0, 0, this.Width, this.Height);  

    if (this.countX >= 10) this.countX = this.countX - 0.15;
    if (this.countX <= -10) this.countX = this.countX + 0.15;
    this.postX += this.countX;
    this.postY += this.countY;

    this.drawPlatform();  
    this.drawBricks();      
    this.drawBall();
    this.borders();
    this.blocksColisition();   
    this.platformColisition(); 
}

function negativeNumber(Y) {
    if (Math.sign(Y) == 0) return Y;
    if (Math.sign(Y) == -1) return Y;  
    else return -Y;       
}