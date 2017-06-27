
var pingPong = function (argArray,arg) {
  //debugger;
  //if (argArray.length < 1) {return -1;}
  for (var counter = 1; counter <= arg; counter++) {
    if (((counter)%3)===0 & ((counter)%5)===0) {
      argArray[counter-1]="<li>"+(counter).toString()+": "+"Ping-Pong"+"</li>";
    }
    if (((counter)%3)===0 & ((counter)%5)!==0) {
      argArray[counter-1]="<li>"+(counter).toString()+": "+"Ping"+"</li>";
    }
    if (((counter)%3)!==0 & ((counter)%5)===0) {
      argArray[counter-1]="<li>"+(counter).toString()+": "+"Pong"+"</li>";
    }
    if (((counter)%3)!==0 & ((counter)%5)!==0) {
      argArray[counter-1]="<li>"+(counter).toString()+"</li>";
    }
    //debugger;
  }
};
var outputArray = function (argArray) {
  argArray.forEach(function(item){
    $("#userOut").append(item);
    return 0;
  });
};

$(document).ready(function(){
  $("#userIn").submit(function(event){
    //debugger;

    var target = parseInt($("input#yourNum").val());
    var targetArray= new Array(target);
    $("#userOut").empty();

    //debugger;
    pingPong(targetArray,target);
    //debugger;
    outputArray(targetArray);

    //$("#userOUT").append("<li>"+counter+" "+"Ping-Pong"+"</li>");
    //$("#userOUT").append("<li>"+counter+" "+"Ping"+"</li>");
    //$("#userOUT").append("<li>"+counter+" "+"Pong"+"</li>");
    //$("#userOUT").append("<li>"+counter+"</li>");

    event.preventDefault();
  });

});
