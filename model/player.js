class Player {
    constructor(currentPlayer) {
        this.player = {
            phonenumber: null,
            score: 1,
            name: "Guest",
            school: "",
            isGuest: true
        }
        if (currentPlayer) {
            this.player = currentPlayer;
        }
        LocalStorage.setItem('playerCurrent', this.player);
    }

    getPlayer() {
        return this.player;
    }

    isNotGuest() {
        return !this.player.isGuest;
    }

    isGuest() {
        return this.player.isGuest;
    }

    getLevel() {
        return this.player.score;
    }

    getName() {
        return this.player.name;
    }

    getSchool() {
        return this.player.school;
    }

    getPhonenumber() {
        return this.player.phonenumber;
    }

    static getCurrentPlayer() {
        return LocalStorage.getCurrentPlayer();
    }
}