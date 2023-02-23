class Symmetry {
    constructor(x, y, size) {
        this.matrix = [];
        this.x = x;
        this.y = y;
        this.size = size;
        this.isActive = false;
        this.index = 0;
        console.log("symmetry");
    }

    nextIndex() {
        this.index++;
    }

    isSymmetry() {
        return this.index != 0 && this.index % 5 == 0;
    }
}