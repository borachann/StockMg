<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Category Management</title>
<%@ include file="/WEB-INF/views/includeheader.jsp" %>
<script src="${pageContext.request.contextPath}/resources/js/category.js"></script>
</head>
<body>
	<div class="container">
		<h2>Form Category</h2>
	  
		<form class="form-horizontal" id="frmAddCategory"  method="POST" action="#">
				<div class="form-group ">
	            	<label for="catId" class="control-label col-lg-2">Category ID</label>
	            	<div class="col-lg-10">
	                	<input class=" form-control" id="catId" name="catId" type="text">
	             	</div>
	            </div>
	            <div class="form-group ">
	            	<label for="catName" class="control-label col-lg-2">Category Name *</label>
	            	<div class="col-lg-10">
	                	<input class=" form-control" id="catName" name="catName" type="text">
	             	</div>
	            </div>
	  	</form>
	</div>
	<div align="center">
		<button type="button" id="btnCatAdd" class="btn btn-primary">Add</button>
		<button type="button" id="btnCatDelete" class="btn btn-danger">Delete</button>
		<button type="button" id="btnCatSearch" class="btn btn-info">Search</button>
		<button type="button" id="btnCatUpdate" class="btn btn-warning">Update</button>
	</div>
</body>
</html>