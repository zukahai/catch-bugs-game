let chessBoard_image = new Image();
chessBoard_image.src = "assets/images/chessboards/chessboard.png";

let chessBoard_bg_image = new Image();
chessBoard_bg_image.src = "assets/images/chessboards/chessboard_bg.png";

N = 4
N_bug = 6


class ChessBoard {
    constructor(game) {
        this.game = game;
        this.bugs = [];
        this.size = game_H / 8;

        this.x = (game_W - 4 * this.size) / 2;
        this.y = (game_H - 4 * this.size) / 2;

        this.initMatrix();
        this.initBug();
    }

    initMatrix() {
        this.matrix = [
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 1]
        ];
    }

    initBug() {
        let number = [1, 2, 3, 4, 5, 6, 7, 8];
        for (let i = 0; i < 20; i++) {
            let index1 = Math.ceil((Math.random() * 100000)) % number.length
            let index2 = Math.ceil((Math.random() * 100000)) % number.length
            let temp = number[index1];
            number[index1] = number[index2];
            number[index2] = temp;
        }
        let count = 0;
        for (let i = 0; i < N; i++)
            for (let j = 0; j < N; j++)
                if (this.matrix[i][j] == 1)
                    this.bugs[count++] = new Bug(this.game, this.x + this.size * j, this.y + this.size * i, this.size, number[count]);

    }

    draw() {
        let size_2 = this.size / 2;
        this.game.context.drawImage(chessBoard_image, this.x, this.y, this.size * 4, this.size * 4);
        for (let i = 0; i < this.bugs.length; i++)
            this.bugs[i].draw();
        this.game.context.drawImage(chessBoard_bg_image, this.x - size_2 / 2, this.y - size_2 / 2, this.size * 4 + size_2, this.size * 4 + size_2);
    }
}