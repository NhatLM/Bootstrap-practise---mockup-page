// JavaScript Document
function slideAppear(left,right){
	var left=document.getElementById(left);
	left.style.visibility='visible';
	var right=document.getElementById(right);
	right.style.visibility='visible';	
}
function slideDisappear(left,right){
	var left=document.getElementById(left);
	left.style.visibility='hidden';
	var right=document.getElementById(right);
	right.style.visibility='hidden';	
}
function menuFixed()
{
   var d=document.getElementById("menubar");
   if(window.pageYOffset>=50)
   { 
	  d.style.position="fixed";
	  d.style.top="0px";  
   }
   else
   {
	  d.style.position="relative";   
   }
}
var body1img=["background/body1/03-with-Hand.jpg","background/body1/Street-Billboard-PSD-MockUp.jpg","background/body1/7-1.jpg","background/body1/8-1.jpg","background/body1/falling-business-card-mockups-1.jpg","background/body1/iPad-White-Angle.jpg","background/body1/Hanging-Wall-Sign-MockUp-3.jpg"]

var body2img=["background/body2/1-43-thegem-portfolio-carusel-3x.jpg","background/body2/2-41.jpg","background/body2/3-39-thegem-portfolio-carusel-3x.jpg","background/body2/4-36-thegem-portfolio-carusel-3x.jpg","background/body2/5-35-thegem-portfolio-carusel-3x.jpg","background/body2/6-33-thegem-portfolio-carusel-3x.jpg","background/body2/7-32-thegem-portfolio-carusel-3x.jpg","background/body2/10-27-thegem-portfolio-carusel-3x.jpg"];

var body3img=["background/body3/office-730681_1280.jpg","background/body3/shutterstock_107187227.jpg","background/body3/shutterstock_159239858.jpg","background/body3/shutterstock_202597024.jpg","background/body3/shutterstock_206695300.jpg","background/body3/shutterstock_213794422.jpg","background/body3/shutterstock_214814665.jpg","background/body3/shutterstock_214814740.jpg"];

var body4img=["background/body4/01-3-Books.jpg","background/body4/A4-Magazine-Mockup-Free-Version-1.jpg","background/body4/Colorful-Business-Card-MockUp.jpg","background/body4/frames01.jpg","background/body4/free-business-card-mockup-psd.jpg","background/body4/Paper-Bag-1.jpg"];

var body5img=["background/body5/4-37.jpg","background/body5/7-33-thegem-portfolio-carusel-3x.jpg","background/body5/8-34-thegem-portfolio-carusel-3x.jpg","background/body5/6-34-thegem-portfolio-carusel-3x.jpg","background/body5/10-30-thegem-portfolio-carusel-3x.jpg","background/body5/11-13-thegem-portfolio-carusel-3x.jpg","background/body5/Mocks-Up-Frame-Vbd-2-thegem-portfolio-carusel-3x.jpg","background/body5/1-44-thegem-portfolio-carusel-3x.jpg"];

var ri1=0,ri2,ri3;
function toright(bodyNum,imgID1,imgID2,imgID3)
{
   	var array;
	switch(bodyNum)
	{
		case 1: array=body1img; break;
		case 2: array=body2img; break;
		case 3: array=body3img; break;
	    case 4: array=body4img; break;
		case 5: array=body5img; break;	
	}
	
	if(ri2!=0&&ri3!=0) ri1=ri1+3;
	else if(ri2==0) ri1=ri3+1;
	else if(ri3==0) ri1=ri3+1;
    ri2=ri1+1; ri3=ri2+1;
	if(ri1==array.length) { ri1=0;ri2=ri1+1;ri3=ri2+1;}
	else if(ri2==array.length) { ri2=0;ri3=ri2+1;}
	else if(ri3==array.length) ri3=0;
	
	var img1ri=document.getElementById(imgID1);
	
	var img2ri=document.getElementById(imgID2);
	
	var img3ri=document.getElementById(imgID3);
	
	setTimeout(function(){img1ri.src=array[ri1];},100);
	setTimeout(function(){img2ri.src=array[ri2];},210);
	setTimeout(function(){img3ri.src=array[ri3];},320);
}
function toleft(bodyNum,imgID1,imgID2,imgID3)
{
	var array;
	switch(bodyNum)
	{
		case 1: array=body1img; break;
		case 2: array=body2img; break;
		case 3: array=body3img; break;
	    case 4: array=body4img; break;
		case 5: array=body5img; break;	
	}
	
	if(ri1==0) {ri1=array.length-3;}
	else if(ri1==2) {ri1=array.length-1;}
    else if(ri1==1) {ri1=array.length-2;}
	else ri1=ri1-3;
    ri2=ri1+1;
	ri3=ri2+1;
	if(ri2==array.length-1) ri3=0;
	if(ri1==array.length-1) {ri2=0;ri3=ri2+1;}

	var img1=document.getElementById(imgID1);

	var img2=document.getElementById(imgID2);
	
	var img3=document.getElementById(imgID3);
	
	setTimeout(function(){img1.src=array[ri1];},100);
	setTimeout(function(){img2.src=array[ri2];},210);
	setTimeout(function(){img3.src=array[ri3];},320);
}

function loopSlider1()
{
	//window.setTimeout(function (){toleft(1,'img11','img12','img13');loopSlider1()},5000);
}
