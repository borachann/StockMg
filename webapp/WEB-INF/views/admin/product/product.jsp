<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../includes/header.jsp" %>
<%@ include file="../includes/sidebar.jsp" %>
<h3 class= "page-header">គ្រប់គ្រង់ ទំនិញ</h3>
<%@ include file="../includes/searchbar.jsp" %>
<div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ឈ្មោះ</th>
                  <th>ចំនួន</th>
                  <th>ប្រភេទទំនិញ</th>
                  <th>តំលៃដើម</th>
                  <th>តំលែលក់ដុំ</th>
                  <th>តំលែលក់រាយ</th>
                  <th>រូបភាព</th>
                  <th class="text-center">កែប្រែ</th>
                </tr>
              </thead>
              <tbody id="tblList">
              </tbody>
            </table>
          </div>
<script id="tblListTem" type="text/x-jquery-tmpl">
   	<tr>
		<td class="hide">{{= proid}}</td>
		<td>{{= order}}</td>
		<td>{{= proname}}</td>
		<td>{{= proqty}}</td>
		<td>{{= catname}}</td>
		<td>{{= costprice}}</td>
		<td>{{= unitprice}}</td>
		<td>{{= saleprice}}</td>
		<td>{{= imgurl}}</td>
		<td class="text-center">
			<a class="on-default edit-row" href="${baseUrl}/admin/productmg/showproduct/{{= proid}}" id="btnUpdate" data-id="{{= proid}}"><i class="fa fa-pencil"></i></a>
			| <a class="on-default edit-row" href="javascript:void(0)" id="btnDelete" data-id="{{= proid}}"><i class="fa fa-trash "></i></a>
		
		</td>
	</tr> 
</script>
<%@ include file="../includes/pagination.jsp" %>
<%@ include file="addproduct.jsp" %>
<script src="${baseUrl}/resources/js/product.js"></script>	
<%@ include file="../includes/footer.jsp" %>