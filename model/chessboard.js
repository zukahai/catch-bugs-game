let chessBoard_image = new Image();
chessBoard_image.src = "assets/images/chessboard/chessboard.png";

class ChessBoard {
    constructor(game) {
        this.game = game;
        console.log(game_W);
    }

    draw() {
        this.game.context.drawImage(chessBoard_image, 600, 300, 300, 300);
    }
}