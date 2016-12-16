$(document).ready(function(){
	$("#sideBarProduct").addClass("active");
	 url =  "/admin/productmg/listproducts";
	 col = 9;
	 
	 getAllCurrentObject(1); 
	
	//on close of the popup
	$('#form_add').on('hidden.bs.modal', function(event) {
				if(s) location.href = baseUrl + "/admin/productmg";
	});
	
	//add new product
	 $(document).on("click","#btnSubmit", function(){
		 
		 if($("#proname").val() == ""){
			 alert("សូមបញ្ចូល ឈ្មោះទំនិញ។");
			 return;
		 }
		 if($("#catName").val() == ""){
			 alert("សូមបញ្ចូល ប្រភេទទំនិញ។");
			 return;
		 }
		 if($("#catId").val() == ""){
			 alert("ឈ្មោះប្រភេទទំនិញ មិនត្រឹមត្រូវ។");
			 return;
		 }
		 if($("#unitname").val() == ""){
			 alert("សូមបញ្ចូល ប្រភេទឯកតា។");
			 return;
		 }
		 if($("#unitId").val() == ""){
			 alert("ឈ្មោះប្រភេទឯកតា មិនត្រឹមត្រូវ។");
			 return;
		 }
		 var json = {
			"proName" : $("#proname").val(),
			"catId" : $("#catId").val(),
			"unitId" : $("#unitId").val(),
			"proQty" : ($("#proqty").val() * $("#unitQty").val()) || 0,
			"costPrice" : $("#costprice").val() || 0,
			"unitPrice" : $("#unitprice").val() || 0,
			"salePrice" : $("#saleprice").val() || 0,
			"currentcy" : ($("input[name='currentcy']:checked").val() == "true")? true : false,
			"status" : true,
			"imgUrl" : ""
		 };
		 $.ajax({
			url : baseUrl + "/admin/productmg/addproduct",
			type : 'POST',
			data : JSON.stringify(json),
			beforeSend : function(xhr){
				xhr.setRequestHeader("Accept", "application/json");
				xhr.setRequestHeader("Content-Type", "application/json");
			},
			success: function(data){
				s = true;
				if(data){
	        		  alert("បង្កើត មុខទំនិញថ្មី បានជោគជ័យ។");
	        		  $("#frmAdd").find("input:text").val('');
	        		  $("#imgurl").val("");
	        		  $("#dollar").attr("checked","checked");
	        	  }else{
	        		  alert("បង្កើត មុខទំនិញថ្មី មិនបានជោគជ័យ។");
	        	  }
			},
			Error : function(data, status, error){
				console.log("data " , data, " status ", status , " error " , error);
			}
		 });
	 });
	 
	 // to data for auto complete
	 $("#popUpAddNew").click(function(){
		 setAutoCompleteCategory();
		 setAutoCompleteUnit();
	 });
	 
	 // get all object of category
	 function setAutoCompleteCategory(){
		 $.ajax({ 
			    url: baseUrl + "/admin/categorymg/getallcategory", 
			    type: 'GET', 
			    beforeSend: function(xhr) {
                 xhr.setRequestHeader("Accept", "application/json");
                 xhr.setRequestHeader("Content-Type", "application/json");
             },
			    success: function(data) { 
			       console.log(data); 
			       var availableTags=[];
			       for(i=0; i<data.category.length; i++)
						{							
			    	   availableTags[i]= 
						         {
						         	"label": data.category[i].catname,
									"dataid": data.category[i].catid 
						         };
						}
			       $("#catName" ).autocomplete({
			    	   select: function(event, ui){
			    		   $("#catId").val(ui.item.dataid);
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
	 
	 // get all objects of unit
	 function setAutoCompleteUnit(){
		 $.ajax({ 
			    url: baseUrl + "/admin/unitmg/getallunit", 
			    type: 'GET', 
			    beforeSend: function(xhr) {
              xhr.setRequestHeader("Accept", "application/json");
              xhr.setRequestHeader("Content-Type", "application/json");
          },
			    success: function(data) { 
			       console.log(data); 
			       var availableTags=[];
			       for(i=0; i<data.unit.length; i++)
						{							
			    	   availableTags[i]= 
						         {
						         	"label": data.unit[i].unitname,
									"dataid": data.unit[i].unitid,
									"dataqty": data.unit[i].qty
						         };
						}
			       $("#unitname" ).autocomplete({
			    	   select: function(event, ui){
			    		   $("#unitId").val(ui.item.dataid);
			    		   $("#unitQty").val(ui.item.dataqty);
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
	 $("#imgurl").change(function(){		
			$("#frmAdd").ajaxSubmit({
				url: baseUrl + "/admin/fileupload/images",
				dataType: 'JSON', 
				type: 'POST',
				success: function(data) { 
					console.log(data);
			        if(data){
			        	$("#images_sample").attr("src", baseUrl + "/resources/images/products/"+data.IMAGE);
			        	$("#images_sample").show();
			        	$("#image").val(data.IMAGE);
			        	//alert('YOU HAVE BEEN INSERTED SUCCESSFULLY.');
			        }else{
			        	//alert('YOU HAVE ERRORS WHEN INSERT NEW PRODUCT.');
			        }
			    },
			    error:function(data,status,er) { 
			        console.log("error: "+data+" status: "+status+" er:"+er);
			    }
			});
		});
});