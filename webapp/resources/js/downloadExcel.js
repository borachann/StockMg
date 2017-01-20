$(document).ready(function(){
	try{
	var excelDownloadHtml = "<div style='display:none;' id='_jexGridExcelDown'>";
	excelDownloadHtml += "<form method='post' enctype='multipart/form-data' name='_jexGridDownloadForm' id='_jexGridDownloadForm' action='excels/excel_download.jsp' target='_jexGridDownloadIfrm'>";
	excelDownloadHtml += "<textarea name='json' id='json'></textarea>";
	excelDownloadHtml += "</form>";
	excelDownloadHtml += "<iframe name='_jexGridDownloadIfrm' id='_jexGridDownloadIfrm' style='width:0px; height:0px;display:none'/";
	excelDownloadHtml += "</div>";
	$("body").append(excelDownloadHtml);
	}catch(e){};
	
	$(document).on("click","#downloadExcel", function(){
		
	});
	
	var headerName = [];
	var headerId = [];
	var headerCnt = 0;
	var header = [];
	var _grid;
	
	headerName = ["លេខរៀង","ឈ្មោះ","លេខទូរស័ព្ទ","ឤស័យដ្ឋាន"];
	headerId = ["cusid","cusname","phone_numer","address"];
	headerCnt = 4;
	for(var k=0; k<headerCnt; k++){
		header.push({
			key : headerId[k],
			name: headerName[k],
			width: 80,
			colClass:''
		});
	}
	
	_grid = makeGrid(header);
	
	var temREC = [{
					"phone_numer": "01000",
					"address": "11111",
					"cusname": "bora",
					"cusid": 6
				},
				{
					"phone_numer": "098497244",
					"address": "phnom penh",
					"cusname": "bora test",
					"cusid": 2
				},
				{
					"phone_numer": "0101010",
					"address": "2020",
					"cusname": "chann sss",
					"cusid": 4
				}];
	
	_grid.dataMgr.set(temREC);
	excelDownload(_grid,"customers","N");
	
	

	
	
	
	function makeGrid(header){
		$("body").append("div id='grid' style='display:none'></div>");
		var _grid = JGM.create("Grid", {container:document.getElementById("grid"), colDefs:header});
		return _grid;
	}
	function excelDownload(downGrid, title, showDateYn){
		showDateYn = jex.null2Void(showDateYn, "Y");
		var orgGrid = downGrid;
		var jgridDownload = {};
		jgridDownload.fileTitle = {
				title: jex.null2Void(title,""), details:[]
		};
	}
	if(!!orgGrid.fileTitle){
		jgridDownload.fileTitle.title = orgGrid.fileTitle.title;
		for(var key in orgGrid.fileTitle.details){
			if(!!orgGrid.fileTitle.details[key].key){
				jgridDownload.fileTitle.details.push({
					key:orgGrid.fileTitle.details[key].key,
					value:orgGrid.fileTitle.details[key].value
				});
			}
		}
	}
	
	var _datalist = orgGrid.dataMgr.datalist;
	var _datalistlength = _datalist.length;
	
	if(_datalist.length == 0){
		alert("No items to save. Please check the storage item.");
		return false;
	}
	
	var orgColDef = orgGrid.colDefMgr.getAll();
	var _colDefList = [];
	for(var i=0; i<orgColDef.lenght; i++){
		if(orgColDef[i].key == "checkbox" || orgColDef[i].hidden){
			continue;
		}
		
		_colDefList.push({
			gridunqid : String(i),
			name : orgColDef[i].name,
			key : orgColDef[i].key,
			width : orgColDef[i].width,
			sumRenderer: !!orgColDef[i].sumRenderer?true:false,
			renderer : orgColDef[i].renderer,
			excelFormat : orgColDef[i].excelFormat
		});
	}
	
	var _colDefLength = _colDefList.length;
	var _saveDatalist = [];
	var _saveDatarow;
	var pattern = /(<([^>]+>)/gi;
	for(var i=0; i<_datalistlength; i++){
		_saveDatarow = {};
		for(var j=0; j<_colDefLength; j++){
			var _cellValue;
			if(!!_colDefList[j].renderer){
				try{
					var tempValue = _datalist[i][_colDefList[j].key];
					if(tempValue == null || tempValue == undefined || tempValue == "" || tempValue == "undefined"){
						tempValue = "";
					}
					_cellValue = _colDefList[j].renderer(tempValue , i , j , _datalist[i] , _colDefList[j]);
					if(_cellValue == null || _cellValue == undefined || _cellValue == "" || _cellValue == "undefined"){
						_cellValue = "";
					}else{
						if(typeof _cellValue == "string"){
							_cellValue = _cellValue.replace(pattern, "").replace(/&nbsp;/ig, " "); 	
						}
					}
				}catch(e){
					_cellValue = "";
				}
			}else{
				_cellValue = _datalist[i][ _colDefList[j].key ];
			}
			if (_colDefList[j].excelFormat == "int"){
				if((typeof _cellValue) == "string"){
					_cellValue = parseInt(_cellValue.replace(/,/g,"").replace("\\(", "").replace("\\)", ""));
				}
			}
			_saveDatarow["A"+j] = _cellValue==undefined?"":_cellValue;
		}
		_saveDatalist.push(_saveDatarow);
	}
	var result = {
			colDef:_colDefList,
			data:_saveDatalist,
			title:jgridDownload.fileTitle,
			showDate: showDateYn
		};
		
	$("#_jexGridDownloadForm").find("#json").val( encodeURI(JSON.stringify(result)) );
	$("#_jexGridDownloadForm").submit();
});