package com.rean.spring.hibernate.controllers;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rean.spring.hibernate.service.DashboardService;

@Controller
//@RequestMapping("admin/dashboard")
public class DashboardController {
	@Autowired
	private DashboardService dashboardService;

	@RequestMapping(value="admin/dashboard")
	public String homeAdmin(){
		
		return "admin/dashboard/dashboard";
	}
	
	@RequestMapping(value="admin/dashboard/getstockproduct")
	@ResponseBody
	public ResponseEntity<Map<String, Object>> getStockProduct(){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("dollar", dashboardService.getStockProduct(true));
		map.put("reil", dashboardService.getStockProduct(false));
		return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
	}
	
	@RequestMapping(value="admin/dashboard/getrate")
	@ResponseBody
	public ResponseEntity<Map<String, Object>> getRate(){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("rate", dashboardService.getRate());
		
		return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
	}
}
