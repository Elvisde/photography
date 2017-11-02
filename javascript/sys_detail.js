$(".header>div:eq(1)>ul").on("click","A",function(e){
	e.preventDefault();
   $(".header>div:eq(1)>ul>li").removeClass("selected");
   $(e.target).parent().addClass("selected");
   $("#main>div").css("display","none");
    $($(e.target).parent().attr("data-target")).css("display","block");
})
