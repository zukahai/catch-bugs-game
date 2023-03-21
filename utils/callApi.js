class CallAPI {
    static urlAPI = 'https://54a1-103-176-110-169.ap.ngrok.io/game-vku';
    static nameGame = 'catch-bugs';

    static getAllHighScore() {

    }

    static async findPlayerByPhoneNumberAndGameId(phoneNumber, game) {
        const url = CallAPI.urlAPI + "/find-by-phone-and-name_game";
        const postData = {
            phone: phoneNumber,
            nameGame: game
        };
        return await axios.post(url, postData)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                const errorMessage = error.response ? error.response.data.message : "Đã xảy ra lỗi khi gửi yêu cầu!";
                console.error(errorMessage);
                return Promise.reject(errorMessage);
            });
    }

    static async findPlayerByPhoneNumber(phoneNumber) {
        const url = CallAPI.urlAPI + "/find-by-phone-and-name_game";
        const postData = {
            phone: phoneNumber
        };
        return await axios.post(url, postData)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                const errorMessage = error.response ? error.response.data.message : "Đã xảy ra lỗi khi gửi yêu cầu!";
                console.error(errorMessage);
                return Promise.reject(errorMessage);
            });
    }


    static postPlayerScore(namePlayer, nameGame, school, phone, score) {
        if (!namePlayer || !nameGame || !school || !phone) {
            return Promise.reject("Vui lòng nhập đầy đủ thông tin!");
        }

        const postData = {
            namePlayer: namePlayer,
            nameGame: nameGame,
            score: score,
            school: school,
            phone: phone
        };

        return new Promise((resolve, reject) => {
            $.ajax({
                url: CallAPI.urlAPI,
                type: "POST",
                data: JSON.stringify(postData),
                contentType: "application/json",
                success: function(data) {
                    resolve(data); // trả về dữ liệu khi thành công
                },
                error: function(xhr, status, error) {
                    // Xử lý lỗi
                    const errorMessage = xhr.responseJSON ? xhr.responseJSON.message : "Đã xảy ra lỗi khi gửi yêu cầu!";
                    console.error(errorMessage);
                    reject(errorMessage); // trả về thông báo lỗi khi thất bại
                }
            });
        });
    }
}