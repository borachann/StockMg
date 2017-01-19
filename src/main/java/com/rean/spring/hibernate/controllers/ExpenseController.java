package com.rean.spring.hibernate.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rean.spring.hibernate.entities.Expense;
import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.form.ExpenseForm;
import com.rean.spring.hibernate.form.FormProduct;
import com.rean.spring.hibernate.service.ExpenseService;

@Controller
@RequestMapping("admin/expensemg")
public class ExpenseController {
	@Autowired
	private ExpenseService expenseService;

	// return view home page of expense
	@RequestMapping(value="")
	public String productAdmin(){
		return "admin/expense/expense";
	}
	
	// save expense
	@RequestMapping(value="/saveExpense", method = RequestMethod.POST)
	@ResponseBody
	public Boolean saveExpense(@RequestBody List<ExpenseForm> expenseForm){
		return expenseService.saveExpense(expenseForm);
	}
	
	// get expense
	@RequestMapping(value="/getExpense")
	@ResponseBody
	public ResponseEntity<Map<String, Object>> getAllExpense(Pagination pagination, @RequestParam("startDate") String sDate, @RequestParam("endDate") String eDate){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("allObject", expenseService.getAllExpense(pagination, sDate, eDate, true));
		List<Expense> totalRecord = expenseService.getAllExpense(pagination, sDate, eDate, false);
		pagination.setTotalCount(Long.parseLong(totalRecord.size()+""));
		pagination.setTotalPages(pagination.totalPages());
		map.put("pagination", pagination);
		return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
	}
	
	// get expense Detail
	@RequestMapping(value="/getexpensedetail")
	@ResponseBody
	public ResponseEntity<Map<String, Object>> getExpenseDetail(@RequestParam("expId") int expId){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("expensedetail", expenseService.getExpenseDetail(expId));
		return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
	}
	
	// return view for update expense
	@RequestMapping(value="/showexpense/{expId}")
	public String showDetial(Model model, @PathVariable("expId") String expId){
		model.addAttribute("expId", expId);
		return "admin/expense/editexpense";
	}

	
	/*// update expense
		@RequestMapping(value="/updateimport/{impId}", method = RequestMethod.POST)
		@ResponseBody
		public ResponseEntity<Map<String, Object>> updateImport(@RequestBody List<FormProduct> formProduct, @PathVariable("impId") int impId){
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("importproduct", importService.updateImportPro(formProduct, impId));
			return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
		}*/
}
