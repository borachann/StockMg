$(document).ready(function(){
	
	// get rate
	getGlobalRate();
	
	// search product name
	$(document).on("click","#myTab li, #btnsearch", function(){
		var carId = 0;
		$("#myTab li").each(function(){
			if($(this).hasClass("active"))
				carId = $(this).val();
		});
		$.ajax({
            url: baseUrl + "/seller/searchProduct",
            type: 'GET',
            data: {
                "catId": carId,
                "strPro": $("#strPro").val()
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("Content-Type", "application/json");
            },
            success: function(data) {
            	console.log(data);
            	var str = "";
            	$("#container").html("");
            	if(data.allObject.length > 0){
	            	for(i=0 ; i < data.allObject.length ; i++){
	            		if(data.allObject[i].status){
	            			str += "<div class='col-xs-6 col-sm-2 placeholder'>";
	            			if(data.allObject[i].imgurl == '')
	            				str += "<img src='" + baseUrl + "/resources/img/total_stock.png' style='width: 150px; height:150px; border:1px solid;' class='img-responsive imghover' alt='Generic placeholder thumbnail' imgProId='data.allObject[i].proid'>";
	            			else
	            				str += "<img src='" + baseUrl + "/resources/images/products/" + data.allObject[i].imgurl + "' style='width: 150px; height:150px !important; border:1px solid;' class='img-responsive imghover' alt='Generic placeholder thumbnail' imgProId='data.allObject[i].proid'>";
	            			str += "<div class='text-primary' id='productStock'>" + data.allObject[i].saleprice.toFixed(2) + " " + data.allObject[i].currentcyname + "</div>";
	            			str += "<div class='text-muted ellipsis'><span class='text-center' id='proName'>" + data.allObject[i].proname + "</span></div></div>";
	            		}
	            	}
            	}
            	else{
            		str = "<div class='text-center'>គ្មានទិន្ន័យ</div><hr>";
            	}
            	$("#container").html(str);
            },
            error: function(data, status, err){
            	
            }
        });
	});
	
	// search product on keypress
	$(document).on("keypress","#strPro", function(e){
		if(e.keycode == 13 || e.which == 13)
			$("#btnsearch").click();
	});
	
	// popup in input number of product
	$(document).on("click",".imghover", function(){
		$('#form_add').modal({
			"backdrop" : "static"
		});
		$(".modal-title").text($(this).parent().find("#proName").text());
		$("#proPrice").val($(this).parent().find("#productStock").text());
		$("#proId").val($(this).attr("imgProId"));
	});
	
	// set focus when pop up
	$('#form_add').on('shown.bs.modal', function () {
		$("#proQty").focus();
	});
	
	// add new order product
	$(document).on("click","#btn_add", function(){
		if($("#proQty").val() == ""){
			alert("សូមបញ្ចូលចំនួន ទំនិញ។");
			$("#proQty").focus();
			return;
		}
		$("#noData").hide();
		
		var str = "";
		str += "<tr>";
		str += "<td>" + $("#tblList tr").length + "</div>";
		str += "<td class='max-ellipsis' title='"+ $(".modal-title").text() + "'>" + $(".modal-title").text() + "</td>";
		str += "<td class='text-center'>" + $("#proQty").val() + "</td>";
		str += "<td class='text-right'>" + $("#proPrice").val() + "</td>";
		str += "<td class='text-right'>" + (parseFloat($("#proPrice").val()) * parseFloat($("#proQty").val())).toFixed(2) + " " + $("#proPrice").val().charAt($("#proPrice").val().length-1) + "</td>";
		str += "<td class='text-center'><a class='on-default edit-row' id='btnUpdate' data-id='" + $("#proId").val() +"'><i class='fa fa-pencil'></i></a>";
		str += " | <a class='on-default edit-row' href='javascript:void(0)' id='btnDelete' data-id='"+ $("#proId").val() +"'><i class='fa fa-trash'></i></a>";
		str += "</td></tr>";
		$("#tblList").append(str);
		findTotalAmount();
		$("#proQty").val("");
		$('#form_add').modal('hide');
	});
	
	// delete ordered product
	$(document).on("click","#btnDelete", function(){
		if(confirm("លោកអ្នកពិតជាចង់ លុបទំនិញនេះចេញវិញ?")){
			$(this).parents("tr").remove();
			if($("#tblList tr").length == 1){
				$("#noData").show();
			}else{
				$("#tblList tr").each(function(i){
					$(this).find("td:first-child").text(i);
				});
			}
			findTotalAmount();
		}
	});
	
	// delete all order product
	$(document).on("click","#btn_cancel_order",function(){
		if(confirm("លោកអ្នកពិតជាចង់ លុបទំនិញទាំងអស់នេះចេញវិញ?")){
			$("#tblList tr").not(":first").remove();
			$("#noData").show();
			$("#leftside").find("input:text").val('');
		}
	});
	
	function findTotalAmount(){
		var totalAmount = 0;
		$("#tblList tr").not(":first").each(function(){
			totalAmount = parseFloat(totalAmount) + parseFloat($(this).children().eq(4).text());
		});
		$("#totalAmout").val(totalAmount.toFixed(2));
	}
});