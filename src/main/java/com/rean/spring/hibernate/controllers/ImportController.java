package com.rean.spring.hibernate.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("admin/importmg")
public class ImportController {

	@RequestMapping(value="")
	public String productAdmin(){
		return "admin/import/import";
	}
}
