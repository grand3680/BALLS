function BrickGame() {
    let size_w = 600; // window.innerWidth
    let size_h = 800; 
    document.querySelector(".brick_canvas").width = size_w;    
    document.querySelector(".brick_canvas").height = size_h;   

    document.querySelector(".main_canvas").width = size_w;    
    document.querySelector(".main_canvas").height = size_h;  
    
    config.Height = size_h;
    config.Width = size_w;
    var game = new GameBrick();
    game.start();
    console.log(game);
}