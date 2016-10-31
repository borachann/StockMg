
$(document).ready(function(){
	$("#sideBarCategory").addClass("active");
	// add new category
   $("#btnCatAdd").click(function(){
	   var json = {
			   "catName" : $("#catName").val(),
			   "status" : true
	   }
	   
	   console.log(json);
	   $.ajax({
		  url : baseUrl + "/insertcategory",
		  type: "POST",
		  data: JSON.stringify(json),
		  beforeSend: function(xhr) {
              xhr.setRequestHeader("Accept", "application/json");
              xhr.setRequestHeader("Content-Type", "application/json");
          },
          success: function(data) {
        	  console.log(data);
          },
          error: function(data, status, er){
        	  console.log("error : " + data + " status : " + status + " er : " + er );
          }
	   });
   });
   
   // delete category
   $("#btnCatDelete").click(function(){
	   $.ajax({
		  url : baseUrl + "/deletecategory/" + $("#catId").val(),
		  type: "GET",
		  beforeSend: function(xhr){
			  xhr.setRequestHeader("Accept", "application/json");
			  xhr.setRequestHeader("Content-Type", "application/json");
		  },
		  success: function(data){
			  console.log(data);
		  },
		  error: function(data, status, er){
			console.log("error : " + data + " status : " + status + " er " + er);  
		  }
	   });
   });
   
   // search category
   $("#btnCatSearch").click(function(){
	   $.ajax({
		  url : baseUrl + "/searchcategory/" + $("#catId").val(),
		  type: "GET",
		  beforeSend: function(xhr){
			  xhr.setRequestHeader("Accept", "application/json");
			  xhr.setRequestHeader("Content-Type", "application/json");
		  },
		  success: function(data){
			  console.log(data);
		  },
		  error: function(data, status, er){
			console.log("error : " + data + " status : " + status + " er " + er);  
		  }
	   });
   });
   
   // update category
   $("#btnCatUpdate").click(function(){
	   var json = {
			   "catName" : $("#catName").val(),
			   "status" : false
	   }
	  $.ajax({
		  url : baseUrl + "/updatacategory/" +  $("#catId").val(),
		  type: "POST",
		  data: JSON.stringify(json),
		  beforeSend: function(xhr){
			  xhr.setRequestHeader("Accept", "application/json");
			  xhr.setRequestHeader("Content-Type", "application/json");
		  },
		  success: function(data){
			  console.log(data);
		  },
		  error: function(data, status, er){
			  console.log("error : " + data + " status :" + status + "er : " + er);
		  }
	  }) 
   });
   
});