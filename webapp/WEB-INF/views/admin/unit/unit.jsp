<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../includes/header.jsp" %>
<%@ include file="../includes/sidebar.jsp" %>
	
<h3 class="page-header">ប្រភេទ ឯកតា</h3>
<div class="row form-horizontal">
		<span for="schStrName" class="control-label col-md-2">ស្វែងរក ប្រភពទំនិញ :</span>
		<div class="col-lg-3">
			<input class=" form-control" id="schStrName" name="schStrName" type="text">
		</div>
		<div class="col-md-7">
			<button class="btn btn-primary" id="btnSchStrName">ស្វែងរក</button>
			<button class="btn btn-success pull-right" id="btnAddNew">បង្កើតថ្មី</button>
		</div>
</div><br>
<div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th class="hide"></th>
                  <th>#</th>
                  <th>ឈ្មោះ ប្រភេទឯកតា</th>
                  <th>ចំនួន</th>
                  <th>ខ្នាត</th>
                  <th class="text-center">កែប្រែ</th>
                </tr>
              </thead>
              <tbody id="tblBodyList">
              </tbody>
            </table>
          </div>
			<div class="row">
						<div class="col-md-2">
							<select id="PER_PAGE" class="form-control">
								<option value="15">15</option>
								<option value="30">30</option>
								<option value="50">50</option>
								<option value="100">100</option>
							</select>
						</div>
						<div id="PAGINATION" class="pull-right"></div>
			</div>
<%@ include file="addunit.jsp" %>
<script id="tblCatListTem" type="text/x-jquery-tmpl">
   	<tr>
		<td class="hide" id="catid">{{= catid}}</td>
		<td>{{= order}}</td>
		<td>{{= catname}}</td>
		<td class="text-center">
			<a class="on-default edit-row" href="${baseUrl}/admin/categorymg/showCategory/{{= catid}}" id="btnUpdate" data-id="{{= catid}}"><i class="fa fa-pencil"></i></a>
			| <a class="on-default edit-row" href="javascript:void(0)" id="btnCatDelete" data-id="{{= catid}}"><i class="fa fa-trash "></i></a>
		
		</td>
	</tr> 
</script>
<script src="${baseUrl}/resources/js/unit.js"></script>	
<%@ include file="../includes/footer.jsp" %>