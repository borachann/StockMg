<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../includes/header.jsp" %>
<%@ include file="../includes/sidebar.jsp" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
	<h3 class="page-header">កែប្រែ ទំនិញ</h3>
	
					<form class="cmxform form-horizontal tasi-form" id="frmAdd"	method="POST" action="#">
						<div class="form-group ">
							<span for="proname" class="control-label col-lg-2">ឈ្មោះទំនិញ *</span>
							<div class="col-lg-10">
								<input class=" form-control" id="proname" name="proname" type="text" required="required">
							</div>
						</div>
						<div class="form-group ">
							<span for="catname" class="control-label col-lg-2">ប្រភេទទំនិញ *</span>
							<div class="col-lg-10">
								<input class=" form-control" id="catName" name="catName" type="text" required="required">
								<input type="hidden" id="catId" name="catId">
							</div>
						</div>
						<div class="form-group ">
							<span for="unitname" class="control-label col-lg-2">ប្រភេទឯកតា *</span>
							<div class="col-lg-10">
								<input class=" form-control" id="unitname" name="unitname" type="text" required="required">
								<input type="hidden" id="unitId" name="unitId">
								<input type="hidden" id="unitQty" name="unitQty">
							</div>
						</div>
						<div class="form-group ">
							<span for="proqty" class="control-label col-lg-2">ចំនួន</span>
							<div class="col-lg-10">
								<input class=" form-control numOnly" id="proqty" name="proqty" type="text" required="required">
							</div>
						</div>
						<div class="form-group ">
							<span for="costprice" class="control-label col-lg-2">តំលៃដើម</span>
							<div class="col-lg-10">
								<input class=" form-control numOnly" id="costprice" name="costprice" type="text" required="required">
							</div>
						</div>
						<div class="form-group ">
							<span for="unitprice" class="control-label col-lg-2">តំលៃលក់ដុំ</span>
							<div class="col-lg-10">
								<input class=" form-control numOnly" id="unitprice" name="unitprice" type="text" required="required">
							</div>
						</div>
						<div class="form-group ">
							<span for="saleprice" class="control-label col-lg-2">តំលៃលក់រាយ</span>
							<div class="col-lg-10">
								<input class=" form-control numOnly" id="saleprice" name="saleprice" type="text" required="required">
							</div>
						</div>
						<div class="form-group ">
							<span for="currentcy" class="control-label col-lg-2">ប្រភេទលុយ</span>
							<div class="col-lg-10">
								<label class="radio-inline">
							      	<input type="radio" name="currentcy" id="dollar" value="true" checked="checked">ប្រាក់ដុល្លារ
							    </label>
								<label class="radio-inline">
								    <input type="radio" name="currentcy" id="reil" value="false">ប្រាក់រៀល
								</label>
							</div>
						</div>
						<div class="form-group ">
							<span for="imgurl" class="control-label col-lg-2">រូបភាព</span>
							<div class="col-lg-10">
								<input class=" form-control" id="imgurl" name="categoryName" type="file">
							</div>
						</div>
						<div class="form-group">
							<div class="col-lg-offset-2 col-lg-10">
								<button class="btn btn-success waves-effect waves-light" type="button" id="btnCatAdd">រក្សាទុក</button>
								<button class="btn btn-default waves-effect" type="button" id="btn_cancel">បោះបង់</button>
							</div>
						</div>
					</form>

<script src="${baseUrl}/resources/js/productedit.js"></script>
<%@ include file="../includes/footer.jsp" %>