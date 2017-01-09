<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../includes/header.jsp" %>
<%@ include file="../includes/sidebar.jsp" %>
	
<h3 class="page-header">ការ នាំទំនិញចូល</h3>
<%@ include file="../includes/datebar.jsp" %>
<div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>ថ្ងៃ នាំចូល</th>
            <th>ចំនួន ប្រាក់សរុប</th>
            <th class="text-center">កែប្រែ</th>
          </tr>
        </thead>
        <tbody id="tblList">
        </tbody>
      </table>
</div>
<script id="tblListTem" type="text/x-jquery-tmpl">
   	<tr>
		<td class="hide">{{= impid}}</td>
		<td>{{= order}}</td>
		<td>{{= imgdate}}</td>
		<td>{{= totalAmount}}</td>
		
	</tr> 
</script>
<%@ include file="../includes/pagination.jsp" %>
<script src="${baseUrl}/resources/js/import.js?<%=_sLocalTime%>"></script>	
<%@ include file="../includes/footer.jsp" %>