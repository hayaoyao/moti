$(function () {
    sel(0);
})

function sel(index) {
    $.ajax({
        type: "GET",
        dataType: "json", //返回json格式的数据
        url: "js/problem.json",
        success: function (data) {
            var html = "";
            var json = eval('(' + data.list + ')');
           for (var i = 0; i < json.length; i++) {
                html += '<li><P>Q：' + json[i].Title + '</P><span>A：' + json[i].Remark + '</span></li>';
            }
            $(".problemTxt ul").html(html);

            $(".page").html(data.p);
            $(".page a").each(function () {
                if ($.trim($(this).text()) == (index + 1)) {
                    $(this).addClass("active");
                }
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            //  alert("服务器错误");
        }
    });
}
