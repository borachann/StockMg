package com.rean.spring.hibernate.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("admin/unitmg")
public class UnitController {

	@RequestMapping(value="")
	public String productAdmin(){
		return "admin/unit/unit";
	}
}
