<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.text.DateFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	DateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
	Date dateobj = new Date();
	String _sLocalTime = df.format(dateobj);
	
	HttpSession sessionUser = request.getSession();
	if(sessionUser.getAttribute("UserSession") == null){
		response.sendRedirect(request.getContextPath() + "/");
	}
%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
	<meta name="description" content="">
	<meta name="author" content="">
	<link rel="icon" href="">
	
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/bootstrap.min.css">
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/dashboard.css?<%=_sLocalTime%>">
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/font-awesome/css/font-awesome.min.css"/>
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/jquery-ui.css">
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/content.css?<%=_sLocalTime%>">
	
	<script>var baseUrl = "${pageContext.request.contextPath}"</script>
	<script src="${pageContext.request.contextPath}/resources/js/lib/angular.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/lib/jquery-1.11.2.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/lib/jquery.form.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/lib/bootstrap.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/lib/jquery.bootpag.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/lib/jquery.tmpl.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/lib/moment.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/lib/jquery-ui.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/lib/jquery.ui.autocomplete.scroll.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/lib/xregexp-all.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/lib/numeral.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/lib/datepicker.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/lib/grid.custom.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/lib/jgrid-1.4.1-min-utf8.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/lib/include.js?<%=_sLocalTime%>"></script>
	<title>Dashboard Admin</title>
</head>
<body>
	<c:set var="baseUrl" value="${pageContext.request.contextPath}"></c:set>
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#navbar" aria-expanded="false"
					aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="${pageContext.request.contextPath}/admin/dashboard">ការគ្រប់គ្រង ទំនិញ</a>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<ul class="nav navbar-nav navbar-right">
            <li><a href="#" style="top:-7px; padding-bottom: 0px;"><button type="button" class="btn btn-primary" id="btnsearch">ស្វែងរក</button></a></li>
            <li><a href="${pageContext.request.contextPath}/logout">
            		<span class="glyphicon glyphicon-log-out"></span> ចាកចេញ
            	</a>
            </li>
            <!--<li><a href="#">Profile</a></li>
            <li><a href="#">Help</a></li> -->
          </ul>
          <span class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="ស្វែងរក..." id="strPro">
          </span>
			</div>
		</div>
	</nav>
	<div class="container-fluid">
      <div class="row" style="margin: 0;">
		<div class="col-sm-4 col-md-3 sidebar" id="leftside" style="display:none; padding-left: 5px; padding-right: 0px;">
			<div class="table-responsive">
	            <table class="table table-striped">
	              <thead>
	                <tr>
	                  <th class="text-center">#</th>
	                  <th class="text-center">ឈ្មោះ</th>
	                  <th class="text-center">ចំនួន</th>
	                  <th class="text-center">តំលែ</th>
	                  <th class="text-center">សរុប</th>
	                  <th class="text-center">កែប្រែ</th>
	                </tr>
	              </thead>
	              <tbody id="tblList" style="font-size: 12px;">
	              	<tr><td colspan="6" class="text-center" id="noData">គ្មានទិន្ន័យ</td></tr>
	              </tbody>
	            </table><hr style="border-top:1px solid rgb(221, 221, 221);">
	            <div class="form-horizontal" style="font-size: 12px;">
		            <div class="form-group" style="margin-right: 0px;">
						<span for="proQty" class="control-label col-md-6">ប្រាក់សរុប : </span>
						<div class="col-md-6">
							<input type="text" id="totalAmout" readonly="readonly" class=" form-control numOnly">
						</div>
					</div>
					<div class="form-group" style="margin-right: 0px; margin-bottom: 5px;">
						<span for="proQty" class="control-label col-md-3">ទទួលប្រាក់ ៛ : </span>
						<div class="col-md-9">
							<input type="text" id="totalAmout" class=" form-control numOnly">
						</div>
					</div>
					<div class="form-group" style="margin-right: 0px; margin-bottom: 5px;">
						<span for="proQty" class="control-label col-md-3">ទទួលប្រាក់ $ : </span>
						<div class="col-md-9">
							<input type="text" id="totalAmout" class=" form-control numOnly">
						</div>
					</div>
					<div class="form-group" style="margin-right: 0px; margin-bottom: 5px;">
						<span for="proQty" class="control-label col-md-3">អាប់ប្រាក់ ៛ : </span>
						<div class="col-md-9">
							<input type="text" id="totalAmout" readonly="readonly" class=" form-control numOnly">
						</div>
					</div>
					<div class="form-group" style="margin-right: 0px; margin-bottom: 5px;">
						<span for="proQty" class="control-label col-md-3">អាប់ប្រាក់ $ : </span>
						<div class="col-md-9">
							<input type="text" id="totalAmout" readonly="readonly" class=" form-control numOnly">
						</div>
					</div>
					<div class="form-group" style="margin-right: 0px; margin-bottom: 5px;">
						<span for="proQty" class="control-label col-md-3">អត្រាប្រាក់ : </span>
						<div class="col-md-9">
							<input type="text" id="globalRate" readonly="readonly" class=" form-control numOnly">
						</div>
					</div>
					<div class="col-md-offset-6 col-md-6">
						<button class="btn btn-success waves-effect waves-light" type="button" id="btn_add">រក្សាទុក</button>
						<button class="btn btn-default waves-effect" type="button" id="btn_cancel_order">បោះបង់</button>
					</div>
				</div>
	          </div>
		</div>
