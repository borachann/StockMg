<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ include file="include/header.jsp" %>

<div class="" id="maincontain">
<a style="z-index: 1;" href="javascript:" id="fullscreen" class="lnb_fold"></a>
<div class="main" ng-app="">
		
		<ul id="myTab" class="nav nav-tabs nav-tabs-responsive" role="tablist">
			<li role="presentation" class="active" value="" >
					<a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">
						<span class="text"><i class="fa fa-home fa-lg" aria-hidden="true"></i></span>
					 </a>
			</li>
			<c:forEach items="${allCate}" var="category">
				<li role="presentation" class="" value="${category.catid}">
					<a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">
						<span class="text">${category.catname}</span>
					 </a>
				</li>
			</c:forEach>
      </ul>
	</div>
	<div class="row placeholders" id="container">
	
			<c:forEach items="${allProduct}" var="product">
				<c:if test="${product.status == true }">
					<div class="col-xs-6 col-sm-2 placeholder">
						<c:choose>
						    <c:when test="${product.imgurl == ''}">
								<img src="${baseUrl}/resources/img/total_stock.png" style="width: 150px; height:150px; border:1px solid;" class="img-responsive imghover" alt="Generic placeholder thumbnail">
						    </c:when>    
						    <c:otherwise>
						        <img src="${baseUrl}/resources/images/products/${product.imgurl}" style="width: 150px; height:150px !important; border:1px solid;" class="img-responsive imghover" alt="Generic placeholder thumbnail">
						    </c:otherwise>
						</c:choose>
			            <div class="text-primary" id="productStock">${product.saleprice } ${product.currentcyname }</div>
			            <div class="text-muted ellipsis"><span class="text-center">${product.proname }</span></div>
					</div>
				</c:if>
			</c:forEach>
	
	
           <%--  <div class="col-xs-6 col-sm-2 placeholder">
              <img src="${baseUrl}/resources/img/total_stock.png" width="150" height="150" class="img-responsive imghover" alt="Generic placeholder thumbnail">
              <h4><b class="text-primary" id="productStock"></b></h4></br>
              <span class="text-muted">ទំនិញក្នុង ស្តុក</span>
            </div>
            <div class="col-xs-6 col-sm-2 placeholder">
              <img src="${baseUrl}/resources/img/expense.png" width="150" height="150" class="img-responsive imghover" alt="Generic placeholder thumbnail">
              <h4><b class="text-primary">30000 $</b></h4></br>
              <span class="text-muted">ការចំនាយ</span>
            </div>
            <div class="col-xs-6 col-sm-2 placeholder">
              <img src="${baseUrl}/resources/img/debt.png" width="150" height="150" class="img-responsive imghover" alt="Generic placeholder thumbnail">
              <h4><b class="text-primary">30000 $</b></h4></br>
              <span class="text-muted">អ្នកជំពាក់</span>
            </div>
            <div class="col-xs-6 col-sm-2 placeholder">
              <img src="${baseUrl}/resources/img/rate.png" width="150" height="150" class="img-responsive imghover" id="imgrate" alt="Generic placeholder thumbnail">
              <h4><b class="text-primary" id="rate"></b></h4></br>
              <input type="hidden" id="rateId">
              <span class="text-muted">អត្រាបា្រក់</span>
            </div>
            <div class="col-xs-6 col-sm-2 placeholder">
              <img src="${baseUrl}/resources/img/rate.png" width="150" height="150" class="img-responsive imghover" id="imgrate" alt="Generic placeholder thumbnail">
              <h4><b class="text-primary" id="rate"></b></h4></br>
              <input type="hidden" id="rateId">
              <span class="text-muted">អត្រាបា្រក់</span>
            </div>
            <div class="col-xs-6 col-sm-2 placeholder">
              <img src="${baseUrl}/resources/img/rate.png" width="150" height="150" class="img-responsive imghover" id="imgrate" alt="Generic placeholder thumbnail">
              <h4><b class="text-primary" id="rate"></b></h4></br>
              <input type="hidden" id="rateId">
              <span class="text-muted">អត្រាបា្រក់</span>
            </div> --%>
     </div>
</div>
<script src="${baseUrl}/resources/js/sellerhomepage.js?<%=_sLocalTime%>"></script>
<%@ include file="include/footer.jsp"%>