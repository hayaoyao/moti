$(function () {
    $(".kind a:first").addClass("active");
    sel(0);

    $(".kind a").click(function () {
        $(this).addClass("active").siblings("a").removeClass("active");
        sel(0);
    })
})		
function sel(index){
	$.getJSON('brand.json',function(data){
		var html ="";
		$.each(data, function(key, v) {
			$('.kind a').click(function() {	
				if($(this).attr('data-id') != data[key].code_c) {
					return false
				} else {
					html += '<li><a href="javascirpt:;"><div class="kindImg"><img src="' + data[key].img + '"></div><div class="kindLogo"><span title="' + data[key].title + '">' + data[key].title + '</span></div></a></li>';
				}
				$(".kindBox .clearfix").html(html)
			})
		});					
	})

}