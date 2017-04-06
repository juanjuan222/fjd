//login
$(".content-sz li").click(function () {
	var i = $(this).index();
	$("section div").eq(i).addClass("cxs").siblings().removeClass("cxs");
})