$(document).ready(function(){
 // jQuery methods go here
var boolean =true;
var boolean2 = true;


 $("#clicker").click(function(){
if(boolean === true){
 $("#hello").hide()
 boolean = false;
}
 else if (boolean === false){
  $("#hello").show()
  boolean = true;
}
});

$(".selector").click(function(){
if(boolean2===true){
$(".color").addClass("color2")
boolean2=false;
}

else if(boolean2===false){
$(".color").removeClass("color2")
boolean2=true;
}
})
});