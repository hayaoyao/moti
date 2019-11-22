/*
加载网页中的公共元素
如果不需要公共部分,则尽量在网页中避免使用相应id. 
公共头部 id = header
公共尾部 id = footer
*/
$(function(){

	common('navbar');
	common('wapMenu');
	common('moveMenu');
	common('headerTop');
	common('online');	
	common('footer');	
})
	/* 
	 selecter 元素的选择器
	 callback 加载页面后的回调函数
	 */
	function common(selecter) {		
		$.ajaxSetup({cache: false });
		if($('#' + selecter).length) {
			$('#' + selecter).load('../public/' + selecter + '.html',function(result){			
				$.getScript("../js/index.js");
		         $result = $(result); 
		         $result.find("script").appendTo('#content');				
			});
		}	
	}