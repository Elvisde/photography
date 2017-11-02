var superImg={
    LWIDTH:0,
    moved:0,
    OFFSET:0,
	leftstate:null,
    rightstate:null,
    rightstate:null,
    orignleft:0,
    count:0,
    init:function(){
      this.count=$("h3.scroll_main_2>ul>li").length;
	  this.orignleft=parseFloat(getComputedStyle($("h3.scroll_main_2>ul")[0]).left);
      this.leftstate=true;
      this.rightstate=true;
	  this.LWIDTH=100;
	  this.OFFSET=26;
	  $("h3.scroll_main_2>ul")[0].addEventListener("click",this.imgchange);  
      $("h3.scroll_main_2>a:nth-child(1)")[0].addEventListener("click",this.moveright.bind(this));
	  $("h3.scroll_main_2>a:nth-child(3)")[0].addEventListener("click",this.moveleft.bind(this));
	  this.checkState();
	  this.mp3action();
	},
	mp3action:function()
    {
       if($("#sounddl").length!=0)
	 {
	   $("#sounddl").jmp3({ 
       showfilename: "false",
       backcolor: "000000", 
       forecolor: "00ff00", 
       width: 250,   
       showdownload: "true",
       });
	 }
	},
    imgchange:function(e)
	{
		e.preventDefault();
		var target=e.target;
	    if(target.nodeName=="IMG")
        {
		  var sc=target.src;
		  $("div.scroll_main_1>p:nth-child(2)>img")[0].src=sc;
		}
	},
	moveleft:function(e)
	{
      e.preventDefault();
	  if(this.leftstate)
	  {
		this.moved++;
		$("h3.scroll_main_2>ul")[0].style.left=this.orignleft-(this.moved*(this.OFFSET+this.LWIDTH))+"px";
		this.checkState();
	  }
	},
  moveright:function(e)
{
	e.preventDefault();
	  if(this.rightstate)
	  {
		this.moved--;
		$("h3.scroll_main_2>ul")[0].style.left=this.orignleft-(this.moved*(this.OFFSET+this.LWIDTH))+"px";
		this.checkState();
	  }
	},		
   checkState:function()
  {
	  if(this.moved==this.count-6)
	  {
	   this.leftstate=false;
	   $("h3.scroll_main_2>a:nth-child(3)>i")[0].className="bdisabledright";
	  }else if(this.moved==0)
      {
	    this.rightstate=false;
	    $("h3.scroll_main_2>a:nth-child(1)>i")[0].className="bdisabledleft";
	  }else
      {
	    this.leftstate=true;
        this.rightstate=true;
	    $("h3.scroll_main_2>a:nth-child(1)>i")[0].className="";
        $("h3.scroll_main_2>a:nth-child(3)>i")[0].className="";
	  }
	},
}
window.onload=function(){
  superImg.init();
}