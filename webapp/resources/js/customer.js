$(document).ready(function(){
	$("#sideBarCustomer").addClass("active");
	
	$(document).on("click","#btnCusAdd", function(){
		
		if($("#cusName").val() == ""){
			alert("សូមបំពេញ ឈ្មោះអតិថិជន។");
			return;
		}
		$.ajax({
			
		})	;
	});
	
	
	
});