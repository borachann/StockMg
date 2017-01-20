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
	
	<script>var baseUrl = "${pageContext.request.contextPath}"</script>
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
	<script src="${pageContext.request.contextPath}/resources/js/lib/table.paging.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/lib/include.js?<%=_sLocalTime%>"></script>
	<title>Dashboard Admin</title>
</head>
<body>
	<c:set var="baseUrl" value="${pageContext.request.contextPath}"></c:set>
	<input type="hidden" id="globalRate">
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
				<a class="navbar-brand" href="${pageContext.request.contextPath}/">ការគ្រប់គ្រង់ ទំនិញ</a>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<!-- <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Help</a></li>
          </ul>
          <form class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search...">
          </form> -->
			</div>
		</div>
	</nav>
	<div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">