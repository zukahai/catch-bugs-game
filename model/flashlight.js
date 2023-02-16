class Flashlight {
    constructor(game, m, n, size, index_flashlight) {
        this.game = game;
        this.m = m;
        this.n = n;

        let x_chessboard = (game_W - 4 * size) / 2;
        this.x = (index_flashlight % 2 == 0) ? x_chessboard - 3 * size : x_chessboard + 5 * size;
        this.y = size + 2.5 * size * Math.floor(index_flashlight / 2);
        console.log(this.x, ' ', this.y, ' ', size);
        this.size = size;

        this.bug_image = new Image();
        this.bug_image.src = "assets/images/flashlights/" + (index_flashlight + 1) + ".png";
        console.log("init flashlight");
    }

    draw() {

        this.game.context.drawImage(this.bug_image, this.x, this.y, this.n * this.size, this.m * this.size);
    }
}