game_W = 0, game_H = 0;

let bg = new Image();
bg.src = "assets/images/bg.png";
let logo = new Image();
logo.src = "assets/images/logo.png";
let fl = new Image();

class game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
    }

    init() {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
        Angle.toRadian();

        this.render();
        this.chessBoard = new ChessBoard(this);
        this.chessBoard.draw();
        this.loop();
        this.listenMouse();
    }

    loop() {
        this.update();
        this.draw();
        this.render();
        setTimeout(() => this.loop(), 30);
    }

    update() {

    }


    draw() {
        this.clearScreen();
        this.chessBoard.draw();
    }

    clearScreen() {
        this.context.clearRect(0, 0, game_W, game_H);
        this.context.drawImage(bg, 0, 0, game_W, game_H);
        this.context.drawImage(logo, game_H / 40, game_H / 40, game_H / 13, game_H / 13);
        this.context.font = game_W / 20 + 'px Arial Black';
        this.context.fillStyle = "#FF00CC";
        this.context.textAlign = "center";
    }

    listenMouse() {
        document.addEventListener("mousedown", evt => {
            var x = evt.offsetX == undefined ? evt.layerX : evt.offsetX;
            var y = evt.offsetY == undefined ? evt.layerY : evt.offsetY;

        })

        document.addEventListener("mousemove", evt => {
            var x = evt.offsetX == undefined ? evt.layerX : evt.offsetX;
            var y = evt.offsetY == undefined ? evt.layerY : evt.offsetY;
        })

        document.addEventListener("mouseup", evt => {
            var x = evt.offsetX == undefined ? evt.layerX : evt.offsetX;
            var y = evt.offsetY == undefined ? evt.layerY : evt.offsetY;
            for (let i = 0; i < this.chessBoard.flashlights.length; i++)
                if (this.chessBoard.flashlights[i].isClick(x, y)) {
                    console.log(i);
                    this.chessBoard.flashlights[i].rotate_90();
                }
        })
    }

    render() {
        if (this.canvas.width != document.documentElement.clientWidth || this.canvas.height != document.documentElement.clientHeight) {
            this.canvas.width = document.documentElement.clientWidth;
            this.canvas.height = document.documentElement.clientHeight;
            game_W = this.canvas.width;
            game_H = this.canvas.height;
        }
    }

}

var g = new game();