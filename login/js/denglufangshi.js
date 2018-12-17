$(".dlTop div").click(function(){
    $(".dlTop div").css("color","#333").eq($(this).index()).css("color","#e31436");
    $(".dlMid").css("display","none").eq($(this).index()).css("display","block");
})