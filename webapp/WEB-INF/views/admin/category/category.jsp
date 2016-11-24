<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../includes/header.jsp" %>
<%@ include file="../includes/sidebar.jsp" %>
	<h3 class="page-header">ប្រភេទ ទំនិញ</h3>
	 <%@ include file="../includes/searchbar.jsp" %>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th class="hide"></th>
                  <th>#</th>
                  <th>ឈ្មោះ ប្រភេទទំនិញ</th>
                  <th class="text-center">កែប្រែ</th>
                </tr>
              </thead>
              <tbody id="tblList">
              </tbody>
            </table>
          </div>
<%@ include file="../includes/pagination.jsp" %>			
<%@ include file="addcategory.jsp" %>
<script id="tblListTem" type="text/x-jquery-tmpl">
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
<script src="${baseUrl}/resources/js/category.js"></script>
<%@ include file="../includes/footer.jsp" %>