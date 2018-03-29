$(document).ready(function(){
  var timer=setInterval(loop,2000);
  var index=1;
  var current=0;

  function loop(){
    index++;
    current++;
    current=current%3;
    $(".content").animate({"left":-500*index},300);
        $("li").eq(current).css("background-color","black").siblings().css("background-color","rgb(200,200,200)");
    if(index==4){
      index=1;
    $(".content").animate({"left":-500*index},0);
    }
  }

  $("li").mouseover(function(){
    $(this).css("background-color","black").siblings().css("background-color","rgb(200,200,200)");
    current=$(this).index();
    index=current+1;
    $(".content").animate({"left":-500*index},300);
  });

  $(".lunbo").hover(function(){
    clearInterval(timer);
    $(".left").show();
    $(".right").show();
  },function(){
    timer = setInterval(loop,2000);
    $(".left").hide();
    $(".right").hide();
  });
   $(".left").click(function(){

     index=current;
    $(".content").animate({"left":-500*(index)},300);
         current--;
    current=(current+3)%3;
         $("li").eq(current).css("background-color","black").siblings().css("background-color","rgb(200,200,200)");
$(".content").animate({"left":-500*(current+1)},0);
    // index=current+1;
    // $(".content").animate({"left":-500*index},300);

  });

    $(".right").click(function(){
    current++;
    current=current%3;
    $(".content").animate({"left":-500*current},0);
    index=current+1;
    $(".content").animate({"left":-500*index},300);
    $("li").eq(current).css("background-color","black").siblings().css("background-color","rgb(200,200,200)");
  });

  $(".left,.right").mouseover(function(){
    $(this).css({
      "background-color":"rgba(150,150,150,0.7)",
    }); });
    $(".left,.right").mouseout(function(){
      $(this).css({
        "background-color":"rgba(200,200,200,0.5)",
      });
  });
  });
