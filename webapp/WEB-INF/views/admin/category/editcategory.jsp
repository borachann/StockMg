<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>

<!-- Modal -->
<div class="modal fade" id="form_add_category" role="dialog ">
	<div class="modal-dialog modal-lg" style="width: 80%">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">កែប្រែ ប្រភេទទំនិញ</h4>
			</div>
			<div class="modal-body">
				<div class=" form">
					<form class="cmxform form-horizontal tasi-form" id="frmAddCategory"	method="POST" action="#">
						<div class="form-group ">
							<span for="catName" class="control-label col-lg-2">ឈ្មោះ ប្រភេទទំនិញ *</span>
							<div class="col-lg-10">
								<input class=" form-control" id="upCatName" name="catName" type="text" required="required">
							</div>
						</div>
					
						<div class="form-group">
							<div class="col-lg-offset-2 col-lg-10">
								<button class="btn btn-success waves-effect waves-light" type="button" id="btnUpCatAdd">រក្សាទុក</button>
								<button class="btn btn-default waves-effect" type="button" id="btn_up_cancel">បោះបង់</button>
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