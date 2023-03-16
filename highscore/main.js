// <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
let urlAPI = 'http://103.176.110.169:3000/game-vku/game-vku';
let namePlayer = 'Nam';
let nameGame = 'catch-bugs';
let score = 200;
let school = 'VKU';
let phone = '0337599999';
//using jquery
let funcCreateScore = () => {
    $.ajax({
        url: urlAPI,
        type: 'POST',
        data: {
            namePlayer: namePlayer,
            nameGame: nameGame,
            score: score,
            school: school,
            phone: phone
        },
        success: function(data) {
            console.log(data)
                //sweetalert2
            Swal.fire({
                title: 'Thành Công!',
                text: 'Bạn đã thêm điểm thành công!',
                icon: 'success',
                confirmButtonText: 'OK'
            })

        },
        error: function(data) {
            //sweetalert2
            Swal.fire({
                title: 'Thất Bại!',
                text: 'Bạn đã thêm điểm thất bại!',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    });
}

let getInforGamePlayer = (nameGame, phone) => {
    let inforGamePlayer;
    let data = {
        nameGame: nameGame,
        phone: phone
    }
    $.ajax({
        url: urlAPI + '/find-by-phone-and-name_game',
        type: 'POST',
        data: data,
        success: function(data) {
            inforGamePlayer = data;
            console.log(inforGamePlayer);
        }
    });
}