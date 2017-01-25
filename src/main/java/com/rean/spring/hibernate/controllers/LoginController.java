package com.rean.spring.hibernate.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {

	@RequestMapping(value="/")
	public String loginPage(){
		return "login";
	}
}
