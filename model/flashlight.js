class Flashlight {
    constructor(game, m, n, size, index_flashlight) {
        this.game = game;
        this.m = m;
        this.n = n;

        this.angle = 180;
        let x_chessboard = (game_W - 4 * size) / 2;
        this.x = (index_flashlight % 2 == 0) ? x_chessboard - 3 * size : x_chessboard + 5 * size;
        this.y = size + 2.5 * size * Math.floor(index_flashlight / 2);
        this.size = size;

        this.bug_image = new Image();
        this.bug_image.src = "assets/images/flashlights/" + (index_flashlight + 1) + ".png";
        console.log("init flashlight");
    }

    isClick(x, y) {
        if (x < this.x)
            return false;
        if (x > this.x + this.n * this.size)
            return false;
        if (y < this.y)
            return false;
        if (y > this.y + this.m * this.size)
            return false;
        return true;
    }

    draw() {
        this.game.context.save();
        this.game.context.translate(this.x + this.size, this.y + this.size);
        this.game.context.rotate(Angle.toRadian(this.angle));
        this.game.context.drawImage(this.bug_image, -this.size, -this.size + 0.5 * this.size * ((this.m + this.n == 3) ? 1 : 0), this.n * this.size, this.m * this.size);
        this.game.context.restore();

    }
}