GameBrick.prototype.makeBricks = function() {
    let listBrick = [];
    let brickSize = this.Width / config.brickCount;
    config.brickSize = brickSize;    
    let w = this.Width / brickSize;
    let h = Math.floor(config.brickCount / 3);

    for(let i = 0; i < h; i++) {
        for(let j = 0; j < w; j++) {
            listBrick.push([(j * brickSize), (i * brickSize)]);
        }
    }

    for (let i = 0; i < listBrick.length; i++) {
        if(i % 2 == 0) {
            listBrick[i][0] = listBrick[i][0] + brickSize/2;
            listBrick[i][1] = listBrick[i][1] + 5;
        }
        if(i % 2 != 0) {
            listBrick[i][0] = listBrick[i][0] - brickSize/2;
            listBrick[i][1] = listBrick[i][1] + 5;
        }
    }

    return listBrick;
}
