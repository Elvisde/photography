$("#zuoping_recommend").on("click","A",function(){ 
 location.href="work_detail.html";
});
$(".tp_section").on("click","A",function(){
 location.href="work_detail.html";
});
$(".zt_section").on("click","A",function(){
 location.href="imgdetail.html";
});
$(".people_intro ").on("click","A",function(){
 location.href="sys_detail.html";
});
$(".role_list ").on("click","A",function(){
 location.href="sys_detail.html";
});
function getTop(elem)
{
  var sum=elem.offsetTop;
  if(elem.offsetParent!=null)
  {
     elem=elem.offsetParent;
	 sum+=elem.offsetTop;
  }
  return sum;
}

var floor={
   scrollTop:0,
   innerHeight:0,
   innerWidth:0,
   minHeight:0,
   hdHeightTop:0,
   hdHeight:0,
   tpHeightTop:0,
   tpHeight:0,
   ydHeightTop:0,
   ydHeight:0,
   ztHeightTop:0,
   ztHeight:0,
   jxHeightTop:0,
   jxHeight:0,
   moved:0,
   STEP:100,
   distance:0,
   DURATION:800,
  marginOffset:40,
   timer:null,
   init:function(){
   this.innerHeight=window.innerHeight;
   this.innerWidth=window.innerWidth;
   this.heightOffset=700;
   this.minHeight=parseInt($(".floor").css("top"));
   var me=this;
   this.hdHeightTop=parseFloat(getTop($("#hot_activity")[0]));
   this.hdHeight=parseFloat($("#hot_activity").css("height"));
   this.tpHeightTop=parseFloat(getTop($(".tp_section")[0]));
   this.tpHeight=parseFloat($(".tp_section").css("height"));
   this.ydHeightTop=parseFloat(getTop($(".yd_section")[0]));
   this.ydHeight=parseFloat($(".yd_section").css("height"));
   this.ztHeightTop=parseFloat(getTop($(".zt_section")[0]));
   this.ztHeight=parseFloat($(".zt_section").css("height"));
   this.jxHeightTop=parseFloat(getTop($("#zuoping_recommend")[0]));
   this.jxHeight=parseFloat($("#zuoping_recommend").css("height"));
   window.onscroll=function(){
   me.scrollTop=document.body.scrollTop;
   $(".floor>ul>li>a").removeClass("light");
   var scrollValue=me.scrollTop+me.minHeight;
   if(scrollValue>=me.jxHeightTop&&scrollValue<=(me.jxHeightTop+me.jxHeight)){
      $(".floor>ul>li:eq(0)>a").addClass("light");
   }
   else if(scrollValue>=me.hdHeightTop&&scrollValue<=(me.hdHeightTop+me.hdHeight))
   {
     $(".floor>ul>li:eq(1)>a").addClass("light");
    }else if(scrollValue>=me.tpHeightTop&&scrollValue<=(me.tpHeightTop+me.tpHeight))
	{
	  $(".floor>ul>li:eq(2)>a").addClass("light");
	}else if(scrollValue>=me.ydHeightTop&&scrollValue<=(me.ydHeightTop+me.ydHeight))
	{
	  $(".floor>ul>li:eq(3)>a").addClass("light");
	}else if(scrollValue>=me.ztHeightTop&&scrollValue<=(me.ztHeightTop+me.ztHeight))
	{
	  $(".floor>ul>li:eq(4)>a").addClass("light");
	}
   };
   $(".floor").on("click","A",function(e){
	   e.preventDefault();
      me.scrollGo(e.target);
   })
   },
 scrollGo:function(target){
     this.moved=0;
     var data=target.dataset.telem;
     var elemH=getTop($(data)[0]);
	 var n=1;
	 if(this.distance>0)
	 {
	   n=-1;
	 }
	 this.distance=(elemH-this.scrollTop+n*this.marginOffset)/this.STEP;
	 var interval=this.DURATION/this.STEP;
	 var me=this;
	 this.timer=setInterval(function(){
      me.moved++;
	  if(me.moved>me.STEP)
	  {
	    clearInterval(me.timer);
		me.timer=null;
		return;
	  }
	  window.scrollBy(0,me.distance);
	  
	 },interval);
   },

}
window.onload=function(){
    floor.init();
}