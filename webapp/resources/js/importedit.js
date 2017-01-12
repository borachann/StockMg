
$(document).ready(function(){

	$("#sideBarImport").addClass("active");
	getImportDetail();
	/*$("#btn_cancel").click(function(){
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
	        		  alert("កែប្រែ ប្រភេទទំនិញ បានជោគជ័យ។");
	        		  location.href = baseUrl + "/admin/categorymg";
	        	  }else{
	        		  alert("កែប្រែ ប្រភេទទំនិញ មិនបានជោគជ័យ។");
	        	  }
	          },
	          error: function(data, status, er){
	        	  console.log("error : " + data + " status : " + status + " er : " + er );
	          }
		   });
	});*/
		function getImportDetail(){
		var json = {"impId" : $("#editImpId").val()};
		$.ajax({
			url: baseUrl + "/admin/importmg/getimportdetail",
			type: "GET",
			data: json,
			beforeSend: function(xhr) {
		            xhr.setRequestHeader("Accept", "application/json");
		            xhr.setRequestHeader("Content-Type", "application/json");
	        },
	        success: function(data){console.log(data);
	        	for(i = 0; i< data.importDetail.length; i++){
	        		data.importDetail[i]["order"] = i + 1;
	        		data.importDetail[i]["proqty"] = numberWithCommas(data.importDetail[i]["proqty"]);
	        		data.importDetail[i]["unitprice"] = numberWithCommas(data.importDetail[i]["unitprice"]);
	        		data.importDetail[i]["total_amount"] = numberWithCommas(data.importDetail[i]["total_amount"]);
	        	}
	        	$("#tblimportdetail").html("");
	        	$("#tblListDetail").tmpl(data.importDetail).appendTo("#tbllistimport");
	        	$("#totalAmountDetailIndollar").val(numberWithCommas(data.importDetail[0].impamount));
	        	$("#totalAmountDetailInreil").val(numberWithCommas((data.importDetail[0].impamount * data.importDetail[0].imprate).toFixed(0)));
	        	$("#impDetailRate").val(numberWithCommas(data.importDetail[0].imprate));
	        	
	        },
			error:function(data, status,er){
				console.log("error: " + data + "status: " + status + "er: ");
			}
		});
	} 
});

