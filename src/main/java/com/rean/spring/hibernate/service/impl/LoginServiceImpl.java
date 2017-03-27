package com.rean.spring.hibernate.service.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rean.spring.hibernate.dao.LogInDao;
import com.rean.spring.hibernate.entities.TblUser;
import com.rean.spring.hibernate.service.LoginService;

@Service
public class LoginServiceImpl implements LoginService {
	
	@Autowired
	private LogInDao loginDao;

	@Override
	@Transactional
	public TblUser loginUser(String userName, String userPass) {
		// TODO Auto-generated method stub
		return loginDao.loginUser(userName, userPass);
	}

}
