<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../includes/header.jsp" %>
<%@ include file="../includes/sidebar.jsp" %>
	
<h3 class="page-header">ការ នាំទំនិញចូល</h3>
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
            <!-- <th>រូបភាព</th> -->
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
		<td>{{= Math.floor(proqty/qty)}} {{= unitname}} , {{= proqty%qty}} {{= convertto}}</td>
		<td>{{= catname}}</td>
		<td>{{= costprice}} <span class="pull-right">{{if currentcy}} ដុល្លារ {{else}} រៀល {{/if}}</span></td>
		<td>{{= unitprice}} <span class="pull-right">{{if currentcy}} ដុល្លារ {{else}} រៀល {{/if}}</span></td>
		<td>{{= saleprice}} <span class="pull-right">{{if currentcy}} ដុល្លារ {{else}} រៀល {{/if}}</span></td>
		<td class="text-center">
			<a class="on-default edit-row" href="${baseUrl}/admin/productmg/showproduct/{{= proid}}" id="btnUpdate" data-id="{{= proid}}"><i class="fa fa-pencil"></i></a>
			| <a class="on-default edit-row" href="javascript:void(0)" id="btnDelete" data-id="{{= proid}}">{{if status}}ឈប់លក់{{else}}<span class="text-danger">មានលក់</spna>{{/if}}</a>
		</td>
	</tr> 
</script>
<%@ include file="../includes/pagination.jsp" %>
<script src="${baseUrl}/resources/js/import.js?<%=_sLocalTime%>"></script>	
<%@ include file="../includes/footer.jsp" %>