
$(document).ready(function(){

	$("#sideBarUnit").addClass("active");
	
	$("#btn_cancel").click(function(){
		location.href = baseUrl + "/admin/unitmg";
	});
	$("#btnUpdate").click(function(){
		   var json = {
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
		   });
	});
	
});

