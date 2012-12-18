$("#radio").buttonset();
//Default page is "about us"
$("#body").load($(".menuradio:checked").attr("href"));

$(".menuradio").click(function(){
		$("#body").load($(this).attr("href"));
	});
