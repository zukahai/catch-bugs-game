class Tutorial {
    constructor(game, button, size) {
        this.game = game;
        this.size = size;
        this.button = button;

        this.width = this.size * 0.7;
        this.height = this.size * 1.2;
        this.x = button.x + button.width / 2 - this.width / 2;
        this.y = button.y + button.height;
        this.distance = 0;
        this.init();
    }

    init() {
        this.buttons_image = new Image();
        this.buttons_image.src = "assets/images/buttons/tutorial.png";
        this.speed = 3;
        this.visible = true;
    }

    update() {
        this.distance += this.speed;
        if (this.distance >= this.size / 2 || this.distance <= -this.size / 2) {
            this.speed = -this.speed;
        }
    }

    setVisible(visible) {
        this.visible = visible;
    }

    draw() {
        if (this.visible) {
            this.update();
            let x = this.x;
            let y = this.y + this.distance;
            let width = this.width;
            let height = this.height;
            this.game.context.drawImage(this.buttons_image, x, y, width, height);
        }
    }

}