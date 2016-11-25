package com.rean.spring.hibernate.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="/error")
public class HandleErrorController {
@RequestMapping(value="/404")    
    public String error404() {
        return "error/404";
    }
}