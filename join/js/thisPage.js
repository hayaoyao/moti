/*
加载网页中的公共元素
如果不需要公共部分,则尽量在网页中避免使用相应id. 
公共头部 id = header
公共尾部 id = footer
*/
$(function(){
	include('explainRight');
	include('flow',callback);
	include('path');
})
	/* 
	 selecter 元素的选择器
	 callback 加载页面后的回调函数
	 */
	function include(selecter,callback) {
		if($('#' + selecter).length) {
			$('#' + selecter).load('joinPublic/' + selecter + '.html',callback);
		}
	}
	function callback(){
    $('#come').click(function () {
        $("html,body").animate({ scrollTop: $('#joinForm').offset().top}, 700);
    });
	}
