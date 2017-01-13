package com.rean.spring.hibernate.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rean.spring.hibernate.entities.Customer;
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
	
	// save customer
	@RequestMapping(value="/savecustomer")
	@ResponseBody
	public boolean saveCustomer(Customer customer){
		return customerService.saveCustomer(customer);
	}
}
