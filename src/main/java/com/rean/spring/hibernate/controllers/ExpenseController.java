package com.rean.spring.hibernate.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("admin/expensemg")
public class ExpenseController {

	@RequestMapping(value="")
	public String productAdmin(){
		return "admin/expense/expense";
	}
}