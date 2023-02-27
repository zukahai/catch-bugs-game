class Symmetry {
    constructor(x, y, size) {
        this.matrix = [];
        this.x = x;
        this.X = x;
        this.y = y;
        this.size = size;
        this.SIZE = size;
        this.isActive = false;
        this.index = 0;
        this.step = 0;

        this.asy = 0;
        // console.log("symmetry");
    }

    nextIndex() {
        this.index++;
    }

    changeActive() {
        if (this.isActive) {
            this.isActive = false;
        } else {
            this.isActive = true;
        }
    }
    isSymmetry() {
        return this.index != 0 && this.index % 5 == 0;
    }

    changeAys() {
        this.asy = 1 - this.asy;
    }

    changeDraw() {
        if (this.isActive) {
            if (this.step == 1) {
                this.size -= this.SIZE / 3;
                if (this.size < this.SIZE / 10) {
                    this.step = 2;
                    this.changeAys();
                }
            } else {
                this.size += this.SIZE / 3;
                if (this.size >= this.SIZE) {
                    this.step = 0;
                    this.changeActive();
                }
            }
        }
    }
}