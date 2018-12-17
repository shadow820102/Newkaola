var btn=document.getElementById("button");
var btn2=document.getElementById("button2");
var username=document.getElementById("username");
var password=document.getElementById("password");
btn.onclick=function(){
    var denglu=new XMLHttpRequest();
    denglu.open("get","1.php?user="+username.value+"&password="+password.value,true);
    denglu.send(null);
    denglu.onreadystatechange=function(){
        if(denglu.readyState===4&&denglu.status===200){
            var res=JSON.parse(denglu.responseText).code;
            if(res===0){
                alert("用户名不存在");
            }else if(res===1){
                alert("密码错误");
            }else if(res===2){
                alert("登录成功");
            }
        }
    }
}
btn2.onclick=function(){
    var denglu=new XMLHttpRequest();
    denglu.open("get","1.php?user="+username2.value+"&password="+password2.value,true);
    denglu.send(null);
    denglu.onreadystatechange=function(){
        if(denglu.readyState===4&&denglu.status===200){
            var res=JSON.parse(denglu.responseText).code;
            if(res===0){
                alert("用户名不存在");
            }else if(res===1){
                alert("密码错误");
            }else if(res===2){
                alert("登录成功");
            }
        }
    }
}