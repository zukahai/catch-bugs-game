## Mục lục
- [Lấy thông tin bảng xếp hạng](#lay-thong-tin-bang-xep-hang)
- [Lấy thông tin người chơi](#lay-thong-tin-nguoi-choi)
- [Thêm điểm cho người chơi](#them-diem-cho-nguoi-choi)
- [Refresh bảng xếp hạng](#refresh-bang-xep-hang)

## Hướng dẫn sử dụng API
<a name="thu-vien"></a>
### Thư Viện Sử dụng
#### CSS
```Html
  <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/dataTables.bootstrap5.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
```
#### JS
```Html
  <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="//cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
  <script src="https://cdn.datatables.net/1.13.4/js/dataTables.bootstrap5.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="gameScore.js"></script>
  <script src="main.js"></script>
```
<a name="lay-thong-tin-bang-xep-hang"></a>
### Lấy thông tin bảng xếp hạng
- Di chuyển vào file `gameScore.js`
- Thay `nameGameRanking` bằng tên game của bạn
- Nếu muốn lấy thông tin của 1 game cụ thể thì thay `nameGameRanking` bằng tên game cần lấy
- Nếu muốn lấy thông tin của tất cả các game thì thay `nameGameRanking` bằng `all`
- Lưu ý cần thêm tất cả các thư viện trong file `index.html`
**Init variable**
```javascript
let nameGameRanking = "pokemon";
let urlRanking = "http://103.176.110.169:3000/game-vku/ranking/" + nameGameRanking;
```
<a name="lay-thong-tin-nguoi-choi"></a>
### Lấy thông tin người chơi
- Sử dụng function `getInforGamePlayer(nameGame, phone)` trong file `main.js`
- Thay `nameGame` bằng tên game của bạn
- Thay `phone` bằng số điện thoại của người chơi
**getInforGamePlayer**
```javascript
let getInforGamePlayer = (nameGame, phone) => {
    //nameGame là tên game
    //phone là số điện thoại của người chơi
    let inforGamePlayer;
    let data  ={
        nameGame: nameGame,
        phone: phone
    }
    $.ajax({
        url: urlAPI+'/find-by-phone-and-name_game',
        type: 'POST',
        data: data,
        success: function (data) {
            inforGamePlayer = data;
            console.log(inforGamePlayer);
        }
    });
}
```
<a name="them-diem-cho-nguoi-choi"></a>
### Thêm điểm cho người chơi
- Sử dụng function `funcCreateScore()` trong file `main.js`
- Thay `namePlayer` bằng tên người chơi
- Thay `nameGame` bằng tên game của bạn
- Thay `phone` bằng số điện thoại của người chơi
- Thay `score` bằng điểm của người chơi
**funcCreateScore**
```javascript
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
        success: function (data) {
            console.log(data)
            //sweetalert2
            Swal.fire({
                title: 'Thành Công!',
                text: 'Bạn đã thêm điểm thành công!',
                icon: 'success',
                confirmButtonText: 'OK'
            })

        },
        error: function (data) {
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
```
<a name="refresh-bang-xep-hang"></a>
### Refresh bảng xếp hạng hoặc lấy điểm
**getRanking**
- Sử dụng function `getRanking()` trong file `gameScore.js`
- Thay `nameGameRanking` bằng tên game của bạn
```javascript
function getRanking() {
    if ($.fn.DataTable.isDataTable('#table_ranking')) {
        $('#table_ranking').DataTable().destroy();
    }
    $('#table_ranking').DataTable({
        ajax: {
            "url": urlRanking,
            "dataSrc": ""
        },

        columns: [
            {"data": "id"},
            {"data": "namePlayer"},
            {"data": "nameGame"},
            {"data": "score"},
            {"data": "phone"},
            {"data": "school"}
        ],
        language: {
            "lengthMenu": "Hiển thị _MENU_ bản ghi trên một trang",
            "zeroRecords": "Không tìm thấy bản ghi nào",
            "info": "Hiển thị trang _PAGE_ trên _PAGES_",
            "infoEmpty": "Không có bản ghi nào",
            "infoFiltered": "(filtered from _MAX_ total records)",
            "search": "Tìm kiếm:",
            "paginate": {
                "first": "Đầu",
                "last": "Cuối",
                "next": "Sau",
                "previous": "Trước"
            }
        },
        order: [],
        columnDefs: [
            {
                targets: 0,
                data: 'id',
                title: 'ID',
            },
            {
                targets: 1,
                data: 'namePlayer',
                title: 'Tên người chơi',
            },
            {
                targets: 2,
                data: 'nameGame',
                title: 'Tên game',
            },
            {
                targets: 3,
                data: 'score',
                title: 'Điểm',
            },
            {
                targets: 4,
                data: 'phone',
                title: 'Số điện thoại',
            },
            {
                targets: 5,
                data: 'school',
                title: 'Trường',
            }

        ],
        "initComplete": function (settings, json) {
            $('.dataTables_filter input').addClass('form-control bg-dark text-light');
            $('.dataTables_length select').addClass('form-control bg-dark text-light');
            $('.dataTables_filter input').attr('placeholder', 'Tìm kiếm');
            // prev next
            $('.dataTables_paginate .paginate_button').addClass(' btn-dark');

        }

    })
}
```
