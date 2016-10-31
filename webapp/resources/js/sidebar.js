$(document).ready(function(){
	$("#leftSideBar li").click(function(){ 
		$("#leftSideBar li").each(function(){
			$(this).removeClass("active");
		});
		
		$(this).addClass("active");
	});
	
});
	
	
