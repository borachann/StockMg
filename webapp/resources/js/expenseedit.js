$(document).ready(function(){
	$("#sideBarExpense").addClass("active");

	// get global rate
	getGlobalRate();
	
	//get import detail 
	getImportDetail();
	
	var _thisRow;
	var _globalRate;
	var _tempmoney;
	var _oldSubTotal;
	
	
	// add import list to temporary 
	$(document).on("click","#btnadd", function(){
		var _isExist = false;
		var _moneyInDollar = removeCommar($("#totalAmountIndollar").val()) || 0 ;
		var _moneyInRiel = removeCommar($("#totalAmountInreil").val()) || 0;
		var _currentcyType = $("#currentcy option:selected").text();
		if(validationInput()) return;
		
		$("#tblexpensedetail tr").each(function(){
			if($(this).find("td").eq(1).text() == $("#proname").val()){
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
		st += "<tr><td>" + ($("#tblexpensedetail tr").length + 1) +"</td>"; 
		st += "<td>" + $("#proname").val() +"</td>";
		st += "<td>" + numberWithCommas($("#proqty").val()) + "</td>";
		st += "<td>" + "<span>" + numberWithCommas($("#costprice").val()) + "</span><span class='pull-right'>"+ _currentcyType + "</span>" +"</td>";
		if($("#currentcy").val() == "true")
			st += "<td><span>" + numberWithCommas(subTotal.toFixed(2)) + "</span><span class='pull-right'>"+ _currentcyType + "</span>" +"</td>";
		else
			st += "<td><span>" + numberWithCommas(subTotal.toFixed(0)) + "</span><span class='pull-right'>"+ _currentcyType + "</span>" +"</td>";
		st += "<td class='text-center'><a class='on-default edit-row' href= 'javascript:;' id='btnedit'><i class='fa fa-pencil'></i></a> | " +
				"<a href='javascript:;' class='on-default edit-row' id='btndelete'><i class='fa fa-trash '></i></a></td></tr>";
		
		if($("#currentcy").val() == "true"){
			_moneyInDollar = Number(_moneyInDollar) + Number(subTotal);
			$("#totalAmountIndollar").val(numberWithCommas(_moneyInDollar.toFixed(3)));
			$("#totalAmountInreil").val(numberWithCommas(_moneyInDollar * _globalRate));
		}
		else{
			_moneyInRiel = Number(_moneyInRiel) + Number(subTotal);
			$("#totalAmountIndollar").val(numberWithCommas((_moneyInRiel / _globalRate).toFixed(3)));
			$("#totalAmountInreil").val(numberWithCommas(_moneyInRiel));
		}
		
		$("#frmAdd").find("input:text").val('');
		$("#frmAdd").find("input:hidden").val('');
				
		$("#tblexpensedetail").append(st);
	});
	
	// edit import product
	$(document).on("click","#btnedit", function(){
		_thisRow = $(this).closest("tr");
		var lblcurrency;
		lblcurrency = $(this).closest("tr").children().eq(4).find("span:last-child").text(); // get the currency type
		$("#editcurrency").val(lblcurrency);
		$("#proname").val($(this).closest("tr").children().eq(1).text());
		$("#proqty").val(removeCommar($(this).closest("tr").children().eq(2).text()));
		$("#costprice").val(removeCommar($(this).closest("tr").children().eq(3).find("span:first-child").text()));
		
		_tempmoney = removeCommar($(this).closest("tr").children().eq(4).find("span:first-child").text()); // get the sub total
		if(lblcurrency == "ដុល្លារ"){
			$("#currentcy option[value='true']").prop("selected", "selected");
			_oldSubTotal = (Number(removeCommar($("#totalAmountIndollar").val())) - Number(_tempmoney)).toFixed(3);
		}
		else{
			$("#currentcy option[value='false']").prop("selected", "selected");
			_oldSubTotal = Number(removeCommar($("#totalAmountInreil").val())) - Number(_tempmoney);
		}
		alert("_oldSubTotal in edit mode: " + _oldSubTotal);
		$("#btnadd").attr("id","btnaddupdate");
	});
	
	// update import product
	$(document).on("click","#btnaddupdate", function(){
		var totalMoney = 0;
		if(validationInput())
			return;
		_thisRow.children().eq(1).html($("#proname").val());
		_thisRow.children().eq(2).html(numberWithCommas($("#proqty").val()));
		_thisRow.children().eq(3).html("<span>" + numberWithCommas($("#costprice").val()) + "</span><span class='pull-right'>"+ $("#currentcy option:selected").text() + "</span>");
		_thisRow.children().eq(4).html("<span>" + numberWithCommas(($("#costprice").val() * $("#proqty").val()).toFixed(2)) + "</span><span class='pull-right'>"+ $("#currentcy option:selected").text() + "</span>");
		
		if($("#editcurrency").val() != $("#currentcy option:selected").text()){
			if($("#editcurrency").val() == "រៀល")
				_oldSubTotal = Number(_oldSubTotal) / _globalRate ;
			else
				_oldSubTotal = Number(_oldSubTotal) * _globalRate ;
			alert("_oldSubTotal in update mode: " + _oldSubTotal);
		}
		alert("_oldSubTotal in update mode1: " + _oldSubTotal);
		
			totalMoney = Number(_oldSubTotal + Number(($("#costprice").val() * $("#proqty").val())));
		if($("#currentcy").val() == "true"){
			$("#totalAmountIndollar").val(numberWithCommas(totalMoney.toFixed(3)));
			$("#totalAmountInreil").val(numberWithCommas(totalMoney * _globalRate));
		}
		else{
			//totalMoney = Number(removeCommar($("#totalAmountInreil").val())) - Number(_oldSubTotal) + Number(($("#costprice").val() * $("#proqty").val()));
			$("#totalAmountIndollar").val(numberWithCommas((totalMoney / _globalRate).toFixed(3)));
			$("#totalAmountInreil").val(numberWithCommas(totalMoney.toFixed(0)));
		}
		$("#frmAdd").find("input:text").val('');
		$("#frmAdd").find("input:hidden").val('');
		$("#btnaddupdate").attr("id","btnadd");
	});
	
	// remove product from import detail list
	$(document).on("click","#btndelete", function(){
		if(confirm("លោកអ្នក ពិតជាចង់លុបទំនិញនេះចេញវិញ?")){
			if($(this).closest("tr").children().eq(3).find("span:last-child").text() == "ដុល្លារ"){
				var totalAmountIndollar = Number(removeCommar($("#totalAmountIndollar").val())) - Number(removeCommar($(this).closest("tr").children().eq(4).find("span:first-child").text()));
				
				$("#totalAmountIndollar").val(numberWithCommas(totalAmountIndollar.toFixed(2)));
				$("#totalAmountInreil").val((totalAmountIndollar * removeCommar($("#impRate").val())).toFixed(0));
			}else{
				var totalAmountInreil = Number(removeCommar($("#totalAmountInreil").val())) - Number(removeCommar($(this).closest("tr").children().eq(4).find("span:first-child").text()));
				$("#totalAmountIndollar").val(numberWithCommas((totalAmountInreil / removeCommar($("#impRate").val())).toFixed(2)));
				$("#totalAmountInreil").val(numberWithCommas(totalAmountInreil.toFixed(0)));
			}
			$(this).closest("tr").remove();
		}
	});
	
	// cancel import list
	$(document).on("click","#cencelBtn", function(){
		if($("#tbllistimport tr").length != 0){
			if(confirm("លោកអ្នក ពិតជាចង់លុបចោលនៃការនាំទំនិញនេះ?")){
				$("#tbllistimport").html("");
				$('#form_add').modal('hide');
			}
		}else{
			$('#form_add').modal('hide');
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
					"expQty": removeCommar($(this).find("td").eq(2).text()),
					"unitPrice": removeCommar($(this).find("td").eq(3).find("span:first-child").text()),
					"totalAmount" : removeCommar($("#totalAmountIndollar").val()),
					"expRate" : removeCommar($("#impRate").val()),
					"description" : "",
					"proName" : $(this).find("td").eq(1).text(),
					"currentcy" : ($(this).find("td").eq(3).find("span:last-child").text() == "ដុល្លារ") ? true : false
			};
			importDetail.push(json);
		});
		$.ajax({
			url: baseUrl + "/admin/expensemg/saveExpense",
			type: "POST",
			dataType: "JSON",
			data: JSON.stringify(importDetail),
			beforeSend: function(xhr) {
		            xhr.setRequestHeader("Accept", "application/json");
		            xhr.setRequestHeader("Content-Type", "application/json");
	        },
	        success: function(data){
				if(data==true){
					alert("ការចំនាយបានរក្សាទុកជោគជ័យ។");
					location.href = baseUrl + "/admin/expensemg";
				}else{
					alert("ការចំនាយបានរក្សាទុក មិនបានជោគជ័យ។ សូមព្យាយាមម្តងទៀត");
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
	
	
	// validation not empty data
	function validationInput() {
		if($("#proname").val() == ""){
			alert("សូមបញ្ចូល ឈ្មោះទំនិញ។");
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
	
	//get import detail 
	function getImportDetail(){
		var expId = $("#editExpId").val();
		var json = {"expId" : expId};
		$.ajax({
			url: baseUrl + "/admin/expensemg/getexpensedetail",
			type: "GET",
			data: json,
			beforeSend: function(xhr) {
		            xhr.setRequestHeader("Accept", "application/json");
		            xhr.setRequestHeader("Content-Type", "application/json");
	        },
	        success: function(data){console.log(data);
	        	for(i = 0; i< data.expensedetail.length; i++){
	        		data.expensedetail[i]["order"] = i + 1;
	        		data.expensedetail[i]["expqty"] = numberWithCommas(data.expensedetail[i]["expqty"]);
	        		data.expensedetail[i]["unitprice"] = numberWithCommas(data.expensedetail[i]["unitprice"]);
	        		data.expensedetail[i]["total_amount"] = numberWithCommas(data.expensedetail[i]["total_amount"]);
	        	}
	        	$("#tblexpensedetail").html("");
	        	$("#tblListDetail").tmpl(data.expensedetail).appendTo("#tblexpensedetail");
	        	$("#totalAmountIndollar").val(numberWithCommas(data.expensedetail[0].expamount));
	        	$("#totalAmountInreil").val(numberWithCommas((data.expensedetail[0].expamount * data.expensedetail[0].exprate).toFixed(0)));
	        	$("#impRate").val(numberWithCommas(data.expensedetail[0].exprate));
	        	
	        },
			error:function(data, status,er){
				console.log("error: " + data + "status: " + status + "er: ");
			}
		});
		
		$('#form_detail').modal({
			"backdrop" : "static"
		});
	}
});