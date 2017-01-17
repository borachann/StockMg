$(document).ready(function(){
	
	
	$("#sideBarCustomer").addClass("active");
	
		
	$(document).on("click","#btnCusAdd", function(){
		if($("#cusName").val() == ""){
			alert("សូមបំពេញ ឈ្មោះអតិថិជន។");
			return;
		}
		var json = {
				"cusId" : $("#cusId").val(),
				"cusName" : $("#cusName").val(),
				"phoneNumber" : $("#cusPhone").val(),
				"address" : $("#cusAddress").val(),
				"status" : true,
				"cusImg" : ""
		}
		$.ajax({
			url: baseUrl + "/admin/customermg/updatecustomer",
			type: "POST",
			data : JSON.stringify(json),
			beforeSend: function(xhr) {
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("Content-Type", "application/json");
            },
            success: function(data) {
            	if(data){
            		alert("ការកែប្រែ បានរក្សាទុកជោគជ័យ។");
            		$("#frmAddCustomer").find("input:text").val("");
            	}
            	else{
            		alert("ការកែប្រែ មិនបានរក្សាទុក។ សូមព្យាយមម្តងទៀត។");
            	}
            		
            },
            error : function(data, status, err){
            	
            }
		});
	});
	
	
	
});