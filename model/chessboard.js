let chessBoard_image = new Image();
chessBoard_image.src = "assets/images/chessboard/chessboard.png";

class ChessBoard {
    constructor(game) {
        this.game = game;
        console.log(game_W);
        this.size = game_H / 8;
        this.x = (game_W - 4 * this.size) / 2;
        this.y = (game_H - 4 * this.size) / 2;
    }

    draw() {
        this.game.context.drawImage(chessBoard_image, this.x, this.y, this.size * 4, this.size * 4);
    }
}