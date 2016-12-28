$(document).ready(function(){
	$("#solution1-a").hide();
	$("#solution2-a").hide();

});
$("#solution1-b").on("click", function(){
	$("#solution1-a").show();
});
$("#solution2-b").on("click", function(){
	$("#solution2-a").show();
})