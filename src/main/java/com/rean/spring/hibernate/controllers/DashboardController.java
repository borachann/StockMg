package com.rean.spring.hibernate.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
//@RequestMapping("admin/dashboard")
public class DashboardController {

	@RequestMapping(value="/")
	public String homeAdmin(){
		return "admin/dashboard/dashboard";
	}
	
}
