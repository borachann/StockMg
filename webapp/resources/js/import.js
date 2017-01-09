$(document).ready(function(){
	$("#sideBarImport").addClass("active");
	
	// set calendar
	setCalendar();
	
	// add import list to temporary 
	$(document).on("click","#btnadd", function(){
		if($("#proname").val() == ""){
			alert("សូមបញ្ចូល ឈ្មោះទំនិញ។");
			$("#proname").focus();
			return;
		}
		/*if($("#proid").val() == ""){
			alert("ឈ្មោះទំនិញ មិនត្រឹមត្រូវ។");
			return;
		}*/
		if($("#proqty").val() == ""){
			alert("សូមបញ្ចូល ចំនួនទំនិញ។");
			$("#proqty").focus();
			return;
		}
		if($("#costprice").val() == ""){
			alert("សូមបញ្ចូល តំលៃដើម។");
			$("#costprice").focus();
			return;
		}
		var st = "";
		st += "<tr><td style='display: none;'>" + $('#proid').val() +"</td>";
		st += "<td>" + ($("#tbllistimport tr").length + 1) +"</td>"; 
		st += "<td>" + $("#proname").val() +"</td>";
		st += "<td>" + numberWithCommas($("#proqty").val()) +"</td>";
		st += "<td>" + numberWithCommas($("#costprice").val()) +"</td>";
		st += "<td class='text-center'><a href= 'javascript:;' id='btnedit'>Edit</a> | <a href='javascript:;' id='btndelete'>Delete</a></td></tr>";
		$("#frmAdd").find("input:text").val('');
		$("#tbllistimport").append(st);
	});
	
	// edit import product
	$(document).on("click","#btnedit", function(){alert(parent().children().eq(0).text());
		$("#proid").val($(this).parent().children().eq(0).text());
		$("#proname").val($(this).parent().children().eq(2).text());
		$("#proqty").val($(this).parent().children().eq(3).text());
		$("#costprice").val($(this).parent().children().eq(4).text());
	});
	
	
	// save import 
	$(document).on("click","#savebtn", function(){
		
	});
	
	// clear input text
	$(document).on("click","#canceladd", function(){
		$("#frmAdd").find("input:text").val('');
		$("#proname").focus();
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function setCalendar(){
		$("#sDate").datepicker({
			setDate: new Date(),
			changeMonth: true,
			changeYear: true,
			dateFormat: "yy-mm-dd",
			onClose: function( selectedDate ) {
				//$("#eDate").datepicker("option", "minDate", selectedDate);
	      }
		});
		$("#eDate").datepicker({
			setDate: new Date(),
			changeMonth: true,
			changeYear: true,
			dateFormat: "yy-mm-dd",
			onClose: function( selectedDate ) {
				//$("#sDate").datepicker("option", "maxDate", selectedDate);
	      }
		});
	$("#sDate").datepicker('setDate', moment().subtract(7, 'days').format('YYYY-MM-DD'));
	$("#eDate").datepicker('setDate', moment().format('YYYY-MM-DD'));
	}
});