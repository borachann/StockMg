// set order list #	
	var check = true;
	var b = true;
	var s = false;
	
	function getAllCurrentObject(currentPage){
		var json ={
				"schStrName" : $("#schStrName").val(),
				"currentPage": currentPage,
				"perPage": $("#PER_PAGE").val()
		};
		$.ajax({
			url: baseUrl + url,
			type: "GET",
			data: json,
			beforeSend: function(xhr){
				xhr.setRequestHeader("Accept", "application/json");
				xhr.setRequestHeader("Content-Type", "application/json");
			},
			success: function(data){
				 console.log(data);
				if(data.allObject.length >0){
					$("#tblList").html("");
					setOrderList(data, data.allObject);
					$("#tblListTem").tmpl(data.allObject).appendTo("#tblList");
				}else{
	                $("#tblList").html("<tr><td colspan='"+ col + "' class='text-center'>គ្មានទិន្ន័យ</td</tr>");
	                data.pagination.totalPages = 1;
				}
				if(check) {
                    setPagination(data.pagination.totalPages, 1);
                    check = false;
                }
			},
			error: function(data, status, er){
				console.log("error: " + data + ", status :" + status + ", er: " + er);
			}
		});
	}
	
	function setOrderList(data,value){
		for(i=0; i<value.length; i++){
			if (b) {
				order = data.pagination.perPage * (data.pagination.currentPage - 1);
				j = order + 1;
				value[i]["order"] = j;
				b = false;
			} else
				value[i]["order"] = ++j;
			}
		b = true;
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
			getAllCurrentObject(currentPage);
		});
	};
	// pagination change
	$(document).on('change','#PER_PAGE', function(){
		check = true;
		getAllCurrentObject(1);
	});
	
	// search category name
	$(document).on("click","#btnSchStrName", function(){
		check = true;
		getAllCurrentObject(1);
	});
	$(document).on("keypress","#schStrName", function(e){
		if (e.keyCode == 13) {
			check = true;
			getAllCurrentObject(1);
	    }
	});
	// pop up for add unit
	$(document).on("click","#popUpAddNew", function(){
		$('#form_add').modal({
			"backdrop" : "static"
		});
	});
	
	// btncancel to close the form add unit pop up
	$(document).on("click","#btn_cancel", function() {
		$('#form_add').modal('hide');
	});
	
	// validation input number only
	$(document).on('keypress','.numOnly', function(e){

		if((e.keyCode == 8) || (e.keyCode == 46) || ((e.keyCode >=37) && (e.keyCode <= 40)))
			return ;
		var data = String.fromCharCode(e.which);	
		if(e.keyCode == 44)
			$(this).val($(this).val() + ".");
		var reg = new RegExp('^[0-9]+$');
	    if(!reg.test(data)){
	    	e.preventDefault();
		}
	});	
	
	// validate not empty
	/*function notEmpty(){
		$('.notEmpty').each(function(){
		    if($(this).val() == ""){
		    	return false;
		    }
		});
		return true;
	}*/
