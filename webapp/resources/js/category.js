
$(document).ready(function(){
	// List All Category
	getAllCategroy();
	
	// add class for left side bar
	$("#sideBarCategory").addClass("active");
	
	// pop up for add category
	$("#catAddNew").click(function(){
		$('#form_add_category').modal({
			"backdrop" : "static"
		});
	});
	
	// btncancel to close the form add category pop up
	$("#btn_cancel").click(function() {
		$('#form_add_category').modal('hide');
	});
	
	// add new category
   $("#btnCatAdd").click(function(){
	   var json = {
			   "catName" : $("#catName").val(),
			   "status" : true
	   }
	   $.ajax({
		  url : baseUrl + "/admin/categorymg/insertcategory",
		  type: "POST",
		  data: JSON.stringify(json),
		  beforeSend: function(xhr) {
              xhr.setRequestHeader("Accept", "application/json");
              xhr.setRequestHeader("Content-Type", "application/json");
          },
          success: function(data) {
        	  if(data){
        		  alert("បង្កើត ប្រភេទទំនិញថ្មី បានជោគជ័យ។");
        		  $("#catName").val("");
        	  }else{
        		  alert("បង្កើត ប្រភេទទំនិញថ្មី មិនបានជោគជ័យ។");
        	  }
          },
          error: function(data, status, er){
        	  console.log("error : " + data + " status : " + status + " er : " + er );
          }
	   });
   });
   
   // delete category
   $("#btnCatDelete").click(function(){
	   $.ajax({
		  url : baseUrl + "/admin/categorymg/deletecategory/" + $("#catId").val(),
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
		  url : baseUrl + "/admin/categorymg/searchcategory/" + $("#catId").val(),
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
		  url : baseUrl + "/admin/categorymg/updatacategory/" +  $("#catId").val(),
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
// list all category
	function getAllCategroy(){
		$.ajax({
			url : baseUrl + "/admin/categorymg/listcategory",
			type: "GET",
			success: function(data) {
				$("#tblCatListTem").tmpl(data.allCategory).appendTo("#tblCatList");
	          },
	          error: function(data, status, er){
	        	  console.log("error : " + data + " status : " + status + " er : " + er );
	          }
		});
	}
});