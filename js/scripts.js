$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var frank = parseInt($("#number").val());
    var factorial = 1;
    for (var i = 1; i <= frank; i++) {
      factorial *= i;
    }
    $("p").text(frank + "! = " + factorial);

  });

});
