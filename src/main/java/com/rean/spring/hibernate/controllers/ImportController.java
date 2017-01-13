package com.rean.spring.hibernate.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rean.spring.hibernate.entities.Import;
import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.form.FormProduct;
import com.rean.spring.hibernate.service.ImportService;

@Controller
@RequestMapping("admin/importmg")
public class ImportController {

	@Autowired
	private ImportService importService;
	
	@RequestMapping(value="")
	public String productAdmin(){
		return "admin/import/import";
	}
	
	// save import product
	@RequestMapping(value="saveimportpro", method = RequestMethod.POST)
	@ResponseBody
	public Boolean saveImportPro(@RequestBody List<FormProduct> formProduct){
		return importService.saveImportPro(formProduct);
	}
	
	// get all import list during 1 week
	@RequestMapping(value="getimportpro", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Map<String, Object>> getImportPro(Pagination pagination, @RequestParam("startDate") String startDate, @RequestParam("endDate") String endDate){
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("allObject", importService.getImportPro(pagination, startDate, endDate, true));
		List<Import> importPro = importService.getImportPro(pagination, startDate, endDate, false);
		pagination.setTotalCount(Long.parseLong(importPro.size() + ""));
		pagination.setTotalPages(pagination.totalPages());
		map.put("pagination", pagination);
		return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
		
	}
	
	// get import detail
	@RequestMapping(value="getimportdetail", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Map<String, Object>> getImportDetail(@RequestParam("impId") String impId){
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("importDetail", importService.getImportDetail(impId));

		return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
		
	}
	
	// open view for update import product
	@RequestMapping(value="/showimport/{impId}")
	public String showProduct(Model model, @PathVariable("impId") String impId){
		model.addAttribute("impId", impId);
		return "admin/import/editimport";
	}
	
	// update import product
	@RequestMapping(value="/updateimport/{impId}", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<Map<String, Object>> updateImport(@RequestBody List<FormProduct> formProduct, @PathVariable("impId") int impId){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("importproduct", importService.updateImportPro(formProduct, impId));
		return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
	}
	
}
