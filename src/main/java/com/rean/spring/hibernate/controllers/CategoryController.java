package com.rean.spring.hibernate.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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

@Controller
@RequestMapping("admin/categorymg")
public class CategoryController {

	@Autowired 
	private CategoryService categoryService;
	
	@RequestMapping(value="")
	public String productAdmin(){
		return "admin/category/category";
	}
	// Hibernate for selecting all category return json
		@RequestMapping(value="/listcategory", method = RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
		@ResponseBody
		public ResponseEntity<Map<String, Object>> listCategory(Pagination pagination, @RequestParam("schCatName") String schCatName){
			System.out.println("dddddddd " + schCatName);
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("allCategory", categoryService.getAllCategory(pagination, schCatName , true));
			List<Category> totalRecord = categoryService.getAllCategory(pagination,schCatName, false);
			pagination.setTotalCount(Long.parseLong(totalRecord.size() + ""));
			pagination.setTotalPages(pagination.totalPages());
			map.put("pagination", pagination);
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
}
