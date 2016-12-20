package com.rean.spring.hibernate.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rean.spring.hibernate.entities.Rate;
import com.rean.spring.hibernate.service.DashboardService;
import com.rean.spring.hibernate.service.RateService;

@Controller
@RequestMapping("admin/ratemg")
public class RateController {

	@Autowired
	private DashboardService dashboardService; 
	
	@Autowired
	private RateService rateService;
	
	@RequestMapping(value="/createrate")
	@ResponseBody
	public ResponseEntity<Map<String, Object>> createRate(){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("createrate", rateService.createRate());
		
		return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
	}
	
	@RequestMapping(value="/updaterate", method=RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<Map<String, Object>> updateRate(@RequestBody Rate rate){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("updaterate", rateService.updateRate(rate));
		
		return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
	}
}
