
$(document).ready(function(){
	url =  "/admin/categorymg/listcategory";
	col = 4;
	
	// add class for left side bar
	$("#sideBarCategory").addClass("active");
	
	// List All Category
	getAllCurrentObject(1);
		
	// on close of the popup
	$('#form_add').on('hidden.bs.modal', function(event) {
			if(s) location.href = baseUrl + "/admin/categorymg";
	});
	
	// add new category
   $("#btnCatAdd").click(function(){
	   s = true;
	   var json = {
			   "catName" : $("#catName").val(),
			   "status" : true
	   }
	    // like this send as json
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
   $(document).on('click','#btnCatDelete',function(){
	  if(!confirm("តើលោកអ្នក ពិតជាចង់លុបប្រភេទទំនិញនេះមែនទេ?"))
		  return;
	   $.ajax({
		  url : baseUrl + "/admin/categorymg/deletecategory/" + $(this).data("id"),
		  type: "GET",
		  dataType: 'JSON',
		  beforeSend: function(xhr){
			  xhr.setRequestHeader("Accept", "application/json");
			  xhr.setRequestHeader("Content-Type", "application/json");
		  },
		  success: function(data){
			  location.href = baseUrl + "/admin/categorymg";
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

});

