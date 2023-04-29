$(document).ready(function(){
    $(".backbtn").click(function(){
      $(".box2 > p").toggle().css("display", "none");
      $(".box2").toggle().css({
        borderRadius: "1em",
        border: "none",
        padding: 0,
        display: "block"
      });
      $(".center-section").css("marginLeft", "6em");
      $(".backbtn").css({
        margin: "auto",
        textAlign: "center",
        padding: "0 1em",
        display: "block"
      }).toggle();
    });
  
    $(".menubar").click(function(){
      $(".list_item").toggle();
    });
  }); 
  