package com.rean.spring.hibernate.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("admin/productmg")
public class ProductController {

	@RequestMapping(value="")
	public String productAdmin(){
		return "admin/product/product";
	}
}
