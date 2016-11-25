$(document).ready(function(){
	 url =  "/admin/unitmg/listunit";
	 col = 6;

	$("#sideBarUnit").addClass("active");
	
	getAllCurrentObject(1); 
	


	// on close of the popup
	$('#form_add').on('hidden.bs.modal', function(event) {
			if(s) location.href = baseUrl + "/admin/categorymg";
	});
	
	var json = {
			   "catName" : $("#catName").val(),
			   "status" : true
	   }
	   // understand ???
		// OK???
	
	  
	
	//$("#btnUnitAdd").submit(function(e){
	$(document).on("submit","#frmAddUnit",function(e){
		e.preventDefault();
		 $.ajax({
			   url: baseUrl + "/admin/unitmg/insertunit",
			  type: "POST",
			  data: JSON.stringify(json),
			  beforeSend: function(xhr) {
	           xhr.setRequestHeader("Accept", "application/json");
	           xhr.setRequestHeader("Content-Type", "application/json");
	       },
	       success: function(data) {
	    	   console.log(data)
	     	  /*if(data){
	     		  alert("បង្កើត ប្រភេទទំនិញថ្មី បានជោគជ័យ។");
	     		  $("#catName").val("");
	     	  }else{
	     		  alert("បង្កើត ប្រភេទទំនិញថ្មី មិនបានជោគជ័យ។");
	     	  }*/
	       },
	       error: function(data, status, er){
	     	  console.log("error : " + data + " status : " + status + " er : " + er );
	       }
		   });
		/*$("#frmAddUnit").ajaxSubmit({ // frmAddUnit this is form, it send as form, not ajax so? how?   
			// choose send as form or send as json , want to send as form...st
			// send as form  
			url: baseUrl + "/admin/unitmg/insertunit",
			//dataType: 'JSON',
			type: 'POST',
			beforeSend: function(a,c){
				console.log(a);
				console.log(c);
			},
			success: function(data) {
			    console.log(data);
			 *//**
			  *  see??
			  *  you send you have to convert form data to json data , OK...no!
			  *//*
			},
			error: function(data, status, er) {
			    console.log("error: " , data + " status: " , status , " er:" , er);
				console.log(er);
			}
			});*/
	});
});