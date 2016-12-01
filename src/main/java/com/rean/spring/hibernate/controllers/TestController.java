package com.rean.spring.hibernate.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rean.spring.hibernate.entities.Category;
import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.service.CategoryService;
import com.rean.spring.hibernate.service.ProductService;

@Controller
public class TestController {

	@Autowired
	private ProductService productService;
	
	@Autowired 
	private CategoryService categoryService;
	
	@RequestMapping(value="/test", method = RequestMethod.GET)
	public String homePage(){
		return "home";
	}
	
/*	@RequestMapping(value="/listproduct", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Map<String, Object>> listProduct(){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("allStudent", productService.getAllProduct());
		return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
	}*/
	
	
	// Hibernate for selecting all category
	@RequestMapping(value="/listcategory", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Map<String, Object>> listCategory(Pagination pagination, @RequestParam("schCatname") String schCatName){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("allCategory", categoryService.getAllCategory(pagination, schCatName, true));
		return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
	}
	
	// Hibernate for inserting category
	@RequestMapping(value="/insertcategory", method= RequestMethod.POST)
	@ResponseBody
	public Boolean insertCategory(@RequestBody Category category){
		
		System.out.println("cateogry1 " + category.getCatName());
		return categoryService.insertCategory(category);
		
	}
	// Hibernate for delecting category
	@RequestMapping(value="/deletecategory/{catId}", method= RequestMethod.GET)
	@ResponseBody
	public Boolean deleteCategory(@PathVariable("catId") int catId){
		return categoryService.deleteCategory(catId);
		
	}
	
	// Hibernate for searching category
	@RequestMapping(value="/searchcategory/{catId}", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Map<String, Object>> searchCategory(@PathVariable("catId") int catId){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("searchCategory", categoryService.searchCategory(catId));
		return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
	}
	
	
	// Hibernate for updating category
	@RequestMapping(value="/updatacategory/{catId}", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<Map<String, Object>> updateCategory(@PathVariable("catId") int catId, @RequestBody Category category){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("updateCategory", categoryService.updateCategory(category, catId));
		return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
	}
	
	@RequestMapping(value="/error")
	public String getError(){
		return "error/404";
	}
}
