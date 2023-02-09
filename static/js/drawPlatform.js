GameBrick.prototype.drawPlatform = function() {
    config.ctx.beginPath();
    config.ctx.rect(config.platformX, this.Height - 100, config.platformSize, config.platformSize/4);
    config.ctx.fillStyle = "black";
    config.ctx.fill();
    config.ctx.stroke();
}