var pho_res;
var password_res;
$("#pho").blur(function(){
    var pho_reg=/^1\d{10}$/;
    pho_res=pho_reg.test(this.value);
    if(!pho_res){
        $("#tishi").html("手机号格式错误");
    }else{
        $("#tishi").html("");
    }
})
$("#pho").focus(function(){
    $("#tishi").html("");
})
$("#password").blur(function(){
    var  password_reg=/^\w{6,16}$/;
    password_res=password_reg.test(this.value);
    if(!password_res){
        $("#tishi").html("请输入6~16位字符");
    }
})
$("#password").focus(function(){
    $("#tishi").html("");
})
$(".button").click(function(){
    password_res===password.value;
    if(pho_res&&password_res){
        alert("注册成功");
    }
})