var baojian=document.getElementById('baojian');
var ajax7=new XMLHttpRequest();
ajax7.open('get','4.php',true);
ajax7.send(null);
ajax7.onreadystatechange=function(){
    if(ajax7.readyState===4&&ajax7.status===200){
        var res=JSON.parse(ajax7.responseText);
        var str='';
        res.forEach(item=>{
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
        baojian.innerHTML=str;
    }
}