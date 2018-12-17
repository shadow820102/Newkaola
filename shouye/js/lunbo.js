var lis=document.querySelectorAll('#banner img');
var i=0;
var next=document.getElementById('next');
var pre=document.getElementById('pre');
var oli=document.querySelectorAll('#page li');
var banner=document.getElementById('banner');
autoplay();
function autoplay(){
	timer=setInterval(function(){
		if(i>=6){
			i=-1;
		}
		i++;
		changeImg();
		changeColor();
	},3000)
}
function changeImg(){
	for(var k=0;k<lis.length;k++){
		lis[k].style.opacity=0;
	}
	lis[i].style.opacity=1;
}
next.onclick=()=>{
	if(i>=6){
		i=-1;
	}
	i++;
	changeImg();
	changeColor();
}
pre.onclick=()=>{
	if(i<=0){
		i=7;
	}
	i--;
	changeImg();
	changeColor();
}
for(var k=0;k<oli.length;k++){
	oli[k].index=k;
	oli[k].onclick=function(){
		i=this.index;
		changeImg();
		changeColor();
	}
}
function changeColor(){
	for(var p=0;p<oli.length;p++){
		oli[p].style.background="#fff"
	}
	oli[i].style.background="#d12147"
}
banner.onmousemove=function(){
	clearInterval(timer);
	next.style.opacity=1;
	pre.style.opacity=1;
}
banner.onmouseout=function(){
	autoplay();
	next.style.opacity=0;
	pre.style.opacity=0;
}