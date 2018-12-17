var box1=document.getElementById('box1');
var ceBian_li=document.querySelectorAll("#ceBian li")
window.onscroll=function(){
	fu()
}
var fn=()=>{
	for(var i=0;i<ceBian_li.length;i++){
		ceBian_li[i].style.background="#f03048";
	}
}
for(var q=0;q<ceBian_li.length;q++){
	ceBian_li[q].onmouseover=function(){
		fn();
		fu();
		this.style.background="#b42436";
	}
	ceBian_li[q].onmouseout=function(){
		fn();
		fu();
	}
}
var fu=()=>{
	var ceBian=document.querySelector('#ceBian');
	var k=document.documentElement.scrollTop;
	if(k>=517){
		ceBian.style.display="block";
	}else{
		ceBian.style.display="none";
	}
	if(k>=571&&k<1486){
		fn();
		ceBian_li[1].style.background="#b42436";
	}else if(k>=1486&&k<2144){
		fn();
		ceBian_li[2].style.background="#b42436";
	}else if(k>=2144&&k<2802){
		fn();
		ceBian_li[3].style.background="#b42436";
	}else if(k>=2802&&k<3181){
		fn();
		ceBian_li[4].style.background="#b42436";
	}else if(k>=3181&&k<4118){
		fn();
		ceBian_li[5].style.background="#b42436";
	}else if(k>=4118&&k<4497){
		fn();
		ceBian_li[6].style.background="#b42436";
	}else if(k>=4497&&k<4876){
		fn();
		ceBian_li[7].style.background="#b42436";
	}else if(k>=4876&&k<5255){
		fn();
		ceBian_li[8].style.background="#b42436";
	}else if(k>=5255){
		fn();
		ceBian_li[9].style.background="#b42436";
	}
}