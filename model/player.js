class Player {
    constructor(currentPlayer) {
        this.player = {
            phone: null,
            score: 1,
            namePlayer: "Guest",
            school: "",
            isGuest: true
        }
        if (currentPlayer) {
            this.player = currentPlayer;
            if (this.player.score <= 0)
                this.player.score = 1;
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
        return this.player.namePlayer;
    }

    getSchool() {
        return this.player.school;
    }

    getPhonenumber() {
        return this.player.phone;
    }

    static getCurrentPlayer() {
        return LocalStorage.getCurrentPlayer();
    }
}