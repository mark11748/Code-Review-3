
$(document).ready(function(){
  $("#userIn").submit(function(event){
    //debugger;

    var target = parseInt($("input#yourNum").val());
    var targetArray= new Array(target);
    $("#userOut").empty();

    debugger;

    for (var counter = 1; counter <= target; counter++) {
      var index=counter-1;
      if ((counter%3)===0 & (counter%5)===0) {
        targetArray[index]="<li>"+counter+": "+"Ping-Pong"+"</li>";
      }
      if ((counter%3)===0 & (counter%5)!==0) {
        targetArray[index]="<li>"+counter+": "+"Ping"+"</li>";
      }
      if ((counter%3)!==0 & (counter%5)===0) {
        targetArray[index]="<li>"+counter+": "+"Pong"+"</li>";
      }
      if ((counter%3)!==0 & (counter%5)!==0) {
        targetArray[index]="<li>"+counter+"</li>";
      }
    }

    debugger;

    targetArray.forEach(function(item){
      $("#userOut").append(item);
      return 0;
    });

    //$("#userOUT").append("<li>"+counter+" "+"Ping-Pong"+"</li>");
    //$("#userOUT").append("<li>"+counter+" "+"Ping"+"</li>");
    //$("#userOUT").append("<li>"+counter+" "+"Pong"+"</li>");
    //$("#userOUT").append("<li>"+counter+"</li>");

    event.preventDefault();
  });

});
