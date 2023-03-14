class LocalStorage {
    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    static getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    static removeItem(key) {
        localStorage.removeItem(key);
    }
    static clear() {
        localStorage.clear();
    }

    static getCurrentPlayer() {
        const player = LocalStorage.getItem('playerCurrent');
        // console.log("player: ", player);
        return player;
    }

    static findPlayer(phonenumber) {
        if (players) {
            const player = players.find(player => player.phonenumber === phonenumber);
            if (player) {
                return player;
            }
        }
        return null;
    }

    static updatePlayers() {
        const players = LocalStorage.getItem('players');
        if (players) {
            let currentPlayer = LocalStorage.getCurrentPlayer();
            if (currentPlayer) {
                players.forEach(player => {
                    if (player.phonenumber === currentPlayer.phonenumber) {
                        player.score += 1;
                    }
                });
            }
            LocalStorage.setItem('players', players);
        }
    }

    static updateScore() {
        const playerCurrent = LocalStorage.getItem('playerCurrent');
        if (playerCurrent) {
            playerCurrent.score += 1;
            LocalStorage.setItem('playerCurrent', playerCurrent);
        }
    }
}