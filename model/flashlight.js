class Flashlight {
    constructor(game, m, n, size, index_flashlight) {
        this.game = game;
        this.m = m;
        this.n = n;
        this.size = size;
        this.index_flashlight = index_flashlight;

        this.angle = 0;

        this.initXY();
        this.asy = 2;

        this.bug_image = new Image();
        this.bug_image.src = "assets/images/flashlights/" + (index_flashlight + 1) + "_" + this.asy + ".png";
        console.log("init flashlight");
    }

    initXY() {
        let x_chessboard = (game_W - 4 * this.size) / 2;
        this.x = (this.index_flashlight % 2 == 0) ? x_chessboard - 3 * this.size : x_chessboard + 5 * this.size;
        this.y = this.size + 2.5 * this.size * Math.floor(this.index_flashlight / 2);
    }

    isClick(x, y) {
        if (x < this.x)
            return false;
        if (x > this.x + 2 * this.size)
            return false;
        if (y < this.y)
            return false;
        if (y > this.y + 2 * this.size)
            return false;
        return true;
    }

    rotate_90() {
        this.angle += 90;
    }

    draw() {
        this.game.context.save();
        this.game.context.translate(this.x + this.size, this.y + this.size);
        this.game.context.rotate(Angle.toRadian(this.angle));

        let x = -this.size;
        let y = -this.size + ((this.m + this.n == 3) ? 1 : 0) * this.size / 2;
        let width = this.n * this.size;
        let height = this.m * this.size;
        this.game.context.drawImage(this.bug_image, x, y, width, height);

        this.game.context.restore();

    }
}