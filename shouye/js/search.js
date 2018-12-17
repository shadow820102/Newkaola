var search1=document.querySelector('.serach1');
var souk=document.getElementById('souk');
search1.onkeyup=function(){
    if(souk.innerHTML===''){
        souk.style.display='none';
    }
    var ajs=new XMLHttpRequest();
    ajs.open('get','sousuo.php?cont='+search1.value,true);
    ajs.send(null);
    ajs.onreadystatechange=function(){
        if(ajs.readyState===4&&ajs.status===200){
            var res=JSON.parse(ajs.responseText).suggestKeycords;
            var str='';
            res.forEach(item=>{
                str+=`<p><a href="https://www.kaola.com/search.html?zn=top&key=${item}&searchRefer=searchbutton">${item}</a></p>`
            })
            souk.style.display='block';
            souk.innerHTML=str;
        }
    }
}
search1.onblur=function(){
    souk.style.display='none';
}