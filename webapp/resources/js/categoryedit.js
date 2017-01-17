
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
	        		  alert("áž€áŸ‚áž”áŸ’ážšáŸ‚ áž”áŸ’ážšáž—áŸ�áž‘áž‘áŸ†áž“áž·áž‰ áž”áž¶áž“áž‡áŸ„áž‚áž‡áŸ�áž™áŸ”");
	        		  location.href = baseUrl + "/admin/categorymg";
	        	  }else{
	        		  alert("áž€áŸ‚áž”áŸ’ážšáŸ‚ áž”áŸ’ážšáž—áŸ�áž‘áž‘áŸ†áž“áž·áž‰ áž˜áž·áž“áž”áž¶áž“áž‡áŸ„áž‚áž‡áŸ�áž™áŸ”");
	        	  }
	          },
	          error: function(data, status, er){
	        	  console.log("error : " + data + " status : " + status + " er : " + er );
	          }
		   });
	});
});

