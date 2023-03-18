let nameGameRanking = "catch-bugs";
let urlRanking = "https://54a1-103-176-110-169.ap.ngrok.io/game-vku/ranking/" + nameGameRanking;

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
            { "data": "id" },
             { "data": "namePlayer" },
            //{ "data": "nameGame" },
            { "data": "score" },
            { "data": "phone" },
            { "data": "school" }
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
        columnDefs: [{
                targets: 0,
                data: 'id',
                title: 'ID',
            },
            {
                targets: 1,
                data: 'namePlayer',
                title: 'Tên người chơi',
            },
            // {
            //     targets: 2,
            //     data: 'nameGame',
            //     title: 'Tên game',
            // },
            {
                targets: 2,
                data: 'score',
                title: 'Điểm',
            },
            {
                targets: 3,
                data: 'phone',
                title: 'Số điện thoại',
            },
            {
                targets: 4,
                data: 'school',
                title: 'Trường',
            }

        ],
        "initComplete": function(settings, json) {
            $('.dataTables_filter input').addClass('form-control bg-dark text-light');
            $('.dataTables_length select').addClass('form-control bg-dark text-light');
            $('.dataTables_filter input').attr('placeholder', 'Tìm kiếm');
            // prev next
            $('.dataTables_paginate .paginate_button').addClass(' btn-dark');

        }

    })
}

$(document).ready(function() {
    getRanking();
    let title = $('#title');
    title.text("Bảng xếp hạng " + nameGameRanking.at(0).toUpperCase() + nameGameRanking.slice(1));
    document.title = "Bảng xếp hạng " + nameGameRanking.at(0).toUpperCase() + nameGameRanking.slice(1);
});
