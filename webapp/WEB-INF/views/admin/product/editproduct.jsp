<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../includes/header.jsp" %>
<%@ include file="../includes/sidebar.jsp" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
	<h3 class="page-header">កែប្រែ ទំនិញ</h3>
	
					<form class="cmxform form-horizontal tasi-form" id="frmAdd"	method="POST" action="#" enctype="multipart/form-data">
						<input type="hidden" id="proId" name="proId" value="${product.proId}">
						<div class="form-group ">
							<span for="proname" class="control-label col-lg-2">ឈ្មោះទំនិញ *</span>
							<div class="col-lg-10">
								<input class=" form-control" id="proname" name="proName" type="text" value="${product.proName}">
							</div>
						</div>
						<div class="form-group ">
							<span for="catname" class="control-label col-lg-2">ប្រភេទទំនិញ *</span>
							<div class="col-lg-10">
								<input class=" form-control" id="catName" name="catName" type="text" value="${product.category.catName}">
								<input type="hidden" id="catId" name="catId" value="${product.category.catId}">
							</div>
						</div>
						<div class="form-group ">
							<span for="unitname" class="control-label col-lg-2">ប្រភេទឯកតា *</span>
							<div class="col-lg-10">
								<input class=" form-control" id="unitname" name="unitName" type="text" value="${product.unit.unitName}">
								<input type="hidden" id="unitId" name="unitId" value="${product.unit.unitId}">
								<input type="hidden" id="unitQty" name="unitQty" value="${product.unit.qty}">
							</div>
						</div>
						<div class="form-group ">
							<span for="proqty" class="control-label col-lg-2">ចំនួន</span>
							<div class="col-lg-10">
								<input class=" form-control numOnly" id="proqty" name="proQty" type="text" readonly="readonly" value="${product.proQty/product.unit.qty}">
							</div>
						</div>
						<div class="form-group ">
							<span for="costprice" class="control-label col-lg-2">តំលៃដើម</span>
							<div class="col-lg-10">
								<input class=" form-control numOnly" id="costprice" name="costPrice" type="text" value="${product.costPrice}">
							</div>
						</div>
						<div class="form-group ">
							<span for="unitprice" class="control-label col-lg-2">តំលៃលក់ដុំ</span>
							<div class="col-lg-10">
								<input class=" form-control numOnly" id="unitprice" name="unitPrice" type="text" value="${product.unitPrice}">
							</div>
						</div>
						<div class="form-group ">
							<span for="saleprice" class="control-label col-lg-2">តំលៃលក់រាយ</span>
							<div class="col-lg-10">
								<input class=" form-control numOnly" id="saleprice" name="salePrice" type="text" value="${product.salePrice}">
							</div>
						</div>
						<div class="form-group ">
							<span for="currentcy" class="control-label col-lg-2">ប្រភេទលុយ</span>
							<div class="col-lg-10">
								<label class="radio-inline">
							      	<input type="radio" name="currentcy" id="dollar" value="true" 
							      		<c:if test="${product.currentcy == true}"> checked = "checked" </c:if> 
							      	/>ប្រាក់ដុល្លារ
							    </label>
								<label class="radio-inline">
								    <input type="radio" name="currentcy" id="reil" value="false" 
								   		<c:if test="${product.currentcy == false}"> checked = "checked" </c:if> 
								    />ប្រាក់រៀល
								</label>
							</div>
						</div>
						<div class="form-group ">
							<span for="imgurl" class="control-label col-lg-2">រូបភាព</span>
							<div class="col-lg-10">
								<input class=" form-control" id="imgurl" name="imgUrl" type="file">
								<input type="hidden" id="image" name="image" /> 
							
								<c:choose>
									<c:when test="${not empty product.imgUrl}">
										<img src ="${baseUrl}/resources/images/products/${product.imgUrl}" id="images_sample" name="images_sample" class="img-thumbnail" style="width: 200px; height: 200px;">
									</c:when>
									<c:when test="${empty product.imgUrl}">
										<img src ="" id="images_sample" name="images_sample" class="img-thumbnail" style="display:none; width: 200px; height: 200px;">
									</c:when>
								</c:choose>
								<%-- <c:if test="${not empty product.imgUrl}">
									<img src ="${baseUrl}/resources/images/products/${product.imgUrl}" id="images_sample" name="images_sample" class="img-thumbnail" style="width: 200px; height: 200px;">
								</c:if>
								<c:if test="${empty product.imgUrl}">
									<img src ="" id="images_sample" name="images_sample" class="img-thumbnail" style="display:none; width: 200px; height: 200px;">
								</c:if> --%>
							</div>
						</div>
						<div class="form-group">
							<div class="col-lg-offset-2 col-lg-10">
								<button class="btn btn-success waves-effect waves-light" type="submit" id="btnUpdate">រក្សាទុក</button>
								<button class="btn btn-default waves-effect" type="button" id="btn_cancel">បោះបង់</button>
							</div>
						</div>
					</form>

<script src="${baseUrl}/resources/js/productedit.js"></script>
<%@ include file="../includes/footer.jsp" %>