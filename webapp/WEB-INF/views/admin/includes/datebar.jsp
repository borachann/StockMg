<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

   <div class="row form-horizontal">
		<span class="control-label col-md-2">កាលបរិច្ឆេទ :</span>
		<div class="date-range col-md-8">
             <input type="text" readonly="readonly" id="sDate" name="sDate" style="width: 100px; text-align: center;">&nbsp;
             <img style="width: 20px; height: 20px;" id="imgSDate" src="${pageContext.request.contextPath}/resources/img/ico_calendar.png">&nbsp;~&nbsp;
             <input type="text" readonly="readonly" id="eDate" name="eDate" style="width: 100px; text-align: center;">&nbsp;
             <img style="width: 20px; height: 20px;" id="imgEDate" src="${pageContext.request.contextPath}/resources/img/ico_calendar.png">
         </div>
		 <div class="col-md-2 pull-right" style="text-align: right;">
            <button class="btn btn-success pull-right" id="popUpAddNew">បង្កើតថ្មី</button>
        </div>
	</div>
<br>