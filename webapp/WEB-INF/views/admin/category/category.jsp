<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../includes/header.jsp" %>
<%@ include file="../includes/sidebar.jsp" %>
	<div class="row page-header">
		<div class="col-md-6"><h3>ប្រភេទ ទំនិញ</h3></div>
		<div class="col-md-6 text-right"><button class="btn btn-success" id="catAddNew">បង្កើតថ្មី</button></div>
	</div>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th class="hide"></th>
                  <th>#</th>
                  <th>ឈ្មោះ ប្រភេទទំនិញ</th>
                  <th>កែប្រែ</th>
                </tr>
              </thead>
              <tbody id="tblCatList">
              </tbody>
            </table>
          </div>
			<div class="row">
						<div class="col-md-1">
							<select id="PER_PAGE" class="form-control">
								<option value="15">15</option>
								<option value="30">30</option>
								<option value="50">50</option>
								<option value="100">100</option>
							</select>
						</div>
						<div id="PAGINATION" class="pull-right"></div>
			</div>
<%@ include file="addcategory.jsp" %>
<script id="tblCatListTem" type="text/x-jquery-tmpl">
   	<tr>
		<td class="hide">{{= catid}}</td>
		<td>{{= order}}</td>
		<td>{{= catname}}</td>
		<td><i class="glyphicon glyphicon-edit"></i> | <i class="glyphicon glyphicon-trash"></i></td>
	</tr> 
</script>
<script src="${baseUrl}/resources/js/category.js"></script>
<%@ include file="../includes/footer.jsp" %>