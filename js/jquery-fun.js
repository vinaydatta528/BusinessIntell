// Sing in Error
$(".sign_btn").click(function(){
	$(".signin_wrap p").slideToggle(100);	
});

// forgot password
$(document).ready(function() {
	$("#forgot-pass").hide();
    $("#fp-click").click(function(){
		$("#signin").hide();
		$("#forgot-pass").show();
	});
    $(".cancel_for").click(function(){
		$("#signin").show();
		$("#forgot-pass").hide();
	});	
});



