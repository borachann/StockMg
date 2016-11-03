
$(document).ready(function(){
	var check = true;
	var b = true;
	// List All Category
	getAllCategroy(1);
	
	// add class for left side bar
	$("#sideBarCategory").addClass("active");
	
	// pop up for add category
	$("#catAddNew").click(function(){
		$('#form_add_category').modal({
			"backdrop" : "static"
		});
	});
	
	// btncancel to close the form add category pop up
	$("#btn_cancel").click(function() {
		$('#form_add_category').modal('hide');
	});
	
	// on close of the popup
	$('#form_add_category').on('hidden.bs.modal', function(event) {
					location.href = baseUrl + "/admin/categorymg";
			});
	
	// pagination change
	$("#PER_PAGE").change(function() {
		check = true;
		getAllCategroy(1);
	});
	
	// add new category
   $("#btnCatAdd").click(function(){
	   var json = {
			   "catName" : $("#catName").val(),
			   "status" : true
	   }
	   $.ajax({
		  url : baseUrl + "/admin/categorymg/insertcategory",
		  type: "POST",
		  data: JSON.stringify(json),
		  beforeSend: function(xhr) {
              xhr.setRequestHeader("Accept", "application/json");
              xhr.setRequestHeader("Content-Type", "application/json");
          },
          success: function(data) {
        	  if(data){
        		  alert("បង្កើត ប្រភេទទំនិញថ្មី បានជោគជ័យ។");
        		  $("#catName").val("");
        	  }else{
        		  alert("បង្កើត ប្រភេទទំនិញថ្មី មិនបានជោគជ័យ។");
        	  }
          },
          error: function(data, status, er){
        	  console.log("error : " + data + " status : " + status + " er : " + er );
          }
	   });
   });
   
   // delete category
   $("#btnCatDelete").click(function(){
	   $.ajax({
		  url : baseUrl + "/admin/categorymg/deletecategory/" + $("#catId").val(),
		  type: "GET",
		  beforeSend: function(xhr){
			  xhr.setRequestHeader("Accept", "application/json");
			  xhr.setRequestHeader("Content-Type", "application/json");
		  },
		  success: function(data){
			  console.log(data);
		  },
		  error: function(data, status, er){
			console.log("error : " + data + " status : " + status + " er " + er);  
		  }
	   });
   });
   
   // search category
   $("#btnCatSearch").click(function(){
	   $.ajax({
		  url : baseUrl + "/admin/categorymg/searchcategory/" + $("#catId").val(),
		  type: "GET",
		  beforeSend: function(xhr){
			  xhr.setRequestHeader("Accept", "application/json");
			  xhr.setRequestHeader("Content-Type", "application/json");
		  },
		  success: function(data){
			  console.log(data);
		  },
		  error: function(data, status, er){
			console.log("error : " + data + " status : " + status + " er " + er);  
		  }
	   });
   });
   
   // update category
   $("#btnCatUpdate").click(function(){
	   var json = {
			   "catName" : $("#catName").val(),
			   "status" : false
	   }
	  $.ajax({
		  url : baseUrl + "/admin/categorymg/updatacategory/" +  $("#catId").val(),
		  type: "POST",
		  data: JSON.stringify(json),
		  beforeSend: function(xhr){
			  xhr.setRequestHeader("Accept", "application/json");
			  xhr.setRequestHeader("Content-Type", "application/json");
		  },
		  success: function(data){
			  console.log(data);
		  },
		  error: function(data, status, er){
			  console.log("error : " + data + " status :" + status + "er : " + er);
		  }
	  }) 
   });
// list all category
	function getAllCategroy(currentPage){
		var json = {
		        "currentPage": currentPage,
		        "perPage": $("#PER_PAGE").val()
		    };
		
		$.ajax({
			url : baseUrl + "/admin/categorymg/listcategory",
			type: "GET",
			data: json,
			beforeSend: function(xhr) {
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("Content-Type", "application/json");
            },
			success: function(data) {
				if(data.allCategory.length >0){
					$("#tblCatList").html("");
					setOrderList(data);
					$("#tblCatListTem").tmpl(data.allCategory).appendTo("#tblCatList");
				}else{
	                $("tbody#CONTENTS").html('<tr>NO CONTENTS</tr>');
				}
				if(check) {
                    setPagination(data.pagination.totalPages, 1);
                    check = false;
                }
	          },
	          error: function(data, status, er){
	        	  console.log("error : " + data + " status : " + status + " er : " + er );
	          }
	          
		});
	}
// function for set pagination
	setPagination = function(totalPage, currentPage) {
		$('#PAGINATION').bootpag({
			total : totalPage,
			page : currentPage,
			maxVisible : 10,
			leaps : true,
			firstLastUse : true,
			first : 'First',
			last : 'Last',
			wrapClass : 'pagination',
			activeClass : 'active',
			disabledClass : 'disabled',
			nextClass : 'next',
			prevClass : 'prev',
			lastClass : 'last',
			firstClass : 'first'
		}).on("page", function(event, currentPage) {
			check = false;
			getAllCategroy(currentPage);
		});
	};
// sert order list #	
	function setOrderList(value){
		if (b) {
			order = value.pagination.perPage * (value.pagination.currentPage - 1);
			j = order + 1;
			value["order"] = j;
			b = false;
		} else
			value["order"] = ++j;
		console.log(value);
	}
});

