GameBrick.prototype.borders = function() {
    let PX = this.postX, PY = this.postY, CX = this.countX, CY = this.countY;
    
    if (PX - config.ballSize / 2 <= 0) CX = Math.abs(CX); // left border
    if (PX + config.ballSize / 2 >= this.Width) CX = negativeNumber(CX) ; // right border
    if (PY - config.ballSize / 2 <= -1) CY = Math.abs(CY);// up border

    // down border
    if (PY + config.ballSize / 2 >= this.Height) {
        PX = this.Width/2, 
        PY = 200;
        CY = 5;
        CX = 10;
        this.live -= 1;
        this.Live();
    } 

    this.countX = CX, this.countY = CY, this.postX = PX, this.postY = PY;
}