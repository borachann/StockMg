<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>

<!-- Modal -->
<div class="modal fade" id="form_add" role="dialog ">
	<div class="modal-dialog modal-lg" style="width: 80%">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">បង្កើត អតិថិជនថ្មី</h4>
			</div>
			<div class="modal-body">
				<div class=" form">
					<form class="cmxform form-horizontal tasi-form" id="frmAddCustomer"	method="POST" action="#">
						<div class="form-group ">
							<span for="cusName" class="control-label col-lg-2">ឈ្មោះ *</span>
							<div class="col-lg-10">
								<input class=" form-control" id="cusName" name="cusName" type="text">
							</div>
						</div>
						<div class="form-group ">
							<span for="cusPhone" class="control-label col-lg-2">លេខទូរស័ព្ទ </span>
							<div class="col-lg-10">
								<input class=" form-control numOnly" id="cusPhone" name="cusPhone" type="text">
							</div>
						</div>
						<div class="form-group ">
							<span for="cusAddress" class="control-label col-lg-2">ឤស័យដ្ឋាន </span>
							<div class="col-lg-10">
								<input class=" form-control" id="cusAddress" name="cusAddress" type="text">
							</div>
						</div>
						
						<div class="form-group ">
							<span for="imgurl" class="control-label col-lg-2">រូបភាព</span>
							<div class="col-lg-10">
								<input class=" form-control" id="imgurl" name="imgUrl" type="file">
								<input type="hidden" id="image" name="image" /> <img src="" id="images_sample" name="images_sample" class="img-thumbnail" style="display: none; width: 200px; height: 200px;">
							</div>
						</div>
					
						<div class="form-group">
							<div class="col-lg-offset-2 col-lg-10">
								<button class="btn btn-success waves-effect waves-light" type="button" id="btnCusAdd">រក្សាទុក</button>
								<button class="btn btn-default waves-effect" type="button" id="btn_cancel">បោះបង់</button>
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