package com.rean.spring.hibernate.admin.controllers;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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
	public ResponseEntity<Map<String, Object>> authUser(HttpSession session, @RequestParam("userName") String userName, @RequestParam("userPassword") String userPass){
		Map<String, Object> map = new HashMap<String, Object>();
		TblUser user = loginService.loginUser(userName, userPass);
		map.put("allObject", user);
		if(user != null){
			session.setAttribute("UserSession", user); 
		}
	
		return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
	}
	
	@RequestMapping(value="/logout")
	public String logoutPage(HttpSession session){
		session.removeAttribute("UserSession"); 
		return "login";
	}
}
