<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../includes/header.jsp" %>
<%@ include file="../includes/sidebar.jsp" %>	
	<h3 class="page-header">ការ ចំនាយ</h3>
<%@ include file="../includes/datebar.jsp" %>
<div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>ថ្ងៃ  ចំនាយ</th>
            <th>ប្រាក់សរុប</th>
            <th class="text-center">កែប្រែ</th>
          </tr>
        </thead>
        <tbody id="tblList">
        </tbody>
      </table>
</div>
<!-- ============ import detail popup ============ -->

<div class="modal fade" id="form_detail" role="dialog ">
	<div class="modal-dialog modal-lg" style="width: 80%">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">ពត៌មានលំអិត</h4>
			</div>
			<div class="modal-body">
				<div class=" form">					
					<p># ការ ចំនាយ</p>
					<div class="row">
						<div class="col-md-12">
							<table class="table table-striped table-bordered dataTable">
								<thead>
									<tr>
										<th>#</th>
										<th>ឈ្មោះទំនិញ</th>
										<th style="text-align: center;">ចំនួន</th>
										<th style="text-align: center;">តំលៃ</th>
										<th style="text-align: center;">សរុប</th>
									</tr>
								</thead>
								<tbody id="tblexpensedetail">

								</tbody>
							</table>
						</div>
					</div>
					<div class="form-horizontal">
						<div class="form-group">
							<div class="col-md-offset-3">
								<div class="col-md-4">
									<span for="totalAmountDetailIndollar" class="control-label col-md-6">ប្រាក់សរុប (ដុល្លារ): </span>
									<div class="col-md-6">
										<input class="form-control" readonly="readonly" id="totalAmountDetailIndollar" name="totalAmountDetailIndollar" type="text">
									</div>
								</div>
								<div class="col-md-4">
									<span for="totalAmountDetailInreil" class="control-label col-md-6">ប្រាក់សរុប (រៀល): </span>
									<div class="col-md-6">
										<input class="form-control" readonly="readonly" name="totalAmountDetailInreil" type="text" id="totalAmountDetailInreil">
									</div>
								</div>
								<div class="col-md-4">
									<span for="impDetailRate" class="control-label col-md-6">អត្រាប្រាក់: </span>
									<div class="col-md-6">
										<input class="form-control" readonly="readonly" id="impDetailRate" name="impDetailRate" type="text">
									</div>
									 
								</div>
							</div>
						</div>
					 </div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			</div>
		</div>
	</div>
</div>

<!-- ================ end import detail popup ================== -->
<script id="tblListTem" type="text/x-jquery-tmpl">
   	<tr>
		<td class="hide">{{= expid}}</td>
		<td style="width : 5%;">{{= order}}</td>
		<td class="tdhover" style="width : 40%;" id="tdimpdate">{{= impdate}}</td>
		<td style="width : 15%;"><span>{{= impamount}}</span><span class='pull-right'>ដុល្លារ</span></td>
		<td class="text-center">
			<a class="on-default edit-row" href="${baseUrl}/admin/importmg/showimport/{{= expid}}" id="btnUpdate" data-id="{{= expid}}"><i class="fa fa-pencil"></i></a>
		</td>
	</tr> 
</script>
<!-- | <a class="on-default edit-row" href="javascript:void(0)" id="btnImpDelete" data-id="{{= impid}}"><i class="fa fa-trash "></i></a> -->
<!-- ================== script for list import detail ======================= -->
<script id="tblListDetail" type="text/x-jquery-tmpl">
   	<tr>
		<td style="width : 5%;">{{= order}}</td>
		<td>{{= proname}}</td>
		<td style="width : 15%;"><span>{{= proqty}}<span class='pull-right'>{{= unitname}}</span></td>
		<td style="width : 15%;"><span>{{= unitprice}}</span><span class='pull-right'>{{if currentcy}}ដុល្លារ{{else}}រៀល{{/if}}</span></td>
		<td style="width : 20%;"><span>{{= total_amount}}</span><span class='pull-right'>{{if currentcy}}ដុល្លារ{{else}}រៀល{{/if}}</span></td>
	</tr> 
</script>

<!-- ================== end script for list import detail ======================= -->
<%@ include file="../includes/pagination.jsp" %>
<%@ include file="addexpense.jsp" %>
<script src="${baseUrl}/resources/js/expense.js?<%=_sLocalTime%>"></script>
<%@ include file="../includes/footer.jsp" %>