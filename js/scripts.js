var factorial = 1;
var factorialFinder = function(number) {
  for (var i = 1; i <= number; i++) {
    factorial *= i;
  }
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#number").val());
    factorialFinder(number);
    $("p").text(number + "! = " + factorial);

  });

});
