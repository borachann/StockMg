package com.rean.spring.hibernate.admin.controllers;

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

import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.entities.Unit;
import com.rean.spring.hibernate.service.UnitService;

@Controller
@RequestMapping("admin/unitmg")
public class UnitController {
	@Autowired
	private UnitService unitService; // create object of unitservice

	// open view unit
	@RequestMapping(value="")
	public String productAdmin(){
		return "admin/unit/unit";
	}
	
	// get all unit return as json
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
	
	// get all unit for setting auto complete
	@RequestMapping(value="/getallunit")
	@ResponseBody
	public ResponseEntity<Map<String, Object>> getAllUnit(){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("unit", unitService.getAllUnit(null, "", false));
		return new ResponseEntity<>(map, HttpStatus.OK);
	}
	
	// insert unit return as boolean
	@RequestMapping(value="/insertunit", method= RequestMethod.POST)
	@ResponseBody
	public Boolean insertUnit(@RequestBody Unit unit){
		return unitService.insertUnit(unit);
	}
	
	// update unit return as boolean
	@RequestMapping(value="/updateunit", method = RequestMethod.POST)
	@ResponseBody
	public Boolean updateUnit(@RequestBody Unit unit){
		return unitService.updateUnit(unit);
	}
	
	// delete unit return as boolean
	@RequestMapping(value="/deleteunit/{unitId}")
	@ResponseBody
	public Boolean deleteUnit(@PathVariable("unitId") int unitId){
		return unitService.deleteUnit(unitId);
	}
	
	// open page for edit unit
	@RequestMapping(value="/showunit/{unitId}", method= RequestMethod.GET)
	public String showUnit(Model model, @PathVariable("unitId") int unitId){
		model.addAttribute("unit", unitService.searchUnit(unitId));
		return "admin/unit/editunit";
	}
	
}
