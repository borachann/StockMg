<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../includes/header.jsp" %>
<%@ include file="../includes/sidebar.jsp" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
	<h3 class="page-header">កែប្រែ ប្រភេទឯកតា</h3>
	
					<form class="cmxform form-horizontal tasi-form" id="frmEdit" method="POST" action="#">
						<div class="form-group ">
							<span for="catName" class="control-label col-lg-2">ឈ្មោះ ប្រភេទឯកតា * :</span>
									<div class="col-lg-10">
										<input type='hidden' id="unitId" value="${unit.unitId}">
										<input class=" form-control" id="unitName" name="unitName" type="text" value="${unit.unitName}">
									</div>
						</div>
						<div class="form-group ">
							<span for="qty" class="control-label col-lg-2">ចំនួន *</span>
							<div class="col-lg-10">
								<input class=" form-control" id="qty" name="qty" type="text" required="required" value="${unit.qty}">
							</div>
						</div>
						<div class="form-group ">
							<span for="convertto" class="control-label col-lg-2">ខ្នាត *</span>
							<div class="col-lg-10">
								<input class=" form-control" id="convertTo" name="convertTo" type="text" required="required" value="${unit.convertTo}">
							</div>
						</div>
						<div class="form-group">
							<div class="col-lg-offset-2 col-lg-10">
								<button class="btn btn-success waves-effect waves-light" type="button" id="btnUpdate">រក្សាទុក</button>
								<button class="btn btn-default waves-effect" type="button" id="btn_cancel">បោះបង់</button>
							</div>
						</div>
					</form>

<script src="${baseUrl}/resources/js/unitedit.js"></script>
<%@ include file="../includes/footer.jsp" %>