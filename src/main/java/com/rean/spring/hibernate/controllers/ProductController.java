package com.rean.spring.hibernate.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.service.ProductService;

@Controller
@RequestMapping("admin/productmg")
public class ProductController {

	@Autowired
	private ProductService productService;
	@RequestMapping(value="")
	public String productAdmin(){
		return "admin/product/product";
	}
	
	@RequestMapping(value="listproducts")
	@ResponseBody
	public ResponseEntity<Map<String, Object>> getAllProducts(Pagination pagination, @RequestParam("schStrName") String schStrName){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("allObject", productService.getAllProduct());
		
		return new ResponseEntity<Map<String, Object>>(map,HttpStatus.OK);
	}
}
