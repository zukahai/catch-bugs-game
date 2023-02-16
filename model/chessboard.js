let chessBoard_image = new Image();
chessBoard_image.src = "assets/images/chessboard/chessboard.png";

let chessBoard_bg_image = new Image();
chessBoard_bg_image.src = "assets/images/chessboard/chessboard_bg.png";


class ChessBoard {
    constructor(game) {
        this.game = game;
        console.log(game_W);
        this.size = game_H / 8;
        this.x = (game_W - 4 * this.size) / 2;
        this.y = (game_H - 4 * this.size) / 2;
    }

    draw() {
        let size_2 = this.size / 2;
        this.game.context.drawImage(chessBoard_image, this.x, this.y, this.size * 4, this.size * 4);
        this.game.context.drawImage(chessBoard_bg_image, this.x - size_2 / 2, this.y - size_2 / 2, this.size * 4 + size_2, this.size * 4 + size_2);
    }
}