<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../includes/header.jsp" %>
<%@ include file="../includes/sidebar.jsp" %>
	<div class="row page-header">
		<div class="col-md-6"><h3>ប្រភេទ ទំនិញ</h3></div>
		<div class="col-md-6 text-right"><button class="btn btn-success">បង្កើតថ្មី</button></div>
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
<%@ include file="addcategory.jsp" %>
<script id="tblCatListTem" type="text/x-jquery-tmpl">
   	<tr>
		<td class="hide">{{= catid}}</td>
		<td>{{= catid}}</td>
		<td>{{= catname}}</td>
		<td>{{= status}}</td>
	</tr> 
</script>
<script src="${baseUrl}/resources/js/category.js"></script>
<%@ include file="../includes/footer.jsp" %>