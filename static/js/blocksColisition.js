GameBrick.prototype.blocksColisition = function() {
    for (let i = 0; i < this.listBricks.length; i++) {
        let BlockX = this.listBricks[i][0];
        let BlockY = this.listBricks[i][1];

        // left border
        if (this.countX > 0 &&
            this.postX + config.ballSize/2 <= BlockX + this.countX &&
            this.postX + config.ballSize/2 >= BlockX &&
            this.postY - config.ballSize/2 >= BlockY &&
            this.postY - config.ballSize/2 <= BlockY + config.brickSize/2) {
            this.countX = negativeNumber(this.countX);
            this.listBricks.splice(i, 1);
            this.listBricks.splice(i, 1);
            this.NewGame();
            this.drawBricks(); 
			return;
        }

        // right border
        if (this.countX < 0 &&
            this.postX - config.ballSize/2 >= BlockX + config.brickSize - this.countX &&
            this.postX - config.ballSize/2 <= BlockX + config.brickSize &&
            this.postY - config.ballSize/2 >= BlockY &&
            this.postY - config.ballSize/2 <= BlockY + config.brickSize/2) {
            this.countX = negativeNumber(this.countX);
            this.listBricks.splice(i, 1);
            this.listBricks.splice(i, 1);
            this.NewGame();
            this.drawBricks(); 
			return;
        }

        // up side
        if (this.countY >= 0 &&
            this.postX + config.ballSize/2 >= BlockX &&
            this.postX - config.ballSize/2 <= BlockX + config.brickSize &&
            this.postY + config.ballSize/2 >= BlockY &&
            this.postY + config.ballSize/2 <= BlockY + 10) {
            this.countY = negativeNumber(this.countY); 
            this.listBricks.splice(i, 1);
            this.listBricks.splice(i, 1);
            this.NewGame();
            this.drawBricks(); 
			return;
        } 

        // down side
        if (this.countY <= 0 &&
            this.postX + config.ballSize/2 >= BlockX &&
            this.postX - config.ballSize/2 <= BlockX + config.brickSize &&
            this.postY - config.ballSize/2 <= BlockY + config.brickSize) {
            this.countY = Math.abs(this.countY);
            this.listBricks.splice(i, 1);
            this.listBricks.splice(i, 1);
            this.NewGame();
            this.drawBricks();
			return;
        } 
    }
}