GameBrick.prototype.NewGame = function() {
    if (this.listBricks.length <= 2) {
        setTimeout(() => {
            this.listBricks = this.makeBricks();      
        }, 200)

    }
}
