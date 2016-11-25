<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>

<!-- Modal -->
<div class="modal fade" id="form_add" role="dialog ">
	<div class="modal-dialog modal-lg" style="width: 80%">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">បង្កើត ប្រភេទឯកតាថ្មី</h4>
			</div>
			<div class="modal-body">
				<div class="form">
					<form class="cmxform form-horizontal tasi-form" id="frmAddUnit"	method="POST" action="#">
						<div class="form-group ">
							<span for="unitName" class="control-label col-lg-2">ឈ្មោះ ប្រភេទឯកតា *</span>
							<div class="col-lg-10">
								<input class=" form-control" id="unitName" name="unitName" type="text" required="required">
							</div>
						</div>
						<div class="form-group ">
							<span for="qty" class="control-label col-lg-2">ចំនួន *</span>
							<div class="col-lg-10">
								<input class=" form-control" id="qty" name="qty" type="text" required="required">
							</div>
						</div>
						<div class="form-group ">
							<span for="convertto" class="control-label col-lg-2">ខ្នាត *</span>
							<div class="col-lg-10">
								<input class=" form-control" id="convertto" name="convertto" type="text" required="required">
							</div>
						</div>
						<input type="hidden" name="status" value="t">
						<div class="form-group">
							<div class="col-lg-offset-2 col-lg-10">
								<button class="btn btn-success waves-effect waves-light" type="submit" id="btnUnitAdd">រក្សាទុក</button>
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