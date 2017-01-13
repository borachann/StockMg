
$(document).ready(function(){
	var _thisRow;
	var _globalRate;
	$("#sideBarImport").addClass("active");
	getImportDetail();
	
	// get all product for set auto completed
	setAutoCompleteProduct()
	
	// return to the import list
	$("#cencelBtn").click(function(){
		location.href = baseUrl + "/admin/importmg";
	});
	
	// add import list to temporary 
	$(document).on("click","#btnadd", function(){
		var _isExist = false; // check if the product had added before
		var _moneyInDollar = removeCommar($("#totalAmountIndollar").val()) || 0 ;
		var _moneyInRiel = removeCommar($("#totalAmountInreil").val()) || 0;
		
		if(validationInput())
			return;
		$("#tbllistimport tr").each(function(){
			if($(this).find("td").eq(0).text() == $("#proid").val()){
				alert("អ្នកបានបញ្ចូល ឈ្មោះទំនិញនេះម្តងរូចហើយ។");
				$("#proname").focus();
				_isExist = true;
				return;
			}
		});
		if(_isExist) return;
		var st = "";
		var subTotal = $("#costprice").val() * $("#proqty").val();
		var totalMoney;
		st += "<tr><td style='display: none;'>" + $('#proid').val() +"</td>";
		st += "<td style='width : 5%;'>" + ($("#tbllistimport tr").length + 1) +"</td>"; 
		st += "<td style='width : 15%;'>" + $("#proname").val() +"</td>";
		st += "<td style='width : 15%;'>" + "<span>" + numberWithCommas($("#proqty").val()) + "</span><span class='pull-right'>"+ $("#lblunitname").text() + "</span>" +"</td>";
		st += "<td style='width : 20%;'>" + "<span>" + numberWithCommas($("#costprice").val()) + "</span><span class='pull-right'>"+ $("#lblcurrency").text() + "</span>" +"</td>";
		if($("#lblcurrency").attr("var") == "true")
			st += "<td><span>" + numberWithCommas(subTotal.toFixed(2)) + "</span><span class='pull-right'>"+ $("#lblcurrency").text() + "</span>" +"</td>";
		else
			st += "<td><span>" + numberWithCommas(subTotal.toFixed(0)) + "</span><span class='pull-right'>"+ $("#lblcurrency").text() + "</span>" +"</td>";
		st += "<td class='text-center'><a class='on-default edit-row' href= 'javascript:;' id='btnedit'><i class='fa fa-pencil'></i></a> | " +
				"<a href='javascript:;' class='on-default edit-row' id='btndelete'><i class='fa fa-trash '></i></a></td>";
		st += "<td style='display: none;'>" + $('#unitQty').val() +"</td></tr>";
		if($("#lblcurrency").attr("var") == "true"){
			_moneyInDollar = Number(_moneyInDollar) + Number(subTotal);
			$("#totalAmountIndollar").val(numberWithCommas(_moneyInDollar.toFixed(2)));
			$("#totalAmountInreil").val(numberWithCommas(_moneyInDollar * _globalRate));
		}
		else{
			_moneyInRiel = Number(_moneyInRiel) + Number(subTotal);
			$("#totalAmountIndollar").val(numberWithCommas((_moneyInRiel / _globalRate).toFixed(2)));
			$("#totalAmountInreil").val(numberWithCommas(_moneyInRiel));
		}
		
		$("#frmAdd").find("input:text").val('');
		$("#frmAdd").find("input:hidden").val('');
		$("#lblcurrency").text("");
		$("#lblunitname").text("");
		
		$("#tbllistimport").append(st);
	});
	
	// edit import product
	$(document).on("click","#btnedit", function(){
		_thisRow = $(this).closest("tr");
		var lblcurrency;
		$("#proid").val($(this).closest("tr").children().eq(0).text());
		$("#proname").val($(this).closest("tr").children().eq(2).text());
		$("#proqty").val(removeCommar($(this).closest("tr").children().eq(3).find("span:first-child").text()));
		$("#costprice").val(removeCommar($(this).closest("tr").children().eq(4).find("span:first-child").text()));
		$("#unitQty").val($(this).closest("tr").children().eq(7).text());
		
		lblcurrency = $(this).closest("tr").children().eq(4).find("span:last-child").text();
		if(lblcurrency == "ដុល្លារ"){
			$("#lblcurrency").attr("var","true");
		}
		else{
			$("#lblcurrency").attr("var","false");
		}
		_tempmoney = removeCommar($(this).closest("tr").children().eq(5).find("span:first-child").text()); 
		$("#lblcurrency").text(lblcurrency);
		$("#lblunitname").text($(this).closest("tr").children().eq(3).find("span:last-child").text());
		
		$("#btnadd").attr("id","btnaddupdate");
	});
	
	// update import product
	$(document).on("click","#btnaddupdate", function(){
		var totalMoney = 0;
		if(validationInput())
			return;
		_thisRow.children().eq(0).html($("#proid").val());
		_thisRow.children().eq(2).html($("#proname").val());
		_thisRow.children().eq(3).html("<span>" + numberWithCommas($("#proqty").val()) + "</span><span class='pull-right'>"+ $("#lblunitname").text() + "</span>");
		_thisRow.children().eq(4).html("<span>" + numberWithCommas($("#costprice").val()) + "</span><span class='pull-right'>"+ $("#lblcurrency").text() + "</span>");
		_thisRow.children().eq(5).html("<span>" + numberWithCommas(($("#costprice").val() * $("#proqty").val()).toFixed(2)) + "</span><span class='pull-right'>"+ $("#lblcurrency").text() + "</span>");
		_thisRow.children().eq(7).html($("#unitQty").val());
		
		if($("#lblcurrency").attr("var") == "true"){
			totalMoney = Number(removeCommar($("#totalAmountIndollar").val())) - Number(_tempmoney) + Number(($("#costprice").val() * $("#proqty").val()));
			$("#totalAmountIndollar").val(numberWithCommas(totalMoney.toFixed(2)));
			$("#totalAmountInreil").val(numberWithCommas(totalMoney * _globalRate));
		}
		else{
			totalMoney = Number(removeCommar($("#totalAmountInreil").val())) - Number(_tempmoney) + Number(($("#costprice").val() * $("#proqty").val()));
			$("#totalAmountIndollar").val(numberWithCommas((totalMoney / _globalRate).toFixed(2)));
			$("#totalAmountInreil").val(numberWithCommas(totalMoney));
		}
		$("#frmAdd").find("input:text").val('');
		$("#frmAdd").find("input:hidden").val('');
		$("#lblcurrency").text("");
		$("#lblunitname").text("");
		$("#btnaddupdate").attr("id","btnadd");
	});
	
	// delete import product
	$(document).on("click","#btndelete", function(){
		if(confirm("លោកអ្នក ពិតជាចង់លុបទំនិញនេះចេញវិញ?")){
			if($(this).closest("tr").children().eq(4).find("span:last-child").text() == "ដុល្លារ"){
				var totalAmountIndollar = Number(removeCommar($("#totalAmountIndollar").val())) - Number(removeCommar($(this).closest("tr").children().eq(5).find("span:first-child").text()));
				
				$("#totalAmountIndollar").val(numberWithCommas(totalAmountIndollar.toFixed(2)));
				$("#totalAmountInreil").val((totalAmountIndollar * removeCommar($("#impRate").val())).toFixed(0));
			}else{
				var totalAmountInreil = Number(removeCommar($("#totalAmountInreil").val())) - Number(removeCommar($(this).closest("tr").children().eq(5).find("span:first-child").text()));
				$("#totalAmountIndollar").val(numberWithCommas((totalAmountInreil / removeCommar($("#impRate").val())).toFixed(2)));
				$("#totalAmountInreil").val(numberWithCommas(totalAmountInreil.toFixed(0)));
			}
			$(this).closest("tr").remove();
		}
	});
	
	// save import 
	$(document).on("click","#savebtn", function(){
		if($("#tbllistimport tr").length == 0){
			alert("លោកមិនមាន ទំនិញសំរាប់រក្សាទុកទេ");
			return;
		}
		var importDetail = [];
		$("#tbllistimport tr").each(function(){
			json = {
					"proId" : ($(this).find("td").eq(0).text()),
					"proQty": removeCommar($(this).find("td").eq(3).find("span:first-child").text()),
					"costPrice": removeCommar($(this).find("td").eq(4).find("span:first-child").text()),
					"unitQty" : removeCommar($(this).find("td").eq(7).text()),
					"totalAmount" : removeCommar($("#totalAmountIndollar").val()),
					"impRate" : removeCommar($("#impRate").val())
			};
			importDetail.push(json);
		});
		$.ajax({
			url: baseUrl + "/admin/importmg/saveimportpro",
			type: "POST",
			dataType: "JSON",
			data: JSON.stringify(importDetail),
			beforeSend: function(xhr) {
		            xhr.setRequestHeader("Accept", "application/json");
		            xhr.setRequestHeader("Content-Type", "application/json");
	        },
	        success: function(data){
				console.log(data);
				if(data==true){
					alert("ការនាំ ទំនិញចូលបានជោគជ័យ។");
				}else{
					alert("ការនាំ ទំនិញចូលមិនបានជោគជ័យ។ សូមព្យាយាមម្តងទៀត");
				}
	        },
			error:function(data, status,er){
				console.log("error: " + data + "status: " + status + "er: ");
			}
		});
	});
	
	// clear input text
	$(document).on("click","#canceladd", function(){
		$("#frmAdd").find("input:text").val('');
		$("#proname").focus();
		$("#btnaddupdate").attr("id","btnadd");
	});
	
	// get all product for set auto completed
	function setAutoCompleteProduct(){
		 $.ajax({ 
			    url: baseUrl + "/admin/productmg/listproductsautocomplete", 
			    type: 'GET', 
			    beforeSend: function(xhr) {
             xhr.setRequestHeader("Accept", "application/json");
             xhr.setRequestHeader("Content-Type", "application/json");
         },
			    success: function(data) {
			       console.log(data); 
			       var availableTags=[];
			       for(i=0; i<data.allObject.length; i++)
						{							
			    	   availableTags[i]= 
						         {
						         	"label": data.allObject[i].proname,
									"dataid": data.allObject[i].proid,
									"dataqty": data.allObject[i].qty,
									"datacurrentcy": data.allObject[i].currentcy,
									"dataunitname": data.allObject[i].unitname
						         };
						}
			       $("#proname" ).autocomplete({
			    	   select: function(event, ui){
			    		   $("#proid").val(ui.item.dataid);
			    		   $("#unitQty").val(ui.item.dataqty);
			    		   if(ui.item.datacurrentcy == true)
			    			   $("#lblcurrency").text("ដុល្លារ");
			    		   else
			    			   $("#lblcurrency").text("រៀល");
			    		   $("#lblcurrency").attr('var',ui.item.datacurrentcy);
			    		   $("#lblunitname").text(ui.item.dataunitname);
			    	   },
			    	   maxShowItems: 8,
			           source: availableTags
			       });
			       $(".ui-autocomplete").css("position", "absolute");
				   $(".ui-autocomplete").css("z-index", "2147483647");
			    },
			    error:function(data,status,er) {
			        console.log("error: "+data+" status: "+status+" er:"+er);
			    }
			});
			return ;
	 }
	
	// validation not empty data
	function validationInput() {
		if($("#proname").val() == ""){
			alert("សូមបញ្ចូល ឈ្មោះទំនិញ។");
			$("#proname").focus();
			return true;
		}
		if($("#proid").val() == ""){
			alert("ឈ្មោះទំនិញ មិនត្រឹមត្រូវ។");
			$("#proname").focus();
			return true;
		}
		if($("#proqty").val() == ""){
			alert("សូមបញ្ចូល ចំនួនទំនិញ។");
			$("#proqty").focus();
			return true;
		}
		if($("#costprice").val() == ""){
			alert("សូមបញ្ចូល តំលៃដើម។");
			$("#costprice").focus();
			return true;
		}
		return false;
	}
	
	// get import deatail
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
	        	$("#totalAmountIndollar").val(numberWithCommas(data.importDetail[0].impamount));
	        	$("#totalAmountInreil").val(numberWithCommas((data.importDetail[0].impamount * data.importDetail[0].imprate).toFixed(0)));
	        	$("#impRate").val(numberWithCommas(data.importDetail[0].imprate));
	        	_globalRate = data.importDetail[0].imprate;
	        },
			error:function(data, status,er){
				console.log("error: " + data + "status: " + status + "er: ");
			}
		});
	} 
});

