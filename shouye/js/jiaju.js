var jiaju=document.getElementById('jiaju');
var ajax5=new XMLHttpRequest();
ajax5.open('get','4.php',true);
ajax5.send(null);
ajax5.onreadystatechange=function(){
    if(ajax5.readyState===4&&ajax5.status===200){
        var data=JSON.parse(ajax5.responseText);
        var str='';
        data.forEach(item=>{
            str+=`<li><a href="#">
                            <img src="${item.imgurl}" alt="">
                            <h4>${item.content}</h4>
                    </a>
                    <p>${item.miaoshu}</p>
                    <div class="case2_b">
                        <span>￥<i>${item.price}</i><em>￥${item.reprice}</em></span>
                        <a href="#">立刻购买</a>
                    </div>
                </li>`
        })
        jiaju.innerHTML=str;
    }
}