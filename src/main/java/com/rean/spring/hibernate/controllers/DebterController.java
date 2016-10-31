package com.rean.spring.hibernate.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("admin/debtermg")
public class DebterController {

	@RequestMapping(value="")
	public String productAdmin(){
		return "admin/debter/debter";
	}
}
