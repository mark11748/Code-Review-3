
$(document).ready(function(){
  $("#USERIN").submit(function(event){

    debugger;

    var target = $(yourNum).val().parseInt();
    $("#USEROUT").text("");

    debugger;

    for (var counter = 1; counter <= target; counter++) {
      if ((counter%3)===0 & (counter%5)===0) {
        $("#USEROUT").append(counter+" "+"Ping-Pong");
      }
      if ((counter%3)===0 & (counter%5)!==0) {
        $("#USEROUT").append(counter+" "+"Ping");
      }
      if ((counter%3)!==0 & (counter%5)===0) {
        $("#USEROUT").append(counter+" "+"Pong");
      }
      if ((counter%3)!==0 & (counter%5)!==0) {
        $("#USEROUT").append(counter);
      }
    }
    event.preventDefault();
  });

});
