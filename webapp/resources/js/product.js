$(document).ready(function(){
	$("#sideBarProduct").addClass("active");
	 url =  "/admin/productmg/listproducts";
	 col = 9;
	 
	 getAllCurrentObject(1); 
	 
	 $(document).on("click","#btnSubmit", function(){
		 var json = {
			"proname" : $("#proname").val(),
			"catid" : $("#catid").val(),
			"catunit" : $("#catunit").val(),
			"proqty" : $("#proqty").val() || 0,
			"costprice" : $("#costprice").val() || 0,
			"unitprice" : $("#unitprice").val() || 0,
			"saleprice" : $("#saleprice").val() || 0,
			"currentcy" : $("input[name='currentcy']:checked"). val(),
			"status" : true,
			"imgurl" : ""
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
				console.log(data);
			},
			Error : function(data, status, error){
				console.log("data " , data, " status ", status , " error " , error);
			}
		 });
	 });
	 $("#popUpAddNew").click(function(){
		 setAutoCompleteCategory();
		 setAutoCompleteUnit();
	 });
	 
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
									"dataid": data.unit[i].unitid 
						         };
						}
			       $("#unitname" ).autocomplete({
			    	   select: function(event, ui){
			    		   $("#unitId").val(ui.item.dataid);
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
});