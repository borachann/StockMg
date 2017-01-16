<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../includes/header.jsp" %>
<%@ include file="../includes/sidebar.jsp" %>
	<h3 class="page-header">អតិថិជន</h3>
<%@ include file="../includes/searchbar.jsp" %>	
	 <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th class="hide"></th>
                  <th>#</th>
                  <th>ឈ្មោះ </th>
                  <th>លេខទូរស័ព្ទ </th>
                  <th>ឤស័យដ្ឋាន </th>
                  <th class="text-center">កែប្រែ</th>
                </tr>
              </thead>
              <tbody id="tblList">
              </tbody>
            </table>
          </div>
<%@ include file="../includes/pagination.jsp" %>	
<%@ include file="addcustomer.jsp" %>
<script id="tblListTem" type="text/x-jquery-tmpl">
   	<tr>
		<td class="hide" id="cusid">{{= cusid}}</td>
		<td>{{= order}}</td>
		<td>{{= cusname}}</td>
		<td>{{= phone_numer}}</td>
		<td>{{= address}}</td>
		<td class="text-center">
			<a class="on-default edit-row" href="${baseUrl}/admin/customermg/showcustomer/{{= cusid}}" id="btnUpdate" data-id="{{= cusid}}"><i class="fa fa-pencil"></i></a>
			| <a class="on-default edit-row" href="javascript:void(0)" id="btnCusDelete" data-id="{{= cusid}}"><i class="fa fa-trash "></i></a>
		
		</td>
	</tr> 
</script>

<script src="${baseUrl}/resources/js/customer.js?<%=_sLocalTime%>"></script>	
<%@ include file="../includes/footer.jsp" %>