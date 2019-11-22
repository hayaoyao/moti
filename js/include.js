/*
加载网页中的公共元素
如果不需要公共部分,则尽量在网页中避免使用相应id. 
公共头部 id = header
公共尾部 id = footer
*/
$(function(){
	include('online');
	include('wapMenu');
	include('navbar');
	include('moveMenu');
})
	/* 
	 selecter 元素的选择器
	 callback 加载页面后的回调函数
	 */
	function include(selecter) {
		if($('#' + selecter).length) {
			$('#' + selecter).load('public/' + selecter + '.html',function(){
				$.getScript("js/index.js");
			});
		}
	}
