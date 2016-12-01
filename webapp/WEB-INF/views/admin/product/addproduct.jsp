<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>

<!-- Modal -->
<div class="modal fade" id="form_add" role="dialog ">
	<div class="modal-dialog modal-lg" style="width: 80%">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">បង្កើតទំនិញ ថ្មី</h4>
			</div>
			<div class="modal-body">
				<div class=" form">
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
							</div>
						</div>
						<div class="form-group ">
							<span for="proqty" class="control-label col-lg-2">ចំនួន</span>
							<div class="col-lg-10">
								<input class=" form-control" id="proqty" name="proqty" type="text" required="required">
							</div>
						</div>
						<div class="form-group ">
							<span for="costprice" class="control-label col-lg-2">តំលៃដើម</span>
							<div class="col-lg-10">
								<input class=" form-control" id="costprice" name="costprice" type="text" required="required">
							</div>
						</div>
						<div class="form-group ">
							<span for="unitprice" class="control-label col-lg-2">តំលៃលក់ដុំ</span>
							<div class="col-lg-10">
								<input class=" form-control" id="unitprice" name="unitprice" type="text" required="required">
							</div>
						</div>
						<div class="form-group ">
							<span for="saleprice" class="control-label col-lg-2">តំលៃលក់រាយ</span>
							<div class="col-lg-10">
								<input class=" form-control" id="saleprice" name="saleprice" type="text" required="required">
							</div>
						</div>
						<div class="form-group ">
							<span for="currentcy" class="control-label col-lg-2">ប្រភេទលុយ</span>
							<div class="col-lg-10">
								<label class="radio-inline">
							      	<input type="radio" name="currentcy" checked="true">ប្រាក់ដុល្លារ
							    </label>
								<label class="radio-inline">
								    <input type="radio" name="currentcy">ប្រាក់រៀល
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
								<button class="btn btn-success waves-effect waves-light"
									type="button" id="btnSubmit">Save</button>
								<button class="btn btn-default waves-effect" type="button" id="btn_cancel">Cancel</button>
							</div>
						</div>
					</form>
				</div>
				<!-- .form -->


			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			</div>
		</div>
	</div>
</div>