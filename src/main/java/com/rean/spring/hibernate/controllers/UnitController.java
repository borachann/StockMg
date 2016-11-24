package com.rean.spring.hibernate.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.entities.Unit;
import com.rean.spring.hibernate.service.UnitService;

@Controller
@RequestMapping("admin/unitmg")
public class UnitController {
	@Autowired
	private UnitService unitService;

	@RequestMapping(value="")
	public String productAdmin(){
		return "admin/unit/unit";
	}
	
	@RequestMapping(value="/listunit")
	@ResponseBody
	public ResponseEntity<Map<String, Object>> listUnit(Pagination pagination, @RequestParam("schStrName") String schStrName){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("allObject", unitService.getAllUnit(pagination, schStrName, true));
		List<Unit> totalRecord =  unitService.getAllUnit(pagination, schStrName, false);
		pagination.setTotalCount(Long.parseLong(totalRecord.size() + ""));
		pagination.setTotalPages(pagination.totalPages());
		map.put("pagination", pagination);
		return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
	}
}
