GameBrick.prototype.drawBall = function() {
    if (this.countX > 8 || this.countX < -8) {
        config.ctx.beginPath();
        config.ctx.arc(this.postX + -this.countX, this.postY + -this.countY, config.ballSize/2, 0, Math.PI*2,true);
        config.ctx.fillStyle = "rgba(100,150,185,0.8)";
        config.ctx.strokeStyle = "rgba(100,150,185,0.8)";
        config.ctx.fill();
        config.ctx.stroke();
    }    

    config.ctx.beginPath();
    config.ctx.arc(this.postX, this.postY, config.ballSize/2, 0, Math.PI*2,true);
    config.ctx.fillStyle = "black";
    config.ctx.strokeStyle = "black";
    config.ctx.fill();
    config.ctx.stroke();
}