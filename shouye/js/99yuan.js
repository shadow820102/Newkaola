var yuan=document.getElementById('yuan');
var ajax2=new XMLHttpRequest();
ajax2.open('get','3.php',true);
ajax2.send(null);
ajax2.onreadystatechange=function(){
    if(ajax2.readyState===4&&ajax2.status===200){
        var data=JSON.parse(ajax2.responseText);
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
        yuan.innerHTML=str;
    }
}