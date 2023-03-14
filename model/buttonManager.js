let buttons_image = [];
buttons_image[0] = new Image();
buttons_image[0].src = "assets/images/buttons/1.png";
buttons_image[1] = new Image();
buttons_image[1].src = "assets/images/buttons/2.png";

class ButtonManager {
    constructor(game, size) {
        this.game = game;
        this.size = size;


        this.height = 0.5 * this.size;
        this.width = 2.5 * this.height;
        let padding = game_W / 75;
        this.x = game_W - this.width - padding;
        this.y = this.size / 2 - this.height / 2;
    }

    draw() {
        this.game.context.drawImage(buttons_image[0], this.x, this.y, this.width, this.height);
    }
}