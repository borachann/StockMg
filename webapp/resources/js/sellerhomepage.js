$(document).ready(function(){
	$(document).on("click","#myTab li, #btnsearch", function(){
		$.ajax({
            url: baseUrl + "/seller/searchProduct",
            type: 'GET',
            data: {
                "catId": $("#myTab li").hasClass("active").val(),
                "strPro": $("#strPro").val()
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("Content-Type", "application/json");
            },
            success: function(data) {
            	console.log(data);
            },
            error: function(data, status, err){
            	
            }
        });
	});
	
	
	
});