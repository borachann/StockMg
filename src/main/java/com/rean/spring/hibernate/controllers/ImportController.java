package com.rean.spring.hibernate.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rean.spring.hibernate.dao.ImportDao;
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
}
