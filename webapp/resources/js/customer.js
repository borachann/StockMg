$(document).ready(function(){
	url =  "/admin/customermg/getAllCustomer";
	col = 5;
	
	$("#sideBarCustomer").addClass("active");
	
	// List All Category
	getAllCurrentObject(1);
	
	$(document).on("click","#btnCusAdd", function(){
		if($("#cusName").val() == ""){
			alert("សូមបំពេញ ឈ្មោះអតិថិជន។");
			return;
		}
		var json = {
				"cusName" : $("#cusName").val(),
				"phoneNumber" : $("#cusPhone").val(),
				"address" : $("#cusAddress").val()
		}
		$.ajax({
			url: baseUrl + "/admin/customermg/savecustomer",
			type: "POST",
			data : JSON.stringify(json),
			beforeSend: function(xhr) {
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("Content-Type", "application/json");
            },
            success: function(data) {
            	if(data){
            		alert("ឈ្មោះអតិថិជនថ្មី បានរក្សាទុកជោគជ័យ។");
            		$("#frmAddCustomer").find("input:text").val("");
            	}
            	else{
            		alert("ឈ្មោះអតិថិជនថ្មី មិនបានរក្សាទុក។ សូមព្យាយមម្តងទៀត។");
            	}
            		
            },
            error : function(data, status, err){
            	
            }
		});
	});
	
	
	
});