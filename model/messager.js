class Messager {
    constructor(game, size) {
        this.game = game;
        this.image = new Image();
        this.size = 1.5 * size;
        this.image.src = "assets/images/icons/1.png";
    }

    draw() {
        this.game.context.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.size, this.size);
    }
}