if (typeof($.cookie) != "function") {
    document.write('<script type="text/javascript" src="/js/lib/jquery.cookie.js"></script>');
}
//                                 table id , 조회 함수 , DRAW   , focus page  , row size, row size list use yn
$.fn.tablePaging = function(table_id, fn_getDat, callback, page, listSize, pagingSizeYn) {
    var _paging_draw_area = this;
    var _grid = table_id;

    var currentPage = null2void(page, 1);

    var pageSize = listSize;
    var bf_pageSize = listSize;

    var currentBlock = Math.ceil(currentPage / 10);

    var flag = ""; // (N=내부에서 다음 블럭 호출 , P=내부에서 이전 블럭 호출)

    var prevCnt = 1;
    var nextCnt = 1;

    var firstPageNo = ""; // 첫 페이지 번호
    var lastPageNo = ""; // 마지막 페이지 번호
    var firstBlock = ""; // 첫 Block 번호
    var lastBlock = ""; // 끝 Block 번호 
    var moveBlockCnt = ""; // 맨앞 or 맨뒤 Block 까지 움직여야하는 페이지 수

    var maintainPage = 0; // 2014-09-02 maintain 변수 선언
    var paging = {
        setPagingByReqCnt: function(rec, totlCnt) {
            // 다음
            if (flag == "N") {
                if (rec.length == 0) {
                    currentBlock--;
                    currentPage = maintainPage;
                    alert("The Last Page.");
                    flag = "";
                    return false;
                }
            }
            //이전
            else if (flag == "P") {
                if (currentBlock == 0) {
                    currentBlock++;
                    currentPage = maintainPage;
                    alert("The First Page.");
                    flag = "";
                    return false;
                }
            }
            //맨뒤
            else if (flag == "L") {
                if (moveBlockCnt == 0) {
                    alert("The Last Page.");
                    flag = "";
                    return false;
                }
            }
            //맨앞
            else if (flag == "F") {
                if (moveBlockCnt == 0) {
                    alert("The First Page.");
                    flag = "";
                    return false;
                }
            }

            //if(null != $.cookie("boardPageReqCnt") && "undefined" != $.cookie("boardPageReqCnt")) pageSize = $.cookie("boardPageReqCnt");
            var dataSize 	  = rec.length;
            var dataBlockSize = Math.ceil(totlCnt / pageSize);
            var firstPage     = currentBlock * 10 - 10 + 1;
            var lastPage      = currentBlock * 10;
            var blockCnt1     = (currentBlock * 10 - 10);
            
            var fprevHtml     = "";
            var prevHtml      = "";
            var nextHtml      = "";
            var lnextHtml     = "";
           

            $(_paging_draw_area).find("#page_block > *").remove();
            // 데이터 존재 O
            if (dataSize > 0) {

                $(_paging_draw_area).children().remove();
                $(".n_btn_both_wrap").find(".f_left").children().remove();

                /*var fprevHtml = "<a href='#none;' id=\"first_pre\"><img src=\"/img/btn/btn_pg_first.gif\" title=\"첫 페이지\" /></a>";
                var prevHtml = "<a href='#none;' id=\"pre\"><img src=\"/img/btn/btn_pg_pre.gif\" title=\"이전 페이지\" /></a>";
                var nextHtml = "<a href='#none;' id=\"next\"><img src=\"/img/btn/btn_pg_next.gif\" title=\"다음 페이지\" /></a>";
                var lnextHtml = "<a href='#none;' id=\"last_next\"><img src=\"/img/btn/btn_pg_last.gif\" title=\"마지막 페이지\" /></a>";*/
                //fprevHtml = "<a href='#none;' id=\"first_pre\"><img src=\"/img/btn/btn_pg_first.gif\" title=\"첫 페이지\" /></a>";
                //prevHtml  = "<a href='#none;' id=\"pre\"><img src=\"/img/btn/btn_pg_pre.gif\" title=\"이전 페이지\" /></a>";
                nextHtml  = "<a href='#none;' id=\"next\"><img src=\"/img/btn/btn_pg_next.gif\" title=\"다음 페이지\" /></a>";
                lnextHtml = "<a href='#none;' id=\"last_next\"><img src=\"/img/btn/btn_pg_last.gif\" title=\"마지막 페이지\" /></a>";
                
                if(dataBlockSize <= 10){
                	//prevHtml = "<a href='#none;' style='cursor:no-drop; color: gainsboro;' id=\"\">Prev</a>";
                	//nextHtml = "<a href='#none;' style='cursor:no-drop; color: gainsboro;' id=\"\">Next</a>";
                	fprevHtml	= "<a href='#none;' id=\"\"><img style='cursor:no-drop; color: gainsboro; opacity: 0.5;'src=\"/img/btn/btn_pg_first.gif\" title=\"첫 페이지\" /></a>";
                    prevHtml 	= "<a href='#none;' id=\"\"><img style='cursor:no-drop; color: gainsboro; opacity: 0.5;' src=\"/img/btn/btn_pg_pre.gif\" title=\"이전 페이지\" /></a>";
                    nextHtml 	= "<a href='#none;' id=\"\"><img style='cursor:no-drop; color: gainsboro; opacity: 0.5;' src=\"/img/btn/btn_pg_next.gif\" title=\"다음 페이지\" /></a>";
                    lnextHtml 	= "<a href='#none;' id=\"\"><img style='cursor:no-drop; color: gainsboro; opacity: 0.5;' src=\"/img/btn/btn_pg_last.gif\" title=\"마지막 페이지\" /></a>";
                }
                else{
                	if(firstPage <= 1){
                    	//prevHtml = "<a href='#none;' style='cursor:no-drop; color: gainsboro;' id=\"\">Prev</a>";
                		fprevHtml = "<a href='#none;' id=\"\"><img style='cursor:no-drop; color: gainsboro; opacity: 0.5;'src=\"/img/btn/btn_pg_first.gif\" title=\"첫 페이지\" /></a>";
                		prevHtml  = "<a href='#none;' id=\"\"><img style='cursor:no-drop; color: gainsboro; opacity: 0.5;'src=\"/img/btn/btn_pg_pre.gif\" title=\"이전 페이지\" /></a>";
                    	//nextHtml = "<a href='#none;' id=\"next\">Next</a>";
                		nextHtml  = "<a href='#none;' id=\"next\"><img src=\"/img/btn/btn_pg_next.gif\" title=\"다음 페이지\" /></a>";
                		lnextHtml = "<a href='#none;' id=\"last_next\"><img src=\"/img/btn/btn_pg_last.gif\" title=\"마지막 페이지\" /></a>";
                    }
                    else if(lastPage >= dataBlockSize){
                    	
                    	//nextHtml = "<a href='#none;' style='cursor:no-drop; color: gainsboro;' id=\"\">Next</a>";
                    	nextHtml  = "<a href='#none;' id=\"\"><img style='cursor:no-drop; color: gainsboro; opacity: 0.5;' src=\"/img/btn/btn_pg_next.gif\" title=\"다음 페이지\" /></a>";
                    	lnextHtml = "<a href='#none;' id=\"\"><img style='cursor:no-drop; color: gainsboro; opacity: 0.5;' src=\"/img/btn/btn_pg_last.gif\" title=\"마지막 페이지\" /></a>";
                    	//prevHtml = "<a href='#none;' id=\"pre\">Prev</a>";
                    	prevHtml  = "<a href='#none;' id=\"pre\"><img src=\"/img/btn/btn_pg_pre.gif\" title=\"이전 페이지\" /></a>";
                    	fprevHtml = "<a href='#none;' id=\"first_pre\"><img src=\"/img/btn/btn_pg_first.gif\" title=\"첫 페이지\" /></a>";
                    	
                    }
                    
                    else{
                    	//nextHtml = "<a href='#none;' id=\"next\">Next</a>";
                    	//prevHtml = "<a href='#none;' id=\"pre\">Prev</a>";
                    	 fprevHtml = "<a href='#none;' id=\"first_pre\"><img src=\"/img/btn/btn_pg_first.gif\" title=\"첫 페이지\" /></a>";
                         prevHtml  = "<a href='#none;' id=\"pre\"><img src=\"/img/btn/btn_pg_pre.gif\" title=\"이전 페이지\" /></a>";
                         nextHtml  = "<a href='#none;' id=\"next\"><img src=\"/img/btn/btn_pg_next.gif\" title=\"다음 페이지\" /></a>";
                         lnextHtml = "<a href='#none;' id=\"last_next\"><img src=\"/img/btn/btn_pg_last.gif\" title=\"마지막 페이지\" /></a>";
                    	
                    }
                }
                
                var background_html = "<div class=\"n_paging-wrap\">" + fprevHtml + " " + prevHtml + "<span class=\"paging\" id=\"page_block\"></span>" + nextHtml + " " + lnextHtml + "</div>";

                var pageSelectHtml = "";
                if (pagingSizeYn == "Y") {
                    // div focus 에의한 테두리 없애기 : http://www.dweb.co.kr/bbs/board.php?bo_table=webstandard&wr_id=35
                    pageSelectHtml += "<div class='combo_style1' style='width:115px;'>";
                    pageSelectHtml += " <div class='combo_txt'><span class='txt' name='page_size_default' style='cursor:pointer;' page_size=''></span><a class='btn' name='paging_size_list'></a></div>";
                    pageSelectHtml += " <div class='combo_list' style='width:122px;' name='paging_size_div'>";
                    pageSelectHtml += " <ul>";
                    pageSelectHtml += " <li><a href='javascript:setPageSize(5)' class='pgSelectValue' usr-val='5'>5 Rows</a></li>";
                    pageSelectHtml += " <li><a href='javascript:setPageSize(15)' class='pgSelectValue' usr-val='15'>15 Rows</a></li>";
                    //pageSelectHtml += " <li><a href='javascript:setPageSize(30)' class='pgSelectValue' usr-val='30'>30개씩보기</a></li>";
                    //pageSelectHtml += " <li><a href='javascript:setPageSize(40)' class='pgSelectValue' usr-val='40'>40개씩보기</a></li>";
                    pageSelectHtml += " <li><a href='javascript:setPageSize(30)' class='pgSelectValue' usr-val='30'>30 Rows</a></li>";
                    //pageSelectHtml += " <li><a href='javascript:setPageSize(100)' class='pgSelectValue' usr-val='100'>100개씩보기</a></li>";
                    pageSelectHtml += " </ul>";
                    pageSelectHtml += " </div>";
                    pageSelectHtml += "</div>";
                    pageSelectHtml += "<div class=\"paging mgb10\" style=\"display: none !important;\">";
                    pageSelectHtml += " <span class=\"pagingList\">";
                    pageSelectHtml += " <select name=\"paging_size\" class=\"select\" style=\"width:85px;\">";
                    pageSelectHtml += " <option value=\"5\">5</option>";
                    pageSelectHtml += " <option value=\"15\">15</option>";
                    //pageSelectHtml += " <option value=\"30\">30</option>";
                    //pageSelectHtml += " <option value=\"40\">40</option>";
                    pageSelectHtml += " <option value=\"30\">30</option>";
                    //pageSelectHtml += " <option value=\"100\">100</option>";
                    pageSelectHtml += " </select>";
                    pageSelectHtml += " </span>";
                    pageSelectHtml += " <span id=\"page_block\"></span>";
                    pageSelectHtml += "</div>";
                }

                $(".n_btn_both_wrap").find(".f_left").append(pageSelectHtml);

                // this(페이징 셋 하는 곳)
                $(_paging_draw_area).append(background_html);
                $(".n_btn_both_wrap").find(".f_left").find("select[name='paging_size']").val(pageSize);
                $(".n_btn_both_wrap").find(".f_left").find("span[name='page_size_default']").text(pageSize + " Rows");
                $(".n_btn_both_wrap").find(".f_left").find("span[name='page_size_default']").attr("page_size", pageSize);

                var firstClass = "";
                for (var i = firstPage; i <= lastPage; i++) {
                    if (i == firstPage) firstClass = " first ";
                    else firstClass = "";

                    if (currentPage == i)
                        $(_paging_draw_area).find("#page_block").append("<a href='#none;' class=\"on " + firstClass + "\">" + i + "</a>");
                    else
                        $(_paging_draw_area).find("#page_block").append("<a href='#none;' class=\"" + firstClass + "\">" + i + "</a>");

                    blockCnt1++;
                    if (blockCnt1 == dataBlockSize) {
                        break;
                    }
                }
            }

            $(_paging_draw_area).find("#page_block").find("a").click(function() {
                var pageNum = $(this).html();
                if (!isNaN(pageNum)) {
                    //currentPage = pageNum;
                    //paging.setPagingByReqCnt(rec, totlCnt);
                    $.cookie("boardPageNo", null, {
                        path: '/'
                    });
                    $.cookie("boardPageNo", pageNum, {
                        expires: 365
                    });

                    currentPage = pageNum;

                    if (currentPage != dataBlockSize)
                        blockCnt1 = 0;
                    else blockCnt1 = dataBlockSize - 1;

                    if ($.isFunction(fn_getDat)) {
                        fn_getDat();
                    }
                }
            });

            /* list size change */
            $(".n_btn_both_wrap").find(".f_left").find("select[name='paging_size']").eq(0).change(function() {
                pageSize = $(this).val();
                $.cookie("boardPageReqCnt", null, {
                    path: '/'
                });
                $.cookie("boardPageReqCnt", pageSize, {
                    expires: 365
                });

                // list size 변경시 첫페이지 첫 쪽으로 초기화 
                currentPage = 1;
                currentBlock = 1;

                if ($.isFunction(fn_getDat)) {
                    fn_getDat();
                }
            });

            /* 다음페이지 이벤트 정의 */
            $(_paging_draw_area).find(".n_paging-wrap").find("#next").click(function() {
                currentBlock++;
                nextCnt++;
                prevCnt--;
                flag = "N";

                maintainPage = currentPage;

                currentPage = currentBlock * 10 - 10 + 1;

                blockCnt1 = currentPage;
                if ($.isFunction(fn_getDat)) {
                    fn_getDat();
                }
            });

            /* 이전페이지 이벤트 정의 */
            $(_paging_draw_area).find(".n_paging-wrap").find("#pre").click(function() {
                currentBlock--;
                prevCnt++;
                nextCnt--;
                flag = "P";

                maintainPage = currentPage; // 2014-09-02 maintain 변수 선언
                currentPage = currentBlock * 10 - 10 + 1;


                if (currentPage < 0) {
                    currentPage = 1;
                }

                //blockCnt1 = currentPage-1;
                if ($.isFunction(fn_getDat)) {
                    fn_getDat();
                }
            });

            /* 첫 페이지로 Click */
            $(_paging_draw_area).find(".n_paging-wrap").find("#first_pre").click(function() {

                flag = "F";

                // 현재 내가 있는 Block에서 첫 Block까지 몇 Block을 가야 하는가(현재 Block(currentBlock) - 첫 Block(firstBlock)) 
                moveBlockCnt = Number(currentBlock) - Number(firstBlock);

                // 현재 Block(currentBlock) - 내가 맨앞 Block으로 이동하기 위해 가야하는 Block 수(moveBlockCnt) = 목적지 Block(첫 Block)
                currentBlock = Number(currentBlock) - Number(moveBlockCnt);

                // 페이지 번호(각 Block의 첫 페이지)
                currentPage = 1;

                if ($.isFunction(fn_getDat)) {
                    fn_getDat();
                }
            });

            /* 끝 페이지로 Click */
            $(_paging_draw_area).find(".n_paging-wrap").find("#last_next").click(function() {

                flag = "L";

                // 현재 내가 있는 Block에서 끝 Block까지 몇 Block을 가야 하는가(끝 Block(lastBlock) - 현재 Block(currentBlock))
                moveBlockCnt = Number(lastBlock) - Number(currentBlock);

                // 현재 Block(currentBlock) + 내가 끝 Block으로 이동하기 위해 가야하는 Block 수(moveBlockCnt) = 목적지 Block(끝 Block)
                currentBlock = Number(currentBlock) + Number(moveBlockCnt);

                // 페이지 번호(각 Block의 첫 페이지)
                //currentPage = (Number(lastBlock) * 10) - 9;
                currentPage   =  Math.ceil(totlCnt / 5);
                

                if ($.isFunction(fn_getDat)) {
                    fn_getDat();
                }
            });

            /* 페이징 사이즈 리스트 열기/닫기 버튼(화살표) */
            $("a[name='paging_size_list']").click(function() {
                // 페이징 사이즈 리스트가 열려있을때
                /*if($(this).parent().parent().hasClass("open")){
$(this).parent().parent().removeClass("open").addClass("close");
}
// 페이징 사이즈 리스트가 닫혀있을때
else{
$(this).parent().parent().removeClass("close").addClass("open");
}*/
                $(this).parent().next().slideToggle(200);
                $(this).parent().next().focus();
            });

            /* 페이징 사이즈 리스트 열기/닫기 버튼(내용) */
            $("span[name='page_size_default']").click(function() {
                // 페이징 사이즈 리스트가 열려있을때
                /*if($(this).parent().parent().hasClass("open")){
$(this).parent().parent().removeClass("open").addClass("close");
}
// 페이징 사이즈 리스트가 닫혀있을때
else{
$(this).parent().parent().removeClass("close").addClass("open");
}*/
                $(this).parent().next().slideToggle(200);
                $(this).parent().next().focus();
            });

            /* 페이징 사이즈 리스트 blur 처리 */
            $("div[name='paging_size_div']").attr("tabindex", -1).blur(function() {
                setTimeout(function() {
                    $("div[name='paging_size_div']").slideUp(200);
                }, 100);
            });

            if (bf_pageSize != pageSize) {
                currentPage = 1;
            }
            //var firstRow = ((currentPage%10==0?10:currentPage%10)*pageSize-pageSize+1)-1;
            //var lastRow  = ((currentPage%10==0?10:currentPage%10)*pageSize);
            if ($.isFunction(callback)) {
                try {
                    $("#" + table_id).find("tbody > *").remove();
                } catch (e) {}
                callback($("#" + table_id), rec);
            }
            bf_pageSize = pageSize;
        },
        getTotSize: function() {
            var totSize = pageSize * 10;
            return totSize + "";
        },
        getCurrentBlock: function() {
            return currentBlock + "";
        },
        getCurrentPage: function() {
            return currentPage + "";
        },
        getListSize: function() {
            return pageSize + "";
        },
        initPage: function() {
            currentPage = 1;
            currentBlock = 1;
        },
        setTotDataSize: function(dataCnt) {
            firstPageNo = "1"; // 첫 페이지
            lastPageNo = Math.ceil(dataCnt / pageSize); // 끝 페이지
            firstBlock = "1"; // 첫 페이지 단위 번호
            lastBlock = Math.ceil(lastPageNo / 10); // 끝 페이지 단위 번호
        }

    };
    return paging;
};
/**
 * view제어
 * @param pagingSize
 * @return
 */

function setPageSize(pagingSize) {
    pageSize = pagingSize;

    $(".combolist_type1").css("display", "none");

    $("select[name='paging_size'] option[value=" + pageSize + "]").attr("selected", "true");
    //$("span[name='page_size_default']").text(pageSize);

    $("select[name='paging_size']").change();
}

/**
 * 빈 행 만드는 함수
 * @param trCnt : 빈 행의 개수
 * @param recLength : rec 길이
 */

function getTempTr(colCnt, trCnt, recLength, aTrHeight) {
    var tempTd = "";
    var trHtml = "";
    var trHeight = 25;

    if (null != aTrHeight && undefined != aTrHeight) {
        trHeight = aTrHeight;
    }

    if (recLength > 0) {
        trCnt = trCnt - recLength;
    } else {
        //
        if (trCnt < 1) trCnt = 10;
        $(".paging-wrap").hide(); // 페이징 숨김
    }

    for (var j = 0; colCnt > j; j++) {
        tempTd += "<td></td>";
    }

    for (var i = 0; trCnt > i; i++) {

        trHtml += "<tr style='height:" + trHeight + "px;'>" + tempTd + "</tr>";
        // trHtml += "<tr >"+tempTd+"</tr>";
    }

    return trHtml;
}