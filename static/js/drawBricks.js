GameBrick.prototype.drawBricks = function() {
    config.ctx_2.clearRect(0, 0, this.Width, this.Height);
    for (let i = 0; i < this.listBricks.length; i++) {
        let x = this.listBricks[i][0];
        let y = this.listBricks[i][1];
        let size = config.brickSize;

        config.ctx_2.beginPath();
        config.ctx_2.rect(x, y, size, size/2);

        config.ctx_2.fillStyle = "#7996DD";
        config.ctx_2.strokeStyle = "#6981E7";
        config.ctx_2.fill();
        config.ctx_2.stroke();
        config.ctx_2.closePath();
    }
}

