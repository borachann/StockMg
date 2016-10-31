package com.rean.spring.hibernate.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("admin/salemg")
public class SaleController {

	@RequestMapping(value="")
	public String productAdmin(){
		return "admin/sale/sale";
	}
}
