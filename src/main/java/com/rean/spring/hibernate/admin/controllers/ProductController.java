package com.rean.spring.hibernate.admin.controllers;

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

import com.rean.spring.hibernate.entities.Category;
import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.entities.Product;
import com.rean.spring.hibernate.entities.Unit;
import com.rean.spring.hibernate.form.FormProduct;
import com.rean.spring.hibernate.service.ProductService;

@Controller
@RequestMapping("admin/productmg")
public class ProductController {

	@Autowired
	private ProductService productService;
	
	// return product view
	@RequestMapping(value="")
	public String productAdmin(){
		return "admin/product/product";
	}
	
	// get all product for admin
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
	
	// get all product for auto complete
	@RequestMapping(value="/listproductsautocomplete", method=RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Map<String, Object>> getAllProductsAutoComplete(){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("allObject", productService.getAllProduct(null, "", false));
		return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
	}
	
	// update product
	@RequestMapping(value="/updateproduct", method = RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Boolean updateProduct(@RequestBody FormProduct product){
		Category category = new Category();
		Unit unit = new Unit();
		Product pro = new Product();
		category.setCatId(product.getCatId());
		unit.setUnitId(product.getUnitId());
		pro.setProId(product.getProId());
		pro.setProName(product.getProName());
		pro.setCategory(category);
		pro.setUnit(unit);
		pro.setProQty(product.getProQty());
		pro.setCostPrice(product.getCostPrice());
		pro.setUnitPrice(product.getUnitPrice());
		pro.setSalePrice(product.getSalePrice());
		pro.setCurrentcy(product.getCurrentcy());
		pro.setStatus(product.getStatus());
		pro.setImgUrl(product.getImgUrl());
		return productService.editProduct(pro);
	}
	
	// open view for update product
	@RequestMapping(value="/showproduct/{proId}")
	public String showProduct(Model model, @PathVariable("proId") int proId){
		model.addAttribute("product", productService.showProduct(proId));
		return "admin/product/editproduct";
	}
	
	// update product status (delete)
	@RequestMapping(value="/deleteproduct/{proId}")
	@ResponseBody
	public Boolean deleteProduct(@PathVariable("proId") int proId, @RequestParam("status") Boolean status){
		return productService.deleteProduct(proId, status);
	}
	
	// save product
	@RequestMapping(value="/addproduct", method = RequestMethod.POST)
	@ResponseBody
	public Boolean addProduct(@RequestBody FormProduct product){
		Category category = new Category();
		Unit unit = new Unit();
		Product pro = new Product();
		category.setCatId(product.getCatId());
		unit.setUnitId(product.getUnitId());
		pro.setCategory(category);
		pro.setUnit(unit);
		pro.setProName(product.getProName());
		pro.setProQty(product.getProQty());
		pro.setCostPrice(product.getCostPrice());
		pro.setUnitPrice(product.getUnitPrice());
		pro.setSalePrice(product.getSalePrice());
		pro.setCurrentcy(product.getCurrentcy());
		pro.setStatus(product.getStatus());
		pro.setImgUrl(product.getImgUrl());
		
		return productService.addProduct(pro);
		
	}
}
