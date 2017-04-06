//城市定位信息 header-location
$(".header-location").hover(function () {
	var $index = $(this).index()
	$(".csmz").show()
	$(".header-location img").attr("src","img/location1.png")
	$(".csmz a").click(function () {
		$(".header-location span").text($(this).text())
	})
},function () {
	$(".csmz").hide()
	$(".header-location img").attr("src","img/location.png")
})
//我的京东.header-dh wdjd
$(".wdjd-content").hover(function  () {
	$(this).css("background","white")
	$(".wdjd").show()
},function () {
	$(this).css("background","#E3E4E5")
	$(".wdjd").hide()
})
//客户服务 khfw-content
$(".khfw-content").hover(function  () {
	$(this).css("background","white")
	$(".khfw").show()
},function () {
	$(this).css("background","#E3E4E5")
	$(".khfw").hide()
})
//手机京东 ewm-content
$(".ewm-content").hover(function  () {
	$(this).css("background","white")
	$(".ewm").show()
},function () {
	$(this).css("background","#E3E4E5")
	$(".ewm").hide()
})
$(".ewm-first").hover(function  () {
	$(".ewm").show()
},function () {
	$(".ewm").hide()
})
//购物车 gwc-content
$(".gwc-content").hover(function  () {
	$(this).css("border-bottom","none")
	$(".gwc").show()
},function () {
	$(this).css("border-bottom","solid 1px #ccc")
	$(".gwc").hide()
})
//提示语
$("input").focus(function  () {
	$(this).val(" ")
})
//right-nav
$(".right-nav li").hover(function(){
	var $index = $(this).index()
	$(".right-nav li p").eq($index).show().animate({
		right:"35px"
	},100)
},function(){
	$(".right-nav li p").hide().animate({
		right:"0"
	},100)
})
//right-top
$(".right-top li").hover(function(){
	var $index = $(this).index()
	$(".right-top li p").eq($index).show().animate({
		right:"35px"
	},100)
},function(){
	$(".right-top li p").hide().animate({
		right:"0"
	},100)
})
//down-list
$(".down-list").hover(function  () {
	$(this).find("img").attr("src","img/product/shang1.png")
	$(".menu-left").show()
},function () {
	$(this).find("img").attr("src","img/product/xia1.png")
	$(".menu-left").hide()
})
