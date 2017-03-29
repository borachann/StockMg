package com.rean.spring.hibernate.admin.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("admin/reportmg")
public class ReportController {

	@RequestMapping(value="")
	public String productAdmin(){
		return "admin/report/report";
	}
}
