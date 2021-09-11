$("h1").addClass("big-title margin-50");
$("h1").click(function() {
  $("h1").css("color" , "red");
});
$(document).keypress(function(event) {
  $("h1").fadeToggle();
})
