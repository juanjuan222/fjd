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
//商品菜单
$(".menu-left>ul>li").hover(function  () {
	$(this).find('div').show()
},function () {
	$(this).find('div').hide()
})
//轮播图
 var i = 0
 function autoPlay(num) {
 	$('.imgs li').eq(num).addClass('active')
 		.siblings().removeClass('active')
 	$('.nums li').eq(num).addClass('baground')
 		.siblings().removeClass('baground')
 }
 function play() {
 	timer = setInterval(function() {
 		i++;
 		if(i == $('.imgs li').length) i = 0
 		autoPlay(i)
 	}, 2000)
 }
 play()
 $('.nums li').hover(function() {
 	clearInterval(timer)
 	autoPlay($(this).index())
 }, function() {
 	play()
 })
//新闻资讯 news
$(".news li").mouseover(function () {
	var i = $(this).index();
	$(".news section").eq(i).addClass("block").siblings().removeClass("block");
})
//倒计时
        var oSpan = document.querySelectorAll(".xx-right span")
		var oSeconds = oSpan[2].innerHTML
		var oMinutes = oSpan[1].innerHTML
		var oHours = oSpan[0].innerHTML
		function ShowTime () {
			oSeconds--
			if (oSeconds < 0) {
				oMinutes--
				oMinutes = oMinutes < 10? "0" + oMinutes:oMinutes
				oSpan[1].innerHTML = oMinutes
				oSeconds = 59
			}
			oSeconds = oSeconds < 10? "0" + oSeconds:oSeconds
			oSpan[2].innerHTML = oSeconds
		}
		setInterval(ShowTime,1000)
//滚动滑轮显示logo 与搜索框
var oDiv = document.querySelector(".top-nav");
window.onscroll = function() {
	var ScrollTop = document.body.scrollTop || document.documentElement.scrollTop
	if(ScrollTop >= 720){
		oDiv.style.display = "block"
	}
	if(ScrollTop < 300){
		oDiv.style.display = "none"
	}
}
//jdms-content
$(".jdms-content li a").hover(function(){
	
	$(this).animate({
		top:"-5px"
	})
},function(){
	$(this).animate({
		top:"0"
	})
})
//lqzx
$(".lqzx-xfq>li img").hover(function(){
	
	$(this).animate({
		left:"10px"
	},500)
},function(){
	$(this).animate({
		left:"0"
	},500)
})
//fxhh
$(".fxhh ul img").hover(function(){
	
	$(this).animate({
		right:"5px"
	},500)
},function(){
	$(this).animate({
		right:"0"
	},500)
})
//pptt
$(".pptt ul img").hover(function(){
	
	$(this).animate({
		right:"5px"
	},500)
},function(){
	$(this).animate({
		right:"0"
	},500)
})
//phb tab切换
$(".phb-nav li").mouseover(function () {
	var i = $(this).index();
	$(".phb div").eq(i).addClass("phb-content").siblings().removeClass("phb-content");
})
//jdcs
$(".jdcs li img").hover(function(){
	
	$(this).animate({
		right:"5px"
	},500)
},function(){
	$(this).animate({
		right:"0"
	},500)
})
//.fsmz-middle 
$(".fsmz-middle li").hover(function(){
	
	$(this).animate({
		right:"5px"
	},500)
},function(){
	$(this).animate({
		right:"0"
	},500)
})
//fsmz-bottom
$(".fsmz-bottom li").hover(function(){
	
	$(this).animate({
		right:"5px"
	},500)
},function(){
	$(this).animate({
		right:"0"
	},500)
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
$(".right-top li").first().click(function(){
	screenTop =0;
})