class ball extends GameBrick {
    constructor() {
        super();
        this.postX = 0;
        this.postY = 200;
        this.countX = 5;
        this.countY = 10;
    }

    startRender() {
        super.bot();
        super.makeBricks();
        super.drawBricks(); 
        super.update();
    }

    gameOver() {
        this.postX = 0;
        this.postY = 200;
        this.countY = -5;
        this.countX = 10;
        super.live = 5;
        super.deadFlag = false;

        super.Live();
        super.listBricks = this.makeBricks();
    }
}