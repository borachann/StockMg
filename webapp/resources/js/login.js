$(document).ready(function(){
	
	$(document).on("click","#loginForm",function(e){
		e.preventDefault();
		if($("#user").val() == ""){
			alert("សូមបញ្ចូល ឈ្មោះ ។");
			return;
		}
		if($("#pass").val() == ""){
			alert("សូមបញ្ចូល លេខសំងាត់។");
			return;
		}
		
		var json ={
				"userName" : $("#user").val(),
				"userPassword" : $("#pass").val()
		}
		$.ajax({
				url: baseUrl + "/auth",
				type: 'GET',
				data: json,
				beforeSend: function(xhr) {
		              xhr.setRequestHeader("Accept", "application/json");
		              xhr.setRequestHeader("Content-Type", "application/json");
		          },
				success: function(data) {
					console.log(data);
				},
				error: function(data, status, er) {
				    console.log("error: " , data + " status: " , status , " er:" , er);
				}
			});
	});
	
});