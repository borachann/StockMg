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
					<form class="cmxform form-horizontal tasi-form" id="frmAdd"	method="POST" action="#" enctype="multipart/form-data">
						<div class="form-group ">
							<span for="proname" class="control-label col-lg-2">ឈ្មោះទំនិញ *</span>
							<div class="col-lg-10">
								<input class=" form-control" id="proname" name="proname" type="text" required="required">
								<input class=" form-control" id="proid" name="proid" type="hidden" required="required">
								<input class=" form-control" id="unitQty" name="unitQty" type="hidden" required="required">
							</div>
						</div>
						<div class="form-group ">
							<span for="proqty" class="control-label col-lg-2">ចំនួន *</span>
							<div class="col-lg-10">
								<input class=" form-control numOnly" id="proqty" name="proqty" type="text" required="required">
							</div>
						</div>
						<div class="form-group ">
							<span for="costprice" class="control-label col-lg-2">តំលៃដើម *</span>
							<div class="col-lg-10">
								<input class=" form-control numOnly" id="costprice" name="costprice" type="text" required="required">
							</div>
						</div>
						<div class="form-group">
							<div class="col-lg-offset-2 col-lg-10 text-right">
								<button class="btn btn-success waves-effect waves-light" type="button" id="btnadd">ផ្ទុកទុក</button>
								<button class="btn btn-default waves-effect" type="button" id="canceladd">លុបចោល</button>
							</div>
						</div>
					</form>
					<p># មុខទំនិញ ដែលបាននាំចូល</p>
					<div class="row">
						<div class="col-md-12">
							<table class="table table-striped table-bordered dataTable">
								<thead>
									<tr>
										<th>#</th>
										<th>ឈ្មោះទំនិញ</th>
										<th style="text-align: center;">ចំនួន</th>
										<th style="text-align: center;">តំលៃដើម</th>
										<th style="text-align: center;">កែប្រែ</th>
									</tr>
								</thead>
								<tbody id="tbllistimport">

								</tbody>
							</table>
						</div>
					</div>
					<div class="form-group" align="right">
						<button class="btn btn-success waves-effect waves-light" id="savebtn" type="button">រក្សាទុក</button>
						<button class="btn btn-default waves-effect" id="cencelBtn" type="button">បោះបង់</button>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			</div>
		</div>
	</div>
</div>