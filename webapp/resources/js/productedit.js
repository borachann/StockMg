$(document).ready(function(){
	$("#sideBarProduct").addClass("active");

	$("#btn_cancel").click(function(){
		location.href = baseUrl + "/admin/productmg";
	});
	
	$("#frmAdd").submit(function(){
		alert();
		/*   var json = {
				   "unitId" : $("#unitId").val(),
				   "unitName" : $("#unitName").val(),
					"qty" : $("#qty").val(),
					"convertTo" : $("#convertTo").val(),
					"status" : true
		   }
		   $.ajax({
			  url : baseUrl + "/admin/unitmg/updateunit/",
			  type: "POST",
			  data: JSON.stringify(json),
			  beforeSend: function(xhr) {
	              xhr.setRequestHeader("Accept", "application/json");
	              xhr.setRequestHeader("Content-Type", "application/json");
	          },
	          success: function(data) {
	        	  if(data){
	        		  alert("កែប្រែ ប្រភេទឯកតា បានជោគជ័យ។");
	        		  location.href = baseUrl + "/admin/unitmg";
	        	  }else{
	        		  alert("កែប្រែ ប្រភេទឯកតាមិនបានជោគជ័យ។");
	        	  }
	          },
	          error: function(data, status, er){
	        	  console.log("error : " + data + " status : " + status + " er : " + er );
	          }
		   });*/
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