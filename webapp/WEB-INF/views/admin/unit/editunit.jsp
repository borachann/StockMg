<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../includes/header.jsp" %>
<%@ include file="../includes/sidebar.jsp" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
	<h3 class="page-header">កែប្រែ ប្រភេទទំនិញ</h3>
	
					<form class="cmxform form-horizontal tasi-form" id="frmAddCategory"	method="POST" action="#">
						<div class="form-group ">
							<span for="catName" class="control-label col-lg-2">ឈ្មោះ ប្រភេទទំនិញ * :</span>
							 	 
									<div class="col-lg-10">
										<input type='hidden' id="catId" value="${category.catId}">
										<input class=" form-control" id="catName" name="catName" type="text" value="${category.catName}">
									</div>
						</div>
					
						<div class="form-group">
							<div class="col-lg-offset-2 col-lg-10">
								<button class="btn btn-success waves-effect waves-light" type="button" id="btnCatAdd">រក្សាទុក</button>
								<button class="btn btn-default waves-effect" type="button" id="btn_cancel">បោះបង់</button>
							</div>
						</div>
					</form>

<script src="${baseUrl}/resources/js/categoryedit.js"></script>
<%@ include file="../includes/footer.jsp" %>