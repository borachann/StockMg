$(document).ready(function(){
	$("#sideBarDashBoard").addClass("active");
	getStockProduct();
	getRate();
	
	// open popup
	$(document).on("click","#imgrate", function(){
		$('#form_add').modal({
			"backdrop" : "static"
		});
	});
	
	// update rate money
	$(document).on("click", "#btnupdate", function(){
		var json = {
				"rateId" : $("#rateId").val(),
				"rateMoney": $("#newRate").val()
			}
		$.ajax({
			url: baseUrl + "/admin/ratemg/updaterate",
			type: "POST",
			dataType: "JSON",
			data: JSON.stringify(json),
			beforeSend: function(xhr) {
	              xhr.setRequestHeader("Accept", "application/json");
	              xhr.setRequestHeader("Content-Type", "application/json");
	          },
			success: function(data){
				if(data){
					$("#rate").text($("#newRate").val());
					alert("ការកែប្រែ អត្រាប្រាក់បានជោគជ័យ");
				}
			},
			error: function(data, error, status){
				console.log("data: ", data, " error: ", error, " status: ", status);
			}
		});
	});
	
	// get amount in product
	function getStockProduct(){
		$.ajax({
			url: baseUrl + "/admin/dashboard/getstockproduct",
			type: "GET",
			success: function(data){
				$("#productStock").text(data.stockProduct[1].amount + " $, " + data.stockProduct[0].amount + " ៛");
			},
			error: function(data, error, status){
				console.log("data: " , data, " error: ", error, " status: ", status );
			}
		});
	}
	
	// get get rate money
	function getRate(){
		$.ajax({
			url: baseUrl + "/admin/dashboard/getrate",
			type: "GET",
			success: function(data){
				if(data.rate == null){
					createRate();
				}else{
					$("#rate").text(data.rate.rateMoney);
					$("#newRate").val(data.rate.rateMoney);
					$("#rateId").val(data.rate.rateId);
				}
			},
			error: function(data, error, status){
				console.log("data: " , data, " error: ", error, " status: ", status );
			}
		});
	}
	
	// create rate money
	function createRate(){
		$.ajax({
			url: baseUrl + "/admin/ratemg/createrate",
			type: "GET",
			success: function(data){
				getRate();
			},
			error: function(data, error, status){
				console.log("data: " , data, " error: ", error, " status: " , status);
			}
		});
	}
});
