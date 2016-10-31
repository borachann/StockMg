package com.rean.spring.hibernate.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("admin/customermg")
public class CustomerController {

	@RequestMapping(value="")
	public String productAdmin(){
		return "admin/customer/customer";
	}
}
