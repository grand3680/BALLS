class GameBrick {
    constructor() {
        this.deadFlag = false;
        this.Height = config.Height;
        this.Width = config.Width;
        
        this.frames = 0;
        this.live = 5;
        this.listBricks = this.makeBricks();
    }

    start() {
        document.querySelector("button").classList.add("hidden");
        config.canvas.classList.remove("hidden");
        config.canvas_2.classList.remove("hidden");
        this.Live();

        var BALL = new ball();
        BALL.startRender();  
        this.drawBricks();
        this.eventLissener(this.Width);       
    }

    bot() {
        setTimeout(() => {
            if (config.botSetup == true) {
                config.platformX = this.postX - config.platformSize/2;
            }
            this.bot();
        }, 10)
    }
}
