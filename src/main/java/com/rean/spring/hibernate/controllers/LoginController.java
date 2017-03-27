package com.rean.spring.hibernate.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rean.spring.hibernate.entities.Category;
import com.rean.spring.hibernate.entities.TblUser;
import com.rean.spring.hibernate.service.LoginService;

@Controller
public class LoginController {
	
	@Autowired
	private LoginService loginService;

	@RequestMapping(value="/")
	public String loginPage(){
		return "login";
	}
	
	@RequestMapping(value="/auth" , method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Map<String, Object>> authUser(@RequestParam("userName") String userName, @RequestParam("userPassword") String userPass){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("allObject", loginService.loginUser(userName, userPass));
	
		return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
	}
	
}
