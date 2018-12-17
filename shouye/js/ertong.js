var ertong=document.getElementById('ertong');
var ajax6=new XMLHttpRequest();
ajax6.open('get','4.php',true);
ajax6.send(null);
ajax6.onreadystatechange=function(){
    if(ajax6.readyState===4&&ajax6.status===200){
        var res=JSON.parse(ajax6.responseText);
        var str="";
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
        ertong.innerHTML=str;
    }
}