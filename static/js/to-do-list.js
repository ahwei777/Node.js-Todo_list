$(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });

  getListData();
});

function getListData() {
  axios
    .get('/to-do-list/list')
    .then(function (response) {
      var data = response.data.result;
      createTable(data);
    })
    .catch(function (err) {
      if (err.response && err.response.status === 404) {
        alert('找不到該 API !');
        return;
      }
    });
}

function deleteTodo(id) {
  axios
    .delete(`/to-do-list/detail/${id}`)
    .then(function (response) {
      if (response.data.message === 'ok.') {
        alert('刪除成功！');
        location.href = '/to-do-list/page';
      }
    })
    .catch(function (err) {
      if (err.response && err.response.status === 404) {
        alert(response.data.message);
        return;
      }
    });
}

function escapeHtml (str) {
  if (typeof jQuery !== 'undefined') {
    return jQuery('<div/>').text(str).html();
  }
  // No jQuery, so use string replace.
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function createTable(data) {
  data = data || [
    {
      to_do_id: '10001',
      subject: '晨會',
      reserved_time: '2020-10-24 09:00',
      brief: '午餐負責人',
      level: 3,
      author: '傑夫',
    },
    {
      to_do_id: '10002',
      subject: '下午茶',
      reserved_time: '2020-10-24 12:30',
      brief: '50嵐 VS 可不可熟成',
      level: 8,
      author: 'Leo',
    },
    {
      to_do_id: '10003',
      subject: '客戶拜訪',
      reserved_time: '2020-10-24 16:20',
      brief: '陽明山上的阿婷來訪',
      level: 7,
      author: '小魚',
    },
    {
      to_do_id: '10004',
      subject: '晨會',
      reserved_time: '2020-10-25 09:00',
      brief: '午餐自行處理',
      level: 1,
      author: '傑夫',
    },
    {
      to_do_id: '10005',
      subject: '下午茶',
      reserved_time: '2020-10-25 13:00',
      brief: '京盛宇限定',
      level: 5,
      author: 'Leo',
    },
  ];
  var dataTemplate = data
    .map(function (d, i) {
      return `<tr>
                    <th scope="row">${escapeHtml(d.to_do_id)}</th>
                    <td>${escapeHtml(d.subject)}</td>
                    <td>${escapeHtml(d.reserved_time)}</td>
                    <td><a href="/to-do-list/detail/${escapeHtml(d.to_do_id)}">${escapeHtml(d.brief)}</a></td>
                    <td>
                        ${new Array(d.level)
                          .fill(0)
                          .map(function (_) {
                            return `<i class="fas fa-bell bell-icon"></i>`;
                          })
                          .join('\n')}
                    </td>
                    <td>${escapeHtml(d.author)}</td>
                    <td><i class="fas fa-trash-alt" id=${escapeHtml(d.id)}></i></td>
                </tr>`;
    })
    .join('');
  $('#to-do-list-table tbody').html(dataTemplate);
  $('.fa-trash-alt').on('click', (e) => {
    deleteTodo(e.target.id);
  });
}
