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
                  <th>កែប្រែ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="hide">1,001</td>
                  <td>1,001</td>
                  <td>Lorem</td>
                  <td>ipsum</td>
                  <td>dolor</td>
                  <td>sit</td>
                  <td>1,001</td>
                  <td>Lorem</td>
                  <td>ipsum</td>
                  <td>dolor</td>
                </tr>
              </tbody>
            </table>
          </div>
<%@ include file="../includes/pagination.jsp" %>
<%@ include file="addproduct.jsp" %>
<script src="${baseUrl}/resources/js/product.js"></script>	
<%@ include file="../includes/footer.jsp" %>