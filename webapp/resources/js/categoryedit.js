
$(document).ready(function(){

	$("#sideBarCategory").addClass("active");
	
	$("#btn_cancel").click(function(){
		location.href = baseUrl + "/admin/categorymg";
	});
	$("#btnCatAdd").click(function(){
		   var json = {
				   "catName" : $("#catName").val(),
				   "status" : true
		   }
		   $.ajax({
			  url : baseUrl + "/admin/categorymg/updatacategory/" + $("#catId").val(),
			  type: "POST",
			  data: JSON.stringify(json),
			  beforeSend: function(xhr) {
	              xhr.setRequestHeader("Accept", "application/json");
	              xhr.setRequestHeader("Content-Type", "application/json");
	          },
	          success: function(data) {
	        	  if(data){
	        		  alert("កែប្រែ ប្រភេទទំនិញ បានជោគជ័យ។");
	        		  $("#catName").val("");
	        		  location.href = baseUrl + "/admin/categorymg";
	        	  }else{
	        		  alert("កែប្រែ ប្រភេទទំនិញ មិនបានជោគជ័យ។");
	        	  }
	          },
	          error: function(data, status, er){
	        	  console.log("error : " + data + " status : " + status + " er : " + er );
	          }
		   });
	});
	
});

