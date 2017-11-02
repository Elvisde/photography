window.$=HTMLElement.prototype.$=function(selector){
    var elems=(this==window?document:this)
        .querySelectorAll(selector);
    return elems.length==0?null:elems.length==1?elems[0]:elems;
}
var scrBanner={
    LWIDTH:0,
    count:0,
    arr:null,
    DURATION:1000,
    distance:0,
    STEP:100,
    interval:0,
    timer:null,
    timer2:null,
    moved:0,
    orign:0,
    init:function(){
		   this.arr=[];
	       this.LWIDTH=586;
		   this.count=$(".scrBanner>ul>li>a>img").length;
		    for(var i=0;i<this.count;i++)
		    {
				this.arr[i]=new Array(2);
                this.arr[i][0]=i+1;
			    this.arr[i][1]=$(".scrBanner>ul>li>a>img")[i].src;
			}			
	       $(".scrBanner>ul").style.width=this.LWIDTH*this.count+"px";
		   this.distance=this.LWIDTH/this.STEP;
		   this.interval=this.DURATION/this.STEP;
           this.timer=setInterval(this.move.bind(this),2000);
		   $("div.scrBanner").addEventListener("mouseover",this.stopInerval.bind(this));
		   $("div.scrBanner").addEventListener("mouseout",this.startInerval.bind(this));
		   $("div.scrBanner").addEventListener("mouseover",this.swit.bind(this));
	},
 swit:function(e)
{
	var target=e.target;
	if(target.nodeName=="B")
  {
	var value=target.innerHTML;
	for(var i=0;i<this.arr.length;i++)
    {
	   if(this.arr[i][0]==value)
	  {
	    break; 
	   }
	}
	  var del=this.arr.splice(0,i);
      this.arr=this.arr.concat(del);
	  this.paintView();
  }
	},
stopInerval:function(e)
{	
	e.preventDefault();
	clearInterval(this.timer);
    this.timer=null;
	},
 startInerval:function()
{
	this.timer=setInterval(this.move.bind(this),3000);
	},
  move:function()
 {
	  this.timer2=setTimeout(this.moveByStep.bind(this),this.interval);
	  this.orign=parseFloat(getComputedStyle($(".scrBanner>ul")).left);
	},		
 moveByStep:function()
 {
	this.moved++;
	 $(".scrBanner>ul").style.left= this.orign-this.moved*this.distance+"px";
	 if(this.moved<this.STEP)
	 {
	   this.timer2=setTimeout(this.moveByStep.bind(this),this.interval);
	 }else
     {
		 this.moved=0;
	    clearTimeout(this.timer2);
		this.timer2=null;
        var dtr=this.arr.splice(0,1);
		this.arr=this.arr.concat(dtr);
		this.paintView();
	 }
	},
 paintView:function(){
	   var imgs=$(".scrBanner>ul>li>a>img");
	   for(var i=0;i<imgs.length;i++)
	  {
	      imgs[i].src=this.arr[i][1];
	   }
     $(".scrBanner>ul").style.left=0+"px";
	 var n=this.arr[0][0];
	 var bs=$(".scrBanner>ul>li>a>b");
     for(var i=0;i<bs.length;i++)
	 {
	     if(bs[i].innerHTML==n)
		{
		   bs[i].className="hove";
		 }else
		 {
		  bs[i].className="";
		 }
	  }
	},
}
window.onload=function(){
  scrBanner.init();
}