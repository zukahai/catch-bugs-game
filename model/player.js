class Player {
    constructor() {
        this.player = {
            phonenumber: null,
            score: 1,
            name: "Guest",
            isGuest: true
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