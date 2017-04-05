// set order list #	
	var check = true;
	var b = true;
	var s = false;
	
	//get globalRate;
	function getGlobalRate(){
		$.ajax({
			url: baseUrl + "/admin/dashboard/getrate",
			type: "GET",
			success: function(data){
				if(data.rate != undefined){
					$("#globalRate").val(data.rate.rateMoney);
				}
			},
			error: function(data, error, status){
				console.log("data: " , data, " error: ", error, " status: ", status );
			}
		});
	}
	
	// set all object to tmpl
	function getAllCurrentObject(currentPage){
		var json ={
				"schStrName" : $("#schStrName").val() || "",
				"currentPage": currentPage,
				"startDate": $("#sDate").val() || "",
				"endDate": $("#eDate").val() || "",
				"perPage": $("#PER_PAGE").val()
		};
		console.log(json);
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
	
	//set order list of table
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
	
	// formate number with commar
	function numberWithCommas(numberToFormat){
		if(numberToFormat == null || numberToFormat == "") return "";
		return numberToFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
	
	// removeCommar
	function removeCommar(str){		
		return str.replace(/,/g,"");
	}

	// fold and unfold
	$(document).on("click","#fullscreen", function(){
		$("#leftside").toggle();
		if($(this).hasClass("lnb_unfold")){
			$("#maincontain").removeClass("col-md-9 col-md-offset-3 col-sm-8 col-sm-offset-4");
			$(this).removeClass("lnb_unfold");
			$(this).addClass("lnb_fold");
		}
		else{
			$("#maincontain").addClass("col-md-9 col-md-offset-3 col-sm-8 col-sm-offset-4");
			$(this).removeClass("lnb_fold");
			$(this).addClass("lnb_unfold");
		}
	});