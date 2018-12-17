var ajax1=new XMLHttpRequest();
var koubei1=document.getElementById('koubei1')
ajax1.open('get','3.php',true);
ajax1.send(null);
ajax1.onreadystatechange=function(){
    if(ajax1.readyState===4){
        var data=JSON.parse(ajax1.responseText);
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
        koubei1.innerHTML=str;
    }
}