class Bug {
    constructor(game, x, y, size, index_image) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.size = size;

        this.bug_image = new Image();
        this.bug_image.src = "assets/images/bugs/" + index_image + ".png";
        this.symmetrical = Math.ceil((Math.random() * 100000)) % 2
    }

    draw() {
        if (this.symmetrical == 0) {
            this.game.context.save();
            this.game.context.translate(this.x + this.size, this.y);
            this.game.context.scale(-1, 1);
            this.game.context.drawImage(this.bug_image, 0, 0, this.size, this.size);
            this.game.context.restore();
        } else {
            this.game.context.drawImage(this.bug_image, this.x, this.y, this.size, this.size);
        }

    }
}