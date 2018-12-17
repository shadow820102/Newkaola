var dapai=document.getElementById('dapai');
var ajax4=new XMLHttpRequest();
ajax4.open('get','4.php',true);
ajax4.send(null);
ajax4.onreadystatechange=function(){
    if(ajax4.readyState===4&&ajax4.status===200){
        var data=JSON.parse(ajax4.responseText);
        var str="";
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
        dapai.innerHTML=str;
    }
}