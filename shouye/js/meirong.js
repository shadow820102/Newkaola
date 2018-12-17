var meirong=document.getElementById('meirong');
var ajax3=new XMLHttpRequest();
ajax3.open('get','5.php',true);
ajax3.send(null);
ajax3.onreadystatechange=function(){
    if(ajax3.readyState===4&&ajax3.status===200){
        var data=JSON.parse(ajax3.responseText);
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
        meirong.innerHTML=str;
    }
}