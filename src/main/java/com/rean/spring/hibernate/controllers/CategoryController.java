package com.rean.spring.hibernate.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("admin/categorymg")
public class CategoryController {

	@RequestMapping(value="")
	public String productAdmin(){
		return "admin/category/category";
	}
}
