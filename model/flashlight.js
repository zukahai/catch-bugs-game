class Flashlight {
    constructor(game, m, n, size, index_flashlight) {
        this.game = game;
        this.m = m;
        this.n = n;
        this.size = size;
        this.index_flashlight = index_flashlight;

        this.angle = 0;

        this.initXY();
        this.asy = 0;

        this.flashlight_image = []
        this.flashlight_image[0] = new Image();
        this.flashlight_image[0].src = "assets/images/flashlights/" + (index_flashlight + 1) + "_1.png";
        this.flashlight_image[1] = new Image();
        this.flashlight_image[1].src = "assets/images/flashlights/" + (index_flashlight + 1) + "_2.png";
        console.log("init flashlight");
    }

    initXY() {
        let x_chessboard = (game_W - 4 * this.size) / 2;
        this.x = (this.index_flashlight % 2 == 0) ? x_chessboard - 3 * this.size : x_chessboard + 5 * this.size;
        this.y = this.size + 2.5 * this.size * Math.floor(this.index_flashlight / 2);
        this.x_real = this.x;
        this.y_real = this.y;
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
        if (this.angle % 360 == 0)
            this.asy = 1 - this.asy;
    }

    updateLocation(x, y) {
        this.x = x - this.size;
        this.y = y - this.size;
        this.update_XY_real();
    }

    update_XY_real() {
        this.x_real = this.x;
        this.y_real = this.y;
        if (this.m + this.n == 3) {
            if (this.angle % 180 == 0) {
                this.y_real += this.size / 2;
            } else {
                this.x_real += this.size / 2;
            }
        }
    }

    updateLocationFromXYReal(x_real, y_real) {
        this.x = x_real;
        this.y = y_real;
        if (this.m + this.n == 3) {
            if (this.angle % 180 == 0) {
                this.y -= this.size / 2;
            } else {
                this.x -= this.size / 2;
            }
        }
        this.update_XY_real();
    }

    resetLacation() {
        this.initXY();
        this.update_XY_real();
    }

    draw() {
        this.game.context.save();
        this.game.context.translate(this.x + this.size, this.y + this.size);
        this.game.context.rotate(Angle.toRadian(this.angle));

        let x = -this.size;
        let y = -this.size + ((this.m + this.n == 3) ? 1 : 0) * this.size / 2;
        let width = this.n * this.size;
        let height = this.m * this.size;
        this.game.context.drawImage(this.flashlight_image[this.asy], x, y, width, height);

        this.game.context.restore();

    }
}