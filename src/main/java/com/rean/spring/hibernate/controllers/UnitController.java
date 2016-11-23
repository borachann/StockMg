package com.rean.spring.hibernate.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rean.spring.hibernate.entities.Pagination;

@Controller
@RequestMapping("admin/unitmg")
public class UnitController {

	@RequestMapping(value="")
	public String productAdmin(){
		return "admin/unit/unit";
	}
	
	@RequestMapping(value="listunit")
	@ResponseBody
	public ResponseEntity<Map<String, Object>> listUnit(Pagination pagination, @RequestParam("schStrName") String schStrName){
		Map<String, Object> map = new HashMap<String, Object>();
		
		
		return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
	}
}
