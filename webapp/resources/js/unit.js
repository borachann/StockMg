$(document).ready(function(){
	 url =  "/admin/unitmg/listunit";
	 col = 6;

	$("#sideBarUnit").addClass("active");
	
	getAllCurrentObject(1); 
	


	// on close of the popup
	$('#form_add').on('hidden.bs.modal', function(event) {
			if(s) location.href = baseUrl + "/admin/categorymg";
	});
	
	//$("#btnUnitAdd").submit(function(e){
	$(document).on("submit","#frmAddUnit",function(e){
		e.preventDefault();
		$("#frmAddUnit").ajaxSubmit({
			url: baseUrl + "/admin/unitmg/insertunit",
			dataType: 'JSON',
			type: 'POST',
			success: function(data) {
			    console.log(data);
			    /*if (data) {
			        alert('YOU HAVE BEEN UPDATED SUCCESSFULLY.');
			        location.href = "${pageContext.request.contextPath}/admin/products";
			    } else {
			        alert('YOU HAVE ERRORS WHEN UPDATED EXISING PRODUCT.');
			    }*/
			},
			error: function(data, status, er) {
			    console.log("error: " , data + " status: " , status , " er:" , er);
			}
			});
	});
});