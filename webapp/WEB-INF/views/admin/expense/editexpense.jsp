<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../includes/header.jsp" %>
<%@ include file="../includes/sidebar.jsp" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
	<h3 class="page-header">កែប្រែ ការចំនាយ</h3>
	
<input type="hidden" value="${expId}" id="editExpId" >

				<div class=" form">
					<form class="cmxform form-horizontal tasi-form" id="frmAdd"	method="POST" action="#" enctype="multipart/form-data">
						<div class="form-group ">
							<span for="proname" class="control-label col-md-2">ឈ្មោះទំនិញ *</span>
							<div class="col-md-10">
								<input class="form-control" id="proname" name="proname" type="text" required="required">
							</div>
						</div>
						<div class="form-group ">
							<span for="proqty" class="control-label col-md-2">ចំនួន *</span>
							<div class="col-md-10">
								<input class="form-control numOnly" id="proqty" name="proqty" type="text" required="required">
							</div>
						</div>
						<div class="form-group ">
							<span for="costprice" class="control-label col-md-2">តំលៃ *</span>
							<div class="col-md-8">
								<input class="form-control numOnly" id="costprice" name="costprice" type="text" required="required">
							</div>
							<span class="col-md-2" style="text-align:left">
								<select class="form-control" id="currentcy">
							        <option value="true">ដុល្លារ</option>
							        <option value="false">រៀល</option>
						      	</select>
							</span>
							<input type="hidden" id="editcurrency">
						</div>
						<div class="form-group">
							<div class="col-md-offset-2 col-md-10 text-right">
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
										<th style="text-align: center;">សរុប</th>
										<th style="text-align: center;">កែប្រែ</th>
									</tr>
								</thead>
								<tbody id="tblexpensedetail">

								</tbody>
							</table>
						</div>
					</div>
					<div class="form-horizontal">
						<div class="form-group">
							<div class="col-md-offset-6">
								<div class="col-md-6">
									<span for="totalAmountIndollar" class="control-label col-md-6">ប្រាក់សរុប (ដុល្លារ): </span>
									<div class="col-md-6">
										<input class="form-control" readonly="readonly" id="totalAmountIndollar" name="totalAmountIndollar" type="text">
									</div>
								</div>
								<div class="col-md-6">
									<span for="totalAmountInreil" class="control-label col-md-6">ប្រាក់សរុប (រៀល): </span>
									<div class="col-md-6">
										<input class="form-control" readonly="readonly" name="totalAmountInreil" type="text" id="totalAmountInreil">
									</div>
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-md-offset-6">
								<span for="impRate" class="control-label col-md-3">អត្រាប្រាក់: </span>
								<div class="col-md-5">
									<input class="form-control" readonly="readonly" id="impRate" name="impRate" type="text">
								</div>
								<div class="col-md-4 text-right">
									<button class="btn btn-success waves-effect waves-light" id="savebtn" type="button">រក្សាទុក</button>
									<button class="btn btn-default waves-effect" id="cencelBtn" type="button">បោះបង់</button>
								</div>
							</div>
						</div>
					 </div>
				</div>
			
<script id="tblListDetail" type="text/x-jquery-tmpl">
   	<tr>
		<td style="width : 5%;">{{= order}}</td>
		<td>{{= descrition}}</td>
		<td style="width : 15%;">{{= expqty}}</td>
		<td style="width : 15%;"><span>{{= unitprice}}</span><span class='pull-right'>{{if currentcy}}ដុល្លារ{{else}}រៀល{{/if}}</span></td>
		<td style="width : 20%;"><span>{{= total_amount}}</span><span class='pull-right'>{{if currentcy}}ដុល្លារ{{else}}រៀល{{/if}}</span></td>
		<td class="text-center">
			<a class="on-default edit-row" href='javascript:;' id='btnedit' data-id="{{= expid}}"><i class="fa fa-pencil"></i></a>
			| <a class="on-default edit-row" href="javascript:void(0)" id="btndelete" data-id="{{= expid}}"><i class="fa fa-trash "></i></a>
		</td>
	</tr> 
</script>			
	

<script src="${baseUrl}/resources/js/expenseedit.js?<%=_sLocalTime%>"></script>
<%@ include file="../includes/footer.jsp" %>