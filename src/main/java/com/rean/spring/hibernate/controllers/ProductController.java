package com.rean.spring.hibernate.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.entities.Product;
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
	
	@RequestMapping(value="/listproducts", method = RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<Map<String, Object>> getAllProducts(Pagination pagination, @RequestParam("schStrName") String schStrName){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("allObject", productService.getAllProduct(pagination, schStrName, true));
		List<Product> product = productService.getAllProduct(pagination, schStrName, false);
		pagination.setTotalCount(Long.parseLong(product.size() + ""));
		pagination.setTotalPages(pagination.totalPages());
		map.put("pagination", pagination);
		return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
	}
	
	@RequestMapping(value="/updateproduct")
	@ResponseBody
	public Boolean updateProduct(@RequestBody Product product){
		return null;
		
	}
	@RequestMapping(value="/showproduct/{proId}")
	public String showProduct(Model model, @PathVariable("proId") int proId){
		model.addAttribute("product", productService.showProduct(proId));
		return "admin/product/editproduct";
		
	}
	@RequestMapping(value="/deleteproduct/{proId}")
	@ResponseBody
	public Boolean deleteProduct(@RequestParam("proId") int proId){
		return null;
		
	}
	@RequestMapping(value="/addproduct", method = RequestMethod.POST)
	@ResponseBody
	public Boolean addProduct(@RequestBody Product product){
		return productService.addProduct(product);
		
	}
}
