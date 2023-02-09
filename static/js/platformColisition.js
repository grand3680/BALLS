GameBrick.prototype.platformColisition = function() {
    let PlatSize = config.platformSize;

    // platform Colisition
    if (this.postY + config.ballSize/2 >= this.Height - 100 &&
        this.postY + config.ballSize/2 <= this.Height - 100 + config.platformSize/4 &&
        this.postX + config.ballSize/2 >= config.platformX &&
        this.postX + config.ballSize/2 <= config.platformX + PlatSize) {
        // left side platform
        if (this.postX >= config.platformX &&
            this.postX <= config.platformX + 50) {
            this.countY = negativeNumber(this.countY);  
            this.countX = this.countX - 2.5;  
        }

        // right side platform
        if (this.postX >= config.platformX + PlatSize - 50 &&
            this.postX <= config.platformX + PlatSize) {
            this.countY = negativeNumber(this.countY);  
            this.countX = this.countX + 2.5;  
        }      

        
        // center side platform
        if (this.postX + config.ballSize / 2 > config.platformX + 50  &&
            this.postX + config.ballSize / 2 < config.platformX + PlatSize - 50) {
            this.countY = negativeNumber(this.countY);        
        }
        
    }
}