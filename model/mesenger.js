class Mesenger {
    constructor(game, size) {
        this.N_image = 15;
        this.game = game;
        this.size = size;
        this.image = [];
        for (let i = 1; i <= this.N_image; i++) {
            this.image[i] = new Image();
            this.image[i].src = "assets/images/icons/" + i + ".png";
        }
        this.index = 0;
        this.x = 1;
        this.y = 2;
        this.active = false;
        this.start = 0;
        this.end = 200;
        this.big = 0;
    }

    setXY(x, y) {
        this.x = x;
        this.y = y;
    }

    update() {
        if (this.active) {
            if (this.start < this.end) {
                this.start += 1;
                if (this.big < 1)
                    this.big += 0.1;

            } else {
                this.big -= 0.1;
                if (this.big <= 0) {
                    this.active = false;
                    this.start = 0;
                }
            }
        }
    }

    setActive(active) {
        this.active = active;
    }

    randomActive() {
        if (Math.random() < 0.0003) {
            this.active = true;
            this.index = Math.ceil(Math.random() * 100000) % this.N_image + 1;
        } else {
            this.active = false;
        }
        return this.active;
    }

    draw() {
        if (this.active) {
            this.update();
            let X_game = (game_W - 4 * this.size) / 2;
            let Y_game = (game_H - 4 * this.size) / 2;

            let width = 1.5 * this.size;
            let height = 1.5 * this.size;
            let x = X_game + (this.y + 1) * this.size - this.size / 2;
            let y = Y_game + (this.x) * this.size - height + this.size / 2;
            this.game.context.drawImage(this.image[this.index], x, y + height * (1 - this.big), width * this.big, height * this.big);
        }
    }
}