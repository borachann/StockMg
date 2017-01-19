$(document).ready(function(){
	$("#sideBarExpense").addClass("active");

	url = "/admin/expensemg/getexpensepro";
	col = 4;
	// get global rate
	getGlobalRate();
	
	var _thisRow;
	var _globalRate;
	var _tempmoney;
	var _oldSubTotal;
	
	// set calendar
	setCalendar();
	
	// get import products
	//getAllCurrentObject(1);
	
	// add import list to temporary 
	$(document).on("click","#btnadd", function(){
		var _isExist = false;
		var _moneyInDollar = removeCommar($("#totalAmountIndollar").val()) || 0 ;
		var _moneyInRiel = removeCommar($("#totalAmountInreil").val()) || 0;
		var _currentcyType = $("#currentcy option:selected").text();
		if(validationInput()) return;
		
		$("#tbllistimport tr").each(function(){
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
		st += "<tr><td>" + ($("#tbllistimport tr").length + 1) +"</td>"; 
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
				
		$("#tbllistimport").append(st);
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
			_oldSubTotal = Number(removeCommar($("#totalAmountIndollar").val())) - Number(_tempmoney);
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
		
		if($("#currentcy").val() == "true"){
			totalMoney = Number(_oldSubTotal + Number(($("#costprice").val() * $("#proqty").val())));
			$("#totalAmountIndollar").val(numberWithCommas(totalMoney.toFixed(2)));
			$("#totalAmountInreil").val(numberWithCommas(totalMoney * _globalRate));
		}
		else{
			totalMoney = Number(removeCommar($("#totalAmountInreil").val())) - Number(_oldSubTotal) + Number(($("#costprice").val() * $("#proqty").val()));
			$("#totalAmountIndollar").val(numberWithCommas((totalMoney / _globalRate).toFixed(2)));
			$("#totalAmountInreil").val(numberWithCommas(totalMoney.toFixed(0)));
		}
		$("#frmAdd").find("input:text").val('');
		$("#frmAdd").find("input:hidden").val('');
		$("#btnaddupdate").attr("id","btnadd");
	});
	
	// remove product from import detail list
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
					location.href = baseUrl + "/admin/importmg";
				}else{
					alert("ការនាំ ទំនិញចូលមិនបានជោគជ័យ។ សូមព្យាយាមម្តងទៀត");
				}
	        },
			error:function(data, status,er){
				console.log("error: " + data + "status: " + status + "er: ");
			}
		});
	});
	
	//get import detail 
	$(document).on("click","#tdimpdate",function(){
		var impId = $(this).parent().children().eq(0).text();
		var json = {"impId" : impId};
		$.ajax({
			url: baseUrl + "/admin/importmg/getimportdetail",
			type: "GET",
			data: json,
			beforeSend: function(xhr) {
		            xhr.setRequestHeader("Accept", "application/json");
		            xhr.setRequestHeader("Content-Type", "application/json");
	        },
	        success: function(data){
	        	for(i = 0; i< data.importDetail.length; i++){
	        		data.importDetail[i]["order"] = i + 1;
	        		data.importDetail[i]["proqty"] = numberWithCommas(data.importDetail[i]["proqty"]);
	        		data.importDetail[i]["unitprice"] = numberWithCommas(data.importDetail[i]["unitprice"]);
	        		data.importDetail[i]["total_amount"] = numberWithCommas(data.importDetail[i]["total_amount"]);
	        	}
	        	$("#tblimportdetail").html("");
	        	$("#tblListDetail").tmpl(data.importDetail).appendTo("#tblimportdetail");
	        	$("#totalAmountDetailIndollar").val(numberWithCommas(data.importDetail[0].impamount));
	        	$("#totalAmountDetailInreil").val(numberWithCommas((data.importDetail[0].impamount * data.importDetail[0].imprate).toFixed(0)));
	        	$("#impDetailRate").val(numberWithCommas(data.importDetail[0].imprate));
	        	
	        },
			error:function(data, status,er){
				console.log("error: " + data + "status: " + status + "er: ");
			}
		});
		
		$('#form_detail').modal({
			"backdrop" : "static"
		});
	});
	
	// clear input text
	$(document).on("click","#canceladd", function(){
		$("#frmAdd").find("input:text").val('');
		$("#proname").focus();
		$("#btnaddupdate").attr("id","btnadd");
	});
	
	// open popup for set auto complete
	$("#popUpAddNew").click(function(){
		_globalRate = $("#globalRate").val();
		$("#impRate").val(numberWithCommas(_globalRate));
	});
	
	// set start date focuse
	$(document).on("click", "#imgSDate", function(){
		$("#sDate").focus();
	});
	
	// set end date focuse
	$(document).on("click", "#mgEDate", function(){
		$("#eDate").focus();
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
	
	// set Calendar
	function setCalendar(){
		$("#sDate").datepicker({
			setDate: new Date(),
			changeMonth: true,
			changeYear: true,
			dateFormat: "yy-mm-dd",
			onClose: function( selectedDate ) {
				$("#eDate").datepicker("option", "minDate", selectedDate);
				getAllCurrentObject(1);
	      }
		});
		$("#eDate").datepicker({
			setDate: new Date(),
			changeMonth: true,
			changeYear: true,
			dateFormat: "yy-mm-dd",
			onClose: function( selectedDate ) {
				$("#sDate").datepicker("option", "maxDate", selectedDate);
				getAllCurrentObject(1);
	      }
		});
	$("#sDate").datepicker('setDate', moment().subtract(7, 'days').format('YYYY-MM-DD'));
	$("#eDate").datepicker('setDate', moment().format('YYYY-MM-DD'));
	}
	
});