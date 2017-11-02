$(".hd_main>div>ul>li>a").click(function(e){
   e.preventDefault();
   $(".hd_main>div>ul>li").removeClass("h_light");
   $(e.target).parent().addClass("h_light");
   $("div.hd_main>div>div").css("display","none");
   $($(e.target).attr("data-target")).css("display","block");
})
$(".hd_main_1>div.hd_main_1_detail>p:not(:nth-child(3)) a").click(function(e){
  e.preventDefault();
 location.href="hd_img.html";
})
$(".hd_main_1>div.hd_main_1_detail>p:nth-child(3) a").click(function(e){
  e.preventDefault();
 location.href="sys_detail.html";
})
$(".a2").click(function(e){
  e.preventDefault();
 location.href="sys_detail.html";
})