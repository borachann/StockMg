$(document).ready(function(){
	url =  "/admin/customermg/getAllCustomer";
	col = 5;
	var isAdded = false
	$("#sideBarCustomer").addClass("active");
	
	// List All Category
	getAllCurrentObject(1);
	
	// save customer
	$(document).on("click","#btnCusAdd", function(){
		if($("#cusName").val() == ""){
			alert("សូមបំពេញ ឈ្មោះអតិថិជន។");
			return;
		}
		
		if(checkCustomerExsit($("#cusName").val())){
			alert("ឈ្មោះអតិថិជន មានរួចហើយ។");
			$("#cusName").focus();
			return;
		}
		var json = {
				"cusName" : $("#cusName").val(),
				"phoneNumber" : $("#cusPhone").val(),
				"address" : $("#cusAddress").val(),
				"status" : true,
				"cusImg" : $("#image").val()
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
            		isAdded = true;
            		$("#frmAddCustomer").find("input:text").val("");
            	}
            	else{
            		alert("ឈ្មោះអតិថិជនថ្មី មិនបានរក្សាទុក។ សូមព្យាយមម្តងទៀត។");
            	}
            },
            error : function(data, status, err){
            	console.log("data: " + data + " status: " + "error: " + err );
            }
		});
	});
	
	// image upload
	 $("#imgurl").change(function(){
			$("#frmAddCustomer").ajaxSubmit({
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
	 // delete customer
	 $(document).on("click","#btnCusDelete", function(){
		 if(confirm("តើលោកអ្នក ចង់លុបឈ្មោះអតិថិជននេះចេញវិញមែនទេ?")){
			 $.ajax({
				url : baseUrl + "/admin/customermg/deletecustomer/" + $(this).data("id"),
				type: "GET",
				success: function(data) { 
			        if(data){
			        	alert('លុបឈ្មោះអតិថិជនបាន ជោគជ័យ។');
			        	location.href = baseUrl + "/admin/customermg";
			        }else{
			        	alert('លុបឈ្មោះអតិថិជនមិនបាន ជោគជ័យ។');
			        }
			    },
			    error:function(data,status,er) { 
			        console.log("error: "+data+" status: "+status+" er:"+er);
			    }
			 });
		 }
	 });
	 
	 // when close pop up
	 $('#form_add').on('hidden.bs.modal', function(event) {
		 			if(isAdded){
						location.href = baseUrl + "/admin/customermg";
						isAdded = false;
		 			}
				})
	 
	 // check if data exist
	 function checkCustomerExsit(str){
		 var isExist = false;
		 $.ajax({
			url: baseUrl + "/admin/customermg/getCustomerSetAuto",
			type: "GET",
			async : false,
			success: function(data) { console.log(data);
		        	for(i=0; i<data.customerAuto.length; i++){
		        		if(data.customerAuto[i].cusname == str){
		        			isExist = true;
		        			break;
		        		}
		        	}
		    },
		    error:function(data,status,er) { 
		        console.log("error: "+data+" status: "+status+" er:"+er);
		    }
		 });
		 return isExist;
	 }
});