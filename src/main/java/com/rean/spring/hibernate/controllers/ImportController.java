package com.rean.spring.hibernate.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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
	@RequestMapping(value="getimportpro", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<Map<String, Object>> getImportPro(@RequestParam("startDate") String startDate, @RequestParam("endDate") String endDate){
		return null;
		
	}
	
	
}
