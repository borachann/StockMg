$(document).ready(function(){
	 url =  "/admin/unitmg/listunit";
	 col = 6;

	$("#sideBarUnit").addClass("active");
	getAllCurrentObject(1); 
	
	//on close of the popup
	$('#form_add').on('hidden.bs.modal', function(event) {
			if(s) location.href = baseUrl + "/admin/unitmg";
	});
	
	$(document).on("click","#btnUnitAdd",function(e){
		var json = {
				"unitName" : $("#unitName").val(),
				"qty" : $("#qty").val(),
				"convertTo" : $("#convertTo").val(),
				"status" : true
		}
		$.ajax({
				url: baseUrl + "/admin/unitmg/insertunit",
				type: 'POST',
				data : JSON.stringify(json),
				beforeSend: function(xhr) {
		              xhr.setRequestHeader("Accept", "application/json");
		              xhr.setRequestHeader("Content-Type", "application/json");
		          },
				success: function(data) {
					s = true;
					if(data){
		        		  alert("បង្កើត ប្រភេទឯកតាថ្មី បានជោគជ័យ។");
		        		  $("#frmAddUnit").find("input:text").val('');
		        	  }else{
		        		  alert("បង្កើត ប្រភេទឯកតាថ្មី មិនបានជោគជ័យ។");
		        	  }
				},
				error: function(data, status, er) {
				    console.log("error: " , data + " status: " , status , " er:" , er);
				}
			});
	});
	$(document).on("click","#btnDelete", function(){
		if(!confirm("តើលោកអ្នក ពិតជាចង់លុបប្រភេទឯកតានេះមែនទេ?"))
			return;
		$.ajax({
			url: baseUrl + "/admin/unitmg/deleteunit/" + $(this).data("id"),
			type: "POST",
			success: function(data){
				location.href = baseUrl + "/admin/unitmg";
			},
			error: function(data, status, err){
				console.log("data ", data , "status ", status , "err " , err);
			}
		});
	});
});