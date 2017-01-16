package com.rean.spring.hibernate.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rean.spring.hibernate.entities.Customer;
import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.service.CustomerService;

@Controller
@RequestMapping("admin/customermg")
public class CustomerController {
	@Autowired
	private CustomerService customerService;
	
	@RequestMapping(value="")
	public String productAdmin(){
		return "admin/customer/customer";
	}
	
	// get all customer
	@RequestMapping(value="/getAllCustomer", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Map<String, Object>> getAllCustomer(Pagination pagination, @RequestParam("schStrName") String str){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("allObject", customerService.getCustomer(pagination, str, true));
		List<Customer> totalRecord = customerService.getCustomer(pagination, str, false);
		pagination.setTotalCount(Long.parseLong(totalRecord.size()+""));
		pagination.setPerPage(pagination.totalPages());
		map.put("pagination", pagination);
		return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
		
	}
	
	// save customer
	@RequestMapping(value="/savecustomer", method = RequestMethod.POST)
	@ResponseBody
	public Boolean saveCustomer(@RequestBody Customer customer){
		return customerService.saveCustomer(customer);
	}
}
