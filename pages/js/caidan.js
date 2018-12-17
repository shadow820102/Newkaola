$("#list li").mouseover(function(){
    $(".list1").eq($(this).index()).css("display","block");
})
$("#list li").mouseout(function(){
    $(".list1").css("display","none");
})