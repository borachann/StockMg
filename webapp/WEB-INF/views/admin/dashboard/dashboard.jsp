<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ include file="../includes/header.jsp" %>
    
          <%@ include file="../includes/sidebar.jsp" %>
        
          <h2 class="page-header">ផ្ទាំងគ្រប់គ្រង់</h2>

          <div class="row placeholders">
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="${baseUrl}/resources/img/total_stock.png" width="150" height="150" class="img-responsive imghover" alt="Generic placeholder thumbnail">
              <h4><b class="text-primary" id="productStock"></b></h4></br>
              <span class="text-muted">ទំនិញក្នុង ស្តុក</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="${baseUrl}/resources/img/expense.png" width="150" height="150" class="img-responsive imghover" alt="Generic placeholder thumbnail">
              <h4><b class="text-primary">30000 $</b></h4></br>
              <span class="text-muted">ការចំនាយ</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="${baseUrl}/resources/img/debt.png" width="150" height="150" class="img-responsive imghover" alt="Generic placeholder thumbnail">
              <h4><b class="text-primary">30000 $</b></h4></br>
              <span class="text-muted">អ្នកជំពាក់</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="${baseUrl}/resources/img/rate.png" width="150" height="150" class="img-responsive imghover" id="imgrate" alt="Generic placeholder thumbnail">
              <h4><b class="text-primary" id="rate"></b></h4></br>
              <input type="hidden" id="rateId">
              <span class="text-muted">អត្រាបា្រក់</span>
            </div>
          </div>
        </div>
<%@ include file="updaterate.jsp" %>
<script src="${baseUrl}/resources/js/dashboard.js?<%=_sLocalTime%>"></script>
<%@ include file="../includes/footer.jsp"%>