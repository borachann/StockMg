$(document).ready(function(){
	$("#sideBarProduct").addClass("active");

	$("#btn_cancel").click(function(){
		location.href = baseUrl + "/admin/productmg";
	});
	
	$("#frmAdd").submit(function(e){
		e.preventDefault();
		if($("#proname").val() == ""){
			 alert("សូមបញ្ចូល ឈ្មោះទំនិញ។");
			 return;
		 }
		 if($("#catName").val() == ""){
			 alert("សូមបញ្ចូល ប្រភេទទំនិញ។");
			 return;
		 }
		 if($("#catId").val() == ""){
			 alert("ឈ្មោះប្រភេទទំនិញ មិនត្រឹមត្រូវ។");
			 return;
		 }
		 if($("#unitname").val() == ""){
			 alert("សូមបញ្ចូល ប្រភេទឯកតា។");
			 return;
		 }
		 if($("#unitId").val() == ""){
			 alert("ឈ្មោះប្រភេទឯកតា មិនត្រឹមត្រូវ។");
			 return;
		 }
		 
		$("#frmAdd").ajaxSubmit({
			url: "${baseUrl}/admin/productmg/updateproduct",
			dataType: "JSON",
			type: "POST",
			success: function(data){
				console.log(data);
			},
			error: function(err){
				console.log("error: ", err);
			}
		});
	});
	
	$("#imgurl").change(function(){	
		$("#frmAdd").ajaxSubmit({
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