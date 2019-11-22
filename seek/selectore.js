$(function () {
    sel(0);
    $("#find").click(function () {
        sel(0);
    })
})

function sel(index) {
    $.ajax({
        type: "GET",
        dataType: "json", //返回json格式的数据
        url: "../seek/json/seek.json",
        async: false,
        success: function (data) {	     	
			var pages,page=1 //表示页数
			var t = 20; //表示每页显示几条数据    		    
		    var html = "<tr><th>品牌</th><th>省/直辖市</th><th>店名</th><th>地址</th><th>类型</th><th>会员卡</th><th>代金券</th><th>礼品卡</th></tr>";
		   	var json = eval('(' + data.list + ')');
//			var z = json.length;
//			pages = Math.ceil(z	 / 20);
			page+=index;//当前页			  
			var len = page * 20;	
		    for (var i = (page - 1) * 20; i < len; i++) {
		        html += '<tr><td>' + json[i].pinpai + '</td><td>' + json[i].shengt + ' ' + json[i].shit + '</td><td>' + json[i].Title + '</td><td>' + json[i].Address + '</td><td align="center">' + (json[i].lx == "1" ? "直营" : "加盟") + '</td><td align="center">' + (json[i].hy == "1" ? "√" : "×") + '</td><td align="center">' + (json[i].djq == "1" ? "√" : "×") + '</td><td align="center">' + (json[i].lpk == "1" ? "√" : "×") + '</td></tr>';	    	    
		    }
		    $(".seek table tbody").html(html);		
		    $(".page").html(data.p);
		    $(".page a").each(function () {
		        if ($.trim($(this).text()) == (index + 1)) {
		            $(this).addClass("active");
		        }
		    }); 
        },
    });
}
