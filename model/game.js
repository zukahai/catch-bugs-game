game_W = 0, game_H = 0;

let bg = new Image();
bg.src = "assets/images/bg.png";
let logo = new Image();
logo.src = "assets/images/logo.png";
let fl = new Image();

let move = false;
let click = false;
let index_flashlight = -1;

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
        if (!this.chessBoard.win) {
            this.update();
            this.render();

        } else {
            this.chessBoard.redrictLevel();
        }
        this.draw();
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
            for (let i = 0; i < this.chessBoard.flashlights.length; i++)
                if (this.chessBoard.flashlights[i].isClick(x, y)) {
                    // console.log("Down " + i);
                    click = true;
                    index_flashlight = i;
                }

        })

        document.addEventListener("mousemove", evt => {
            var x = evt.offsetX == undefined ? evt.layerX : evt.offsetX;
            var y = evt.offsetY == undefined ? evt.layerY : evt.offsetY;
            if (move == true && index_flashlight >= 0) {
                this.chessBoard.flashlights[index_flashlight].updateLocation(x, y);
            }
            if (click == true) {
                move = true;
            }
        })

        document.addEventListener("mouseup", evt => {
            var x = evt.offsetX == undefined ? evt.layerX : evt.offsetX;
            var y = evt.offsetY == undefined ? evt.layerY : evt.offsetY;

            if (move == true) {
                move = false;
                this.chessBoard.updateLocationFlashlight(index_flashlight);
                this.chessBoard.updateBlock();
                // console.log(this.chessBoard.block);
                // console.log(this.chessBoard.checkResult());
                if (this.chessBoard.checkResult()) {
                    // alert("0840140264088 - MB bank - PHAN DUC HAI. Donate để phát triển game :))");
                    // location.reload();
                    this.chessBoard.win = true;
                    // this.newGame();
                }
            } else {
                for (let i = 0; i < this.chessBoard.flashlights.length; i++)
                    if (this.chessBoard.flashlights[i].isClick(x, y)) {
                        if (x > this.chessBoard.x && x < this.chessBoard.x + this.chessBoard.size * 4) {
                            this.chessBoard.flashlights[i].resetLacation();
                        } else {
                            this.chessBoard.flashlights[i].rotate_90();
                        }
                        // console.log(this.chessBoard.flashlights[i].block);
                        // console.log(this.chessBoard.block);
                    }
            }
            click = false;
            // console.log("Move " + move);
        })
    }

    newGame() {
        for (let i = 0; i < this.chessBoard.flashlights.length; i++)
            this.chessBoard.flashlights[i].resetLacation();
        this.chessBoard.newGame();
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