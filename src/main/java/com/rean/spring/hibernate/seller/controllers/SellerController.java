package com.rean.spring.hibernate.seller.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rean.spring.hibernate.service.CategoryService;
import com.rean.spring.hibernate.service.ProductService;

@Controller
public class SellerController {

	@Autowired 
	private CategoryService categoryService;
	@Autowired
	private ProductService productService;
	
	@RequestMapping(value="seller")
	public String sellerHomePage(Model model){
		
		model.addAttribute("allCate", categoryService.getAllCategory(null, "" , false));
		model.addAttribute("allProduct", productService.getAllProduct(null, "", false));
		
		return "seller/homepage";
	}
}
