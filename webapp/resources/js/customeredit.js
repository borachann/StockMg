$(document).ready(function(){
	
	// set class active
	$("#sideBarCustomer").addClass("active");
	
	// redirect to custom
	$("#btn_cancel").click(function(){
		location.href = baseUrl + "/admin/customermg";
	});	
	
	// save update
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
				"cusImg" : $("#image").val()
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
            		location.href = baseUrl + "/admin/customermg";
            	}
            	else{
            		alert("ការកែប្រែ មិនបានរក្សាទុក។ សូមព្យាយមម្តងទៀត។");
            	}
            		
            },
            error : function(data, status, err){
            	
            }
		});
	});
	
	// image upload
	 $("#imgurl").change(function(){
			$("#frmEditCustomer").ajaxSubmit({
				url: baseUrl + "/admin/fileupload/images",
				dataType: 'JSON', 
				type: 'POST',
				success: function(data) { 
					console.log(data);
			        if(data){
			        	$("#images_sample").attr("src", baseUrl + "/resources/images/products/"+data.IMAGE);
			        	$("#images_sample").show();
			        	$("#image").val(data.IMAGE);
			        	//alert('YOU HAVE BEEN INSERTED SUCCESSFULLY.');
			        }else{
			        	//alert('YOU HAVE ERRORS WHEN INSERT NEW PRODUCT.');
			        }
			    },
			    error:function(data,status,er) { 
			        console.log("error: "+data+" status: "+status+" er:"+er);
			    }
			});
		});
	
	
	 
});