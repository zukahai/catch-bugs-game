class Player {
    constructor() {
        this.phonenumber = null;
        this.score = 0;
        this.name = "Guest";
        this.player = {
            phonenumber: null,
            score: 1,
            name: "Guest"
        }
        LocalStorage.setItem('playerCurrent', this.player);
    }

    getPlayer() {
        return this.player;
    }

    static getCurrentPlayer() {
        return LocalStorage.getCurrentPlayer();
    }
}