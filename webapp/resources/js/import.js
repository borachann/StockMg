$(document).ready(function(){
	$("#sideBarImport").addClass("active");
	setCalendar();
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